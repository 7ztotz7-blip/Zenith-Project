import { auth, db } from './firebase.js';
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const COURSE_KEYS = ['python', 'javascript', 'css', 'html', 'php', 'sql'];

export async function syncFromFirestore() {
    const user = auth.currentUser;
    if (!user) return false;
    try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (snap.exists()) {
            const remote = snap.data().progress || {};
            COURSE_KEYS.forEach(key => {
                // remote[key] อาจเป็น 0 (falsy) จาก account เก่า → ถือเป็น 1
                const remoteVal = parseInt(remote[key] || 1);
                const localVal  = parseInt(localStorage.getItem(`zenith_progress_${key}`) || 1);
                localStorage.setItem(`zenith_progress_${key}`, Math.max(remoteVal, localVal));
            });
        }
        return true;
    } catch (err) {
        console.error('[Zenith] syncFromFirestore failed:', err.code, err.message);
        return false;
    }
}

export async function saveToFirestore(courseKey, level) {
    const user = auth.currentUser;
    if (!user) return false;
    try {
        await setDoc(doc(db, 'users', user.uid), {
            progress: { [courseKey]: level }
        }, { merge: true });
        return true;
    } catch (err) {
        console.error('[Zenith] saveToFirestore failed:', err.code, err.message);
        return false;
    }
}

export async function saveQuizScore(courseKey, lessonId) {
    const user = auth.currentUser;
    if (!user) return false;
    try {
        const scoreKey = `${courseKey}_${lessonId}`;
        await setDoc(doc(db, 'users', user.uid), {
            quizScores: { [scoreKey]: Date.now() }
        }, { merge: true });
        return true;
    } catch (err) {
        console.error('[Zenith] saveQuizScore failed:', err.code, err.message);
        return false;
    }
}

export async function getUserData() {
    const user = auth.currentUser;
    if (!user) return null;
    try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        return snap.exists() ? snap.data() : null;
    } catch (err) {
        console.error('[Zenith] getUserData failed:', err.code, err.message);
        return null;
    }
}
