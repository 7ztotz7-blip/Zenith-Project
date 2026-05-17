const courseData = {
    title: "CSS Styling & UI Design",
    themeColor: "#38bdf8", // สีฟ้านีออนสไตล์ Tailwind / CSS Expert
    lessons: [
        {
            id: 1,
            content: {
                th: { title: "🎨 1. รู้จักกับ CSS Selector", desc: "การตกแต่งความสวยงามให้หน้าเว็บ โดยการใช้ Selector ไปเจาะจงจุดที่ต้องการปรับแต่งสไตล์", code: "h1 {\n  color: #38bdf8;\n  font-size: 24px;\n}", quiz: { q: "โค้ดข้างต้นจะเปลี่ยนสีหัวข้อ h1 ให้กลายเป็นสีอะไร?", options: ["สีส้ม", "สีฟ้านีออน", "สีน้ำเงินเข้ม", "สีเทา"], ans: 1 } },
                en: { title: "🎨 1. CSS Selectors Intro", desc: "Styling HTML elements by using selectors to target specific elements on a page.", code: "h1 {\n  color: #38bdf8;\n  font-size: 24px;\n}", quiz: { q: "What color will the h1 element turn into based on the CSS above?", options: ["Orange", "Neon Blue", "Dark Blue", "Gray"], ans: 1 } }
            }
        },
        {
            id: 2,
            content: {
                th: { title: "📦 2. เข้าใจเรื่อง CSS Box Model", desc: "ส่วนประกอบของกล่องรอบๆ เอเลเมนต์ ได้แก่ Margin, Border, Padding และ Content", code: ".card {\n  padding: 20px;\n  margin: 15px;\n  border: 1px solid rgba(255,255,255,0.1);\n}", quiz: { q: "พื้นที่ว่าง 'ภายใน' กล่องกั้นระหว่างเนื้อหาข้อความกับขอบกล่องเรียกว่าอะไร?", options: ["Margin", "Border", "Padding", "Width"], ans: 2 } },
                en: { title: "📦 2. CSS Box Model", desc: "Understanding margins, borders, padding, and content spaces wrapped around an element.", code: ".card {\n  padding: 20px;\n  margin: 15px;\n  border: 1px solid rgba(255,255,255,0.1);\n}", quiz: { q: "What is the inner space between content and its border called?", options: ["Margin", "Border", "Padding", "Width"], ans: 2 } }
            }
        },
        {
            id: 3,
            content: {
                th: { title: "💎 3. ดีไซน์สไตล์ Glassmorphism", desc: "เทคนิคการทำกระจกฝ้าแบบอินเตอร์เฟซโมเดิร์น ผสมผสานสีโปร่งใส แบ็คดร็อปเบลอ และเส้นขอบจางๆ", code: ".glass-panel {\n  background: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(12px);\n}", quiz: { q: "คุณสมบัติ CSS ใดใช้สำหรับทำให้เลเยอร์ด้านหลังเบลอเป็นกระจกฝ้า?", options: ["filter: blur()", "backdrop-filter: blur()", "opacity", "background-blur"], ans: 1 } },
                en: { title: "💎 3. Glassmorphism Design", desc: "Modern frosted glass visual styles blending transparency, backdrop blur, and soft borders.", code: ".glass-panel {\n  background: rgba(255, 255, 255, 0.05);\n  backdrop-filter: blur(12px);\n}", quiz: { q: "Which CSS property is responsible for blurring the background behind an element?", options: ["filter: blur()", "backdrop-filter: blur()", "opacity", "background-blur"], ans: 1 } }
            }
        },
        {
            id: 4,
            content: {
                th: { title: "📱 4. จัดเลย์เอาท์ด้วย Flexbox", desc: "ระบบจัดวางโครงสร้างหน้าเว็บให้ยืดหยุ่น รองรับการแสดงผลทุกหน้าจอ (Responsive)", code: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", quiz: { q: "คำสั่ง justify-content: center; ทำหน้าที่อะไรในระบบ Flexbox?", options: ["จัดกึ่งกลางแนวตั้ง", "จัดกึ่งกลางแนวนอน", "ขยายเต็มหน้าจอ", "ซ่อนเอเลเมนต์"], ans: 1 } },
                en: { title: "📱 4. Flexbox Layouts", desc: "Structuring flexible and modular page layouts optimized for any screen width.", code: ".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", quiz: { q: "What does 'justify-content: center;' do inside a flex container?", options: ["Aligns vertically center", "Aligns horizontally center", "Stretches to full width", "Hides the element"], ans: 1 } }
            }
        },
        {
            id: 5,
            content: {
                th: { title: "⚡ 5. การสร้าง CSS Animation", desc: "ชุบชีวิตหน้าเว็บให้ขยับเคลื่อนไหวได้อย่างสมูทผ่านคุณสมบัติ Keyframes และ Transitions", code: "@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}", quiz: { q: "คีย์เวิร์ดใดใช้ในการนิยามจุดเริ่มต้นและจุดสิ้นสุดของ Animation?", options: ["@keyframes", "@animate", "#animation", "set-time"], ans: 0 } },
                en: { title: "⚡ 5. CSS Animations", desc: "Bringing web interfaces to life with smooth transitions and timeline keyframes.", code: "@keyframes fadeIn {\n  from { opacity: 0; }\n  to { opacity: 1; }\n}", quiz: { q: "Which CSS rule definition handles custom state changes on timelines?", options: ["@keyframes", "@animate", "#animation", "set-time"], ans: 0 } }
            }
        }
    ]
};