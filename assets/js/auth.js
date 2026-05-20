// assets/js/auth.js

// 1. นำเข้าระบบ Firebase SDK ผ่านช่องทาง CDN สำหรับใช้บนหน้าเว็บเบราว์เซอร์โดยตรง
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

// 🔑 นี่คือรหัสเชื่อมต่อจริงของสหายชาญวิทย์
const firebaseConfig = {
  apiKey: "AIzaSyAVMdyZe6huNsek6wuGSwAfg67GxTPbcJo",
  authDomain: "zenith-project-1c483.firebaseapp.com",
  projectId: "zenith-project-1c483",
  storageBucket: "zenith-project-1c483.firebasestorage.app",
  messagingSenderId: "236451050475",
  appId: "1:236451050475:web:d35444e7384a9989a49fae",
  measurementId: "G-RCWESQPJB1"
};

// 2. เริ่มต้นเชื่อมต่อกับระบบคลาวด์
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// 3. ตัวตรวจจับเมื่อผู้เรียนกดปุ่มสร้างบัญชีในหน้า register.html
document.getElementById('registerForm')?.addEventListener('submit', async (e) => {
    e.preventDefault(); // ป้องกันหน้าเว็บรีเฟรชตัวเอง

    // ดึงค่าข้อมูลจากช่องกรอกในหน้ากากดาร์กโหมด
    const name = document.getElementById('regName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const password = document.getElementById('regPassword').value;
    const err = document.getElementById('errorMsg');

    // ตรวจสอบความยาวของชื่อ
    if (name.length < 2) {
        err.textContent = 'กรุณาระบุชื่อที่มีอย่างน้อย 2 ตัวอักษรครับ';
        err.classList.remove('hidden');
        return;
    }

    try {
        // 🚀 สั่งยิงข้อมูลขึ้นเซิร์ฟเวอร์ Google Firebase เพื่อสร้างบัญชีจริง
        await createUserWithEmailAndPassword(auth, email, password);
        
        // บันทึกสถิติเริ่มต้นลงเครื่องในสคีมาของ Zenith ควบคู่กัน
        localStorage.setItem('zenith_user', name);
        localStorage.setItem('zenith_completed_lessons', '0');
        localStorage.setItem('zenith_progress', '0');          
        localStorage.setItem('zenith_streak', '0');            
        localStorage.setItem('zenith_last_date', new Date().toDateString());
        localStorage.setItem('zenith_achievements', '[]');

        alert('สร้างบัญชีบนคลาวด์สำเร็จแล้วครับสหาย!');
        window.location.href = 'index.html'; // เด้งกลับเข้าหน้าหลักของเว็บ

    } catch (error) {
        // จัดการกรณีเกิดปัญหาและแปลเป็นภาษาไทย
        if (error.code === 'auth/email-already-in-use') {
            err.textContent = 'อีเมลนี้มีผู้ใช้งานในระบบคลาวด์แล้วครับ';
        } else if (error.code === 'auth/weak-password') {
            err.textContent = 'รหัสผ่านต้องมีความยาวอย่างน้อย 6 ตัวอักษรครับ';
        } else if (error.code === 'auth/invalid-email') {
            err.textContent = 'รูปแบบอีเมลไม่ถูกต้องครับ';
        } else {
            err.textContent = 'เกิดข้อผิดพลาด: ' + error.message;
        }
        err.classList.remove('hidden'); // แสดงกล่องแจ้งเตือนสีแดง
    }
});