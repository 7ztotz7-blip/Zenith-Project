const courseData = {
    title: "HTML5 Web Structure",
    themeColor: "#f97316", // ธีมสีส้มสไตล์ HTML
    lessons: [
        {
            id: 1,
            content: {
                th: { title: "🌐 1. โครงสร้างพื้นฐาน HTML5", desc: "เรียนรู้แท็กหลักที่เป็นรากฐานประกอบกันเป็นหน้าเว็บ เช่น <html>, <head>, <body>", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Zenith</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>", quiz: { q: "แท็กใดคือแท็กนอกสุดที่ครอบคลุมเนื้อหาหน้าเว็บทั้งหมด?", options: ["<head>", "<body>", "<html>", "<meta>"], ans: 2 } },
                en: { title: "🌐 1. HTML5 Core Structure", desc: "Learn the root elements that make up a web document layout.", code: "<!DOCTYPE html>\n<html>\n<head>\n  <title>Zenith</title>\n</head>\n<body>\n  <h1>Hello World</h1>\n</body>\n</html>", quiz: { q: "Which element is the root wrapper for the entire web page?", options: ["<head>", "<body>", "<html>", "<meta>"], ans: 2 } }
            }
        },
        {
            id: 2,
            content: {
                th: { title: "📝 2. การจัดการหัวข้อและข้อความ", desc: "ทำความเข้าใจกลุ่มแท็ก Heading (h1 ถึง h6) และแท็ก Paragraph (p) สำหรับแสดงเนื้อหา", code: "<h1>หัวข้อหลักขนาดใหญ่</h1>\n<p>เนื้อหาบทความทั่วไป...</p>", quiz: { q: "แท็กหัวข้อข้อความใดมีขนาดตัวอักษรใหญ่ที่สุดตามค่าเริ่มต้น?", options: ["<h6>", "<h3>", "<h1>", "<head>"], ans: 2 } },
                en: { title: "📝 2. Headings & Paragraphs", desc: "Understanding the usage of text headings and structural paragraphs.", code: "<h1>Main Heading</h1>\n<p>General content paragraph...</p>", quiz: { q: "Which heading tag represents the largest default font size?", options: ["<h6>", "<h3>", "<h1>", "<head>"], ans: 2 } }
            }
        },
        {
            id: 3,
            content: {
                th: { title: "🔗 3. การสร้างลิงก์และแสดงรูปภาพ", desc: "เชื่อมโยงหน้าเว็บเข้าหากันด้วยแท็ก Hyperlink (a) และดึงไฟล์ภาพมาแสดงด้วยแท็ก img", code: "<a href='https://google.com'>ค้นหา</a>\n<img src='logo.png' alt='Zenith Logo'>", quiz: { q: "Attribute ใดในแท็ก <a> ใช้สำหรับระบุที่อยู่ปลายทางของลิงก์?", options: ["src", "href", "link", "target"], ans: 1 } },
                en: { title: "🔗 3. Links & Multimedia Images", desc: "Connecting hypermedia targets and pulling images using foundational tags.", code: "<a href='https://google.com'>Search</a>\n<img src='logo.png' alt='Zenith Logo'>", quiz: { q: "Which attribute inside anchor tags specifies the URL destination?", options: ["src", "href", "link", "target"], ans: 1 } }
            }
        },
        {
            id: 4,
            content: {
                th: { title: "📊 4. การจัดการรายการตารางและลิสต์", desc: "จัดระเบียบข้อมูลเป็นข้อๆ ด้วยแท็ก Unordered List (ul) และ Ordered List (ol)", code: "<ul>\n  <li>บทเรียนที่ 1</li>\n  <li>บทเรียนที่ 2</li>\n</ul>", quiz: { q: "ถ้าต้องการทำลิสต์รายการแบบมีตัวเลขเรียงลำดับ (1, 2, 3) ต้องใช้แท็กหลักใด?", options: ["<ul>", "<ol>", "<li>", "<list>"], ans: 1 } },
                en: { title: "📊 4. Working with Lists", desc: "Organizing text nodes neatly using bulleted or numbered layout blocks.", code: "<ul>\n  <li>Lesson 1</li>\n  <li>Lesson 2</li>\n</ul>", quiz: { q: "Which parent tag structures an ordered/numbered list configuration?", options: ["<ul>", "<ol>", "<li>", "<list>"], ans: 1 } }
            }
        },
        {
            id: 5,
            content: {
                th: { title: "📥 5. ฟอร์มและอินพุตรับข้อมูล", desc: "ปูพื้นฐานการสร้างกล่องกรอกข้อความ ปุ่มกด และฟอร์มสำหรับรับข้อมูลจากผู้ใช้งาน", code: "<form>\n  <input type='text' placeholder='กรอกชื่อของคุณ'>\n  <button type='submit'>ส่งข้อมูล</button>\n</form>", quiz: { q: "ชนิดอินพุต (type) แบบใดที่ออกแบบมาเพื่อใช้กรอกรหัสผ่านโดยเฉพาะ?", options: ["text", "number", "password", "hidden"], ans: 2 } },
                en: { title: "📥 5. Web Forms & Inputs", desc: "Laying foundations for capturing text inputs, buttons, and form payloads.", code: "<form>\n  <input type='text' placeholder='Enter Name'>\n  <button type='submit'>Submit</button>\n</form>", quiz: { q: "Which input type token is explicitly dedicated to masking typing for passwords?", options: ["text", "number", "password", "hidden"], ans: 2 } }
            }
        }
    ]
};