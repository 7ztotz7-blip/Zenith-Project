// assets/js/html_data.js
const courseData = {
    id: "html",
    title: "HTML5 Fundamentals for Web Business",
    description: "โครงสร้างพื้นฐานเว็บไซต์เพื่อการต่อยอดธุรกิจดิจิทัล",
    lessons: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        content: {
            th: {
                title: `บทที่ ${i + 1}: ${getHTMLTitleTH(i + 1)}`,
                desc: `เนื้อหาบทที่ ${i + 1} เกี่ยวกับ ${getHTMLTitleTH(i + 1)} สำหรับจัดการโครงสร้างหน้าเว็บ...`,
                code: `\n<div class="zenith-container">\n  <h1>Zenith Lesson ${i + 1}</h1>\n</div>`
            },
            en: {
                title: `Chapter ${i + 1}: ${getHTMLTitleEN(i + 1)}`,
                desc: `Learning about ${getHTMLTitleEN(i + 1)} and web structuring.`,
                code: `<h1>Zenith Lesson ${i + 1}</h1>`
            }
        },
        quiz: {
            q: `คำถามประจำบทที่ ${i + 1}: ข้อใดอธิบายแท็กในเรื่อง ${getHTMLTitleTH(i + 1)} ได้ถูกต้อง?`,
            options: ["ตัวเลือก A (ผิด)", "ตัวเลือก B (ผิด)", "ตัวเลือก C (คำตอบที่ถูก)", "ตัวเลือก D (ผิด)"],
            ans: 2
        }
    }))
};

function getHTMLTitleTH(id) {
    const titles = ["แนะนำ HTML และการตั้งค่าเครื่องมือ", "โครงสร้างพื้นฐานและแท็ก DOCTYPE", "การจัดการข้อความและหัวข้อ (Heading & Paragraph)", "การสร้างลิงก์และการเชื่อมโยงหน้า (Hyperlinks)", "การแทรกรูปภาพและสื่อมัลติมีเดีย", "การสร้างรายการ (List Tags)", "การสร้างตารางข้อมูล (Table Tags)", "การสร้างฟอร์มรับข้อมูล (Form & Input)", "แท็กแบ่งส่วนสไตล์โมเดิร์น (Semantic HTML)", "การทำ SEO เบื้องต้นด้วย Meta Tags", "การเชื่อมต่อไฟล์ภายนอกและเบื้องหลังเว็บ", "การทดสอบและอัปโหลดไฟล์ HTML ขึ้นเซิร์ฟเวอร์"];
    return titles[id - 1];
}
function getHTMLTitleEN(id) {
    const titles = ["Introduction to HTML", "HTML Structure", "Text & Headings", "Hyperlinks", "Images & Multimedia", "Lists", "Tables", "Forms & Inputs", "Semantic HTML", "SEO & Meta Tags", "External Links", "Deployment"];
    return titles[id - 1];
}