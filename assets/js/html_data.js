const courseData = {
    title: "HTML5 & CSS3 Architecture",
    themeColor: "#e34f26", // สีส้มแดงอิฐสไตล์ HTML
    lessons: [
        {
            id: 1,
            content: {
                th: { title: "🌐 1. โครงสร้างของ HTML5", desc: "รากฐานและโครงสร้างหลักของเว็บไซต์ แท็กต่างๆ เปรียบเสมือนกระดูกชิ้นเอกของหน้าเว็บ", code: "<!DOCTYPE html>\n<html>\n<body>\n  <h1>Zenith</h1>\n</body>\n</html>", quiz: { q: "แท็กใดใช้แสดงผลข้อความหัวข้อขนาดใหญ่ที่สุด?", options: ["<h6>", "<header>", "<head>", "<h1>"], ans: 3 } },
                en: { title: "🌐 1. HTML5 Structure", desc: "The skeletal backbone of web development, defining basic components.", code: "<!DOCTYPE html>\n<html>\n<body>\n  <h1>Zenith</h1>\n</body>\n</html>", quiz: { q: "Which tag defines the largest heading text size?", options: ["<h6>", "<header>", "<head>", "<h1>"], ans: 3 } }
            }
        },
        {
            id: 2,
            content: {
                th: { title: "🎨 2. รู้จักกับ CSS Selector", desc: "การตกแต่งความสวยงามให้หน้าเว็บ โดยการใช้ Selector ไปเจาะจงจุดที่ต้องการแต่ง", code: "h1 {\n  color: #a855f7;\n  font-size: 24px;\n}", quiz: { q: "โค้ดข้างต้นจะเปลี่ยนสีหัวข้อ h1 ให้กลายเป็นสีอะไร?", options: ["สีส้ม", "สีม่วง", "สีน้ำเงิน", "สีเทา"], ans: 1 } },
                en: { title: "🎨 2. CSS Selectors", desc: "Styling HTML elements by using selectors to target specific elements.", code: "h1 {\n  color: #a855f7;\n  font-size: 24px;\n}", quiz: { q: "What color will the h1 element turn into based on the CSS above?", options: ["Orange", "Purple", "Blue", "Gray"], ans: 1 } }
            }
        },
        {
            id: 3,
            content: {
                th: { title: "📦 3. เข้าใจเรื่อง CSS Box Model", desc: "องค์ประกอบของกล่องรอบๆ เอเลเมนต์ ประกอบด้วย Margin, Border, Padding และ Content", code: ".box {\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid white;\n}", quiz: { q: "พื้นที่ว่าง 'ภายใน' กล่องกั้นระหว่างข้อความกับขอบกล่องเรียกว่าอะไร?", options: ["Margin", "Border", "Padding", "Width"], ans: 2 } },
                en: { title: "📦 3. CSS Box Model", desc: "Understanding margins, borders, padding, and content spaces wrapped around an element.", code: ".box {\n  padding: 20px;\n  margin: 10px;\n  border: 1px solid white;\n}", quiz: { q: "What is the inner space between content and its border called?", options: ["Margin", "Border", "Padding", "Width"], ans: 2 } }
            }
        },
        {
            id: 4,
            content: {
                th: { title: "💎 4. สไตล์โมเดิร์น Glassmorphism", desc: "เทคนิคการทำกระจกฝ้าแบบอินเตอร์เฟซยุคใหม่ ผสมผสานสีใส แบ็คดร็อปเบลอ และเงา", code: ".glass {\n  background: rgba(255,255,255,0.1);\n  backdrop-filter: blur(10px);\n}", quiz: { q: "คุณสมบัติ CSS ใดใช้สำหรับทำให้พื้นหลังเบลอเป็นกระจกฝ้า?", options: ["filter: blur()", "backdrop-filter: blur()", "opacity", "background-blur"], ans: 1 } },
                en: { title: "💎 4. Glassmorphism Concept", desc: "Modern frosted glass visual styles blending transparency, backdrop blur, and borders.", code: ".glass {\n  background: rgba(255,255,255,0.1);\n  backdrop-filter: blur(10px);\n}", quiz: { q: "Which CSS property is responsible for blurring the background behind an element?", options: ["filter: blur()", "backdrop-filter: blur()", "opacity", "background-blur"], ans: 1 } }
            }
        },
        {
            id: 5,
            content: {
                th: { title: "📱 5. Responsive ด้วย Flexbox", desc: "ระบบจัดวางเลย์เอาท์หน้าเว็บให้ยืดหยุ่น รองรับการแสดงผลทั้งหน้าจอคอมและหน้าจอมือถือ", code: ".container {\n  display: flex;\n  justify-content: center;\n}", quiz: { q: "คำสั่ง justify-content: center; ทำหน้าที่อะไรในระบบ Flexbox?", options: ["จัดกึ่งกลางแนวตั้ง", "จัดกึ่งกลางแนวนอน", "ขยายเต็มหน้าจอ", "ซ่อนเอเลเมนต์"], ans: 1 } },
                en: { title: "📱 5. Responsive Flexbox", desc: "Structuring flexible and modular page layouts optimized for mobile and desktops.", code: ".container {\n  display: flex;\n  justify-content: center;\n}", quiz: { q: "What does 'justify-content: center;' do inside a flex container?", options: ["Aligns vertically center", "Aligns horizontally center", "Stretches to full width", "Hides the element"], ans: 1 } }
            }
        }
    ]
};