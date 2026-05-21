// ⚠️ เช็คระดับโฟลเดอร์: เนื่องจาก auth.js และ firebase.js นอนอยู่ในโฟลเดอร์ js เดียวกันเป๊ะๆ (อิงตามภาพ assets\js)
// จึงต้องใช้จุดเดียว './firebase.js' เพื่อไม่ให้เบราว์เซอร์หลงทางเดินหาไฟล์ครับ
import { auth, db } from './firebase.js';

import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    signOut, 
    onAuthStateChanged 
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

/**
 * 📝 1. ฟังก์ชันสมัครสมาชิก (Register) พร้อมสร้างข้อมูล Progress เริ่มต้นใน Firestore
 */
export async function registerUser(email, password, username) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // บันทึกข้อมูลตั้งต้นลงฐานข้อมูลคลาวด์ Firestore
        await setDoc(doc(db, "users", user.uid), {
            uid: user.uid,
            username: username,
            email: email,
            createdAt: new Date(),
            progress: {
                html: 0,
                css: 0,
                javascript: 0,
                python: 0,
                php: 0,
                sql: 0
            }
        });

        return { success: true, user: user };
    } catch (error) {
        console.error("Error signing up: ", error.message);
        return { success: false, error: error.message };
    }
}

/**
 * 🔑 2. ฟังก์ชันเข้าสู่ระบบ (Login)
 */
export async function loginUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return { success: true, user: userCredential.user };
    } catch (error) {
        console.error("Error signing in: ", error.message);
        return { success: false, error: error.message };
    }
}

/**
 * 🚪 3. ฟังก์ชันออกจากระบบ (Logout)
 */
export async function logoutUser() {
    try {
        await signOut(auth);
        window.location.href = 'index.html'; 
    } catch (error) {
        console.error("Error signing out: ", error.message);
    }
}

/**
 * 🛡️ 4. ฟังก์ชันตรวจสอบและจัดการเส้นทางอัตโนมัติ (Route Guard / Auto Redirect)
 */
export function checkAuthState(currentPageType) {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            // ✅ แก้ไขจุดพัง: ถ้าผู้ใช้ล็อกอินอยู่แล้ว แต่อุตส่าห์แวะมาหน้า Login/Register ระบบจะเตะส่งไปหน้าหลัก index.html ทันที
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

// ฟังก์ชันเปลี่ยนสถานะปุ่มเมนูด้านบนเมื่อล็อกอินสำเร็จ
function updateNavbarUI(user) {
    const authZone = document.getElementById('auth-zone');
    if (authZone) {
        authZone.innerHTML = `
            <span class="text-slate-700 dark:text-purple-200 text-xs font-bold uppercase tracking-widest border border-blue-200 bg-blue-50 px-4 py-2 rounded-full">
                👋 HI, ${user.email.split('@')[0]}
            </span>
            <button id="nav-logout-btn" class="text-slate-500 hover:text-red-500 text-xs font-bold uppercase tracking-widest transition ml-2">
                Logout
            </button>
        `;
        document.getElementById('nav-logout-btn').addEventListener('click', logoutUser);
    }
}