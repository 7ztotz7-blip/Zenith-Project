// นำเข้า Firebase SDK Modules ผ่าน CDN URL ที่เบราว์เซอร์เข้าใจได้ทันที
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";

//  คีย์จริงของ Zenith-Project ที่สหายดึงมาจาก Console
const firebaseConfig = {
  apiKey: "AIzaSyAVMdyZe6huNsek6wuGSwAfg67GxTPbcJo",
  authDomain: "zenith-project-1c483.firebaseapp.com",
  projectId: "zenith-project-1c483",
  storageBucket: "zenith-project-1c483.firebasestorage.app",
  messagingSenderId: "236451050475",
  appId: "1:236451050475:web:d35444e7384a9989a49fae",
  measurementId: "G-RCWESQPJB1"
};

// เริ่มต้นการทำงานของ Firebase ตัวแอปหลัก
const app = initializeApp(firebaseConfig);

//  เปิดใช้งานฟังก์ชันต่างๆ และส่งออก (Export) ให้ไฟล์อื่นเรียกใช้ได้
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app); // รองรับ Phase 10 เรียบร้อย