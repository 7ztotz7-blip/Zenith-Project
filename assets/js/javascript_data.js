// assets/js/javascript_data.js
const courseData = {
    id: "javascript",
    title: "JavaScript ES6 for Dynamic Web Applications",
    description: "ควบคุมตรรกะหน้าเว็บและสร้างลูกเล่น Interactive แบบเรียลไทม์",
    lessons: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        content: {
            th: {
                title: `บทที่ ${i + 1}: ${getJSTitleTH(i + 1)}`,
                desc: `เจาะลึกคำสั่ง JavaScript ในเรื่อง ${getJSTitleTH(i + 1)} เพื่อเพิ่มความฉลาดให้ระบบ...`,
                code: `// ตัวอย่างโค้ดบทที่ ${i + 1}\nconsole.log('Zenith Active!');\nconst updateStatus = () => { return true; };`
            },
            en: {
                title: `Chapter ${i + 1}: ${getJSTitleEN(i + 1)}`,
                desc: `Understand dynamic web programming with ${getJSTitleEN(i + 1)}.`,
                code: `console.log('Zenith Engine Running');`
            }
        },
        quiz: {
            q: `คำถามประจำบทที่ ${i + 1}: ตรรกะข้อใดในเรื่อง ${getJSTitleTH(i + 1)} ที่ทำงานได้ถูกต้องที่สุด?`,
            options: ["ตัวเลือก A (ผิด)", "ตัวเลือก B (ผิด)", "ตัวเลือก C (ผิด)", "ตัวเลือก D (คำตอบที่ถูก)"],
            ans: 3
        }
    }))
};

function getJSTitleTH(id) {
    const titles = ["แนะนำ JavaScript และการ Run โค้ดบนเบราว์เซอร์", "ตัวแปรและประเภทข้อมูล (let, const, ชนิดข้อมูล)", "ตัวดำเนินการและการคำนวณทางคณิตศาสตร์", "การควบคุมทิศทาง (If-Else และ Switch Case)", "การทำงานซ้ำ (For, While Loops)", "การสร้างและใช้งานฟังก์ชัน (Functions & Arrow Functions)", "โครงสร้างข้อมูลแบบอาเรย์ (Arrays & Methods)", "การจัดการข้อมูล Object และ JSON", "การควบคุม HTML Element (DOM Manipulation)", "การดักจับเหตุการณ์ (Event Listeners)", "ระบบเวลาและการทำงานแบบอะซิงโครนัส (setTimeout, Promises)", "การจัดการ LocalStorage เพื่อเก็บข้อมูลผู้ใช้"];
    return titles[id - 1];
}
function getJSTitleEN(id) {
    const titles = ["Introduction to JavaScript", "Variables & Data Types", "Operators", "Conditionals", "Loops", "Functions", "Arrays & Methods", "Objects & JSON", "DOM Manipulation", "Event Listeners", "Asynchronous JS", "LocalStorage & State"];
    return titles[id - 1];
}