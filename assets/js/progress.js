import { auth, db } from './firebase.js';
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const COURSE_KEYS = ['python', 'javascript', 'css', 'html', 'php', 'sql'];

export async function syncFromFirestore() {
    const user = auth.currentUser;
    if (!user) return;
    try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        if (snap.exists()) {
            const remote = snap.data().progress || {};
            COURSE_KEYS.forEach(key => {
                const remoteVal = parseInt(remote[key] || '1');
                const localVal  = parseInt(localStorage.getItem(`zenith_progress_${key}`) || '1');
                localStorage.setItem(`zenith_progress_${key}`, Math.max(remoteVal, localVal));
            });
        }
    } catch (_) {}
}

export async function saveToFirestore(courseKey, level) {
    const user = auth.currentUser;
    if (!user) return;
    try {
        await setDoc(doc(db, 'users', user.uid), {
            progress: { [courseKey]: level }
        }, { merge: true });
    } catch (_) {}
}

export async function saveQuizScore(courseKey, lessonId) {
    const user = auth.currentUser;
    if (!user) return;
    try {
        const scoreKey = `${courseKey}_${lessonId}`;
        await setDoc(doc(db, 'users', user.uid), {
            quizScores: { [scoreKey]: Date.now() }
        }, { merge: true });
    } catch (_) {}
}

export async function getUserData() {
    const user = auth.currentUser;
    if (!user) return null;
    try {
        const snap = await getDoc(doc(db, 'users', user.uid));
        return snap.exists() ? snap.data() : null;
    } catch (_) { return null; }
}
