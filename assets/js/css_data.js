// assets/js/css_data.js
const courseData = {
    id: "css",
    title: "Advanced CSS3 & Modern UI Design",
    description: "ออกแบบหน้าเว็บสไตล์อวกาศ มินิมอล และ Glassmorphism ด้วย CSS3",
    lessons: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        content: {
            th: {
                title: `บทที่ ${i + 1}: ${getCSSTitleTH(i + 1)}`,
                desc: `เรียนรู้การตกแต่งหน้าเว็บในเรื่อง ${getCSSTitleTH(i + 1)} เพื่อสร้าง UI ที่ตอบโจทย์ผู้ใช้งาน...`,
                code: `/* ตัวอย่างโค้ดบทที่ ${i + 1} */\n.zenith-card {\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n}`
            },
            en: {
                title: `Chapter ${i + 1}: ${getCSSTitleEN(i + 1)}`,
                desc: `Mastering ${getCSSTitleEN(i + 1)} for professional UI styling.`,
                code: `.glass { backdrop-filter: blur(10px); }`
            }
        },
        quiz: {
            q: `คำถามประจำบทที่ ${i + 1}: คำสั่ง CSS ข้อใดใช้จัดการเกี่ยวกับ ${getCSSTitleTH(i + 1)} ได้ถูกต้อง?`,
            options: ["ตัวเลือก A (ผิด)", "ตัวเลือก B (คำตอบที่ถูก)", "ตัวเลือก C (ผิด)", "ตัวเลือก D (ผิด)"],
            ans: 1
        }
    }))
};

function getCSSTitleTH(id) {
    const titles = ["แนะนำ CSS และการเชื่อมต่อ (Inline, Internal, External)", "Selectors และการเจาะจงกลุ่มเป้าหมาย", "การจัดการสีและพื้นหลัง (Colors & Gradients)", "แบบจำลองกล่อง (Box Model: Margin, Padding, Border)", "การจัดวางตำแหน่ง (CSS Positioning)", "การทำเว็บรองรับทุกหน้าจอด้วย Media Queries", "การจัดเลย์เอาต์ยุคใหม่ด้วย Flexbox", "การจัดเลย์เอาต์ตารางด้วย CSS Grid", "สไตล์ล้ำสมัย Glassmorphism และ Blur Effects", "การทำแอนิเมชันและ Transitions", "การจัดการฟอนต์และ Typography มินิมอล", "การบริหารจัดการโค้ด CSS และสถาปัตยกรรม UI"];
    return titles[id - 1];
}
function getCSSTitleEN(id) {
    const titles = ["Introduction to CSS", "CSS Selectors", "Colors & Gradients", "Box Model", "Positioning", "Responsive Web Design", "Flexbox Layout", "CSS Grid", "Glassmorphism & Effects", "Transitions & Animations", "Typography", "CSS Management"];
    return titles[id - 1];
}