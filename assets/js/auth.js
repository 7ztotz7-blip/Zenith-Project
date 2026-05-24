import { auth, db } from './firebase.js';

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export async function registerUser(email, password, username) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // ตั้งชื่อใน Firebase Auth ด้วย เพื่อให้ user.displayName ใช้งานได้ทุกหน้า
        await updateProfile(user, { displayName: username });

        // สร้าง document ใน Firestore พร้อม progress เริ่มต้นที่ level 1
        await setDoc(doc(db, 'users', user.uid), {
            uid:       user.uid,
            username:  username,
            email:     email,
            createdAt: new Date(),
            progress: {
                python:     1,
                javascript: 1,
                css:        1,
                html:       1,
                php:        1,
                sql:        1
            },
            quizScores: {}
        });

        return { success: true, user };
    } catch (error) {
        console.error('[Zenith] registerUser failed:', error.code, error.message);
        return { success: false, error: error.message };
    }
}

export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error('[Zenith] loginUser failed:', error.code, error.message);
        return { success: false, error: error.message };
    }
}

export async function logoutUser() {
    try {
        await signOut(auth);
        window.location.href = 'landing.html';
    } catch (error) {
        console.error('[Zenith] logoutUser failed:', error.message);
    }
}

export function checkAuthState(currentPageType) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            if (currentPageType === 'auth_page') {
                window.location.href = 'index.html';
            }
            updateNavbarUI(user);
        } else {
            if (currentPageType === 'protected') {
                window.location.href = 'login.html';
            }
        }
    });
}

function updateNavbarUI(user) {
    const authZone = document.getElementById('auth-zone');
    if (!authZone) return;
    const name = user.displayName || user.email.split('@')[0];
    authZone.innerHTML = `
        <span class="text-slate-700 dark:text-purple-200 text-xs font-bold uppercase tracking-widest border border-blue-200 bg-blue-50 px-4 py-2 rounded-full">
            👋 HI, ${name}
        </span>
        <button id="nav-logout-btn" class="text-slate-500 hover:text-red-500 text-xs font-bold uppercase tracking-widest transition ml-2">
            Logout
        </button>
    `;
    document.getElementById('nav-logout-btn').addEventListener('click', logoutUser);
}
