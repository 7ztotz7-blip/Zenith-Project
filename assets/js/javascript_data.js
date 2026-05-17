const courseData = {
    title: "JavaScript Web Developer",
    themeColor: "#eab308", // สีเหลืองสไตล์ JS
    lessons: [
        {
            id: 1,
            content: {
                th: { title: "🌐 1. เริ่มต้นกับ JavaScript", desc: "ภาษาหลักที่ใช้สำหรับทำเว็บแอปพลิเคชันให้ตอบโต้และมีปฏิสัมพันธ์กับผู้ใช้ได้", code: "console.log('Hello JavaScript');", quiz: { q: "คำสั่งใดใช้แสดงข้อความบน Debug Console?", options: ["print()", "echo()", "console.log()", "document.write()"], ans: 2 } },
                en: { title: "🌐 1. JavaScript Intro", desc: "The core language utilized to make interactive and dynamic web elements.", code: "console.log('Hello JavaScript');", quiz: { q: "Which syntax prints text to the debug console?", options: ["print()", "echo()", "console.log()", "document.write()"], ans: 2 } }
            }
        },
        {
            id: 2,
            content: {
                th: { title: "📦 2. ตัวแปร let และ const", desc: "การประกาศตัวแปรยุคใหม่ใน JS โดย let เปลี่ยนค่าได้ ส่วน const เปลี่ยนค่าไม่ได้", code: "const price = 100;\nlet qty = 2;\nqty = 3;", quiz: { q: "ถ้าเราพยายามแก้ค่าตัวแปร price ในบรรทัดถัดไปจะเกิดอะไรขึ้น?", options: ["รันได้ปกติ", "เกิด Error (Assignment to constant)", "ค่าจะเปลี่ยนเงียบๆ", "ตัวแปรกลายเป็นค่าว่าง"], ans: 1 } },
                en: { title: "📦 2. Let & Const", desc: "Modern variable declaration. 'let' can change, while 'const' is immutable.", code: "const price = 100;\nlet qty = 2;\nqty = 3;", quiz: { q: "What happens if you try to reassign the 'price' variable?", options: ["Runs normally", "Throws a TypeError", "Changes silently", "Becomes null"], ans: 1 } }
            }
        },
        {
            id: 3,
            content: {
                th: { title: "🎯 3. ฟังก์ชัน Arrow Function", desc: "รูปแบบการเขียนฟังก์ชันแบบสั้นและกระชับ ช่วยให้โค้ดดูสะอาดตาขึ้นมาก", code: "const greet = (name) => `Hi ${name}`;\nconsole.log(greet('Zenith'));", quiz: { q: "เครื่องหมายใดใช้ในการนิยาม Arrow Function?", options: ["->", "=>", "==", "::"], ans: 1 } },
                en: { title: "🎯 3. Arrow Functions", desc: "Shorter and cleaner syntax to write function expressions in modern JS.", code: "const greet = (name) => `Hi ${name}`;\nconsole.log(greet('Zenith'));", quiz: { q: "Which token defines an arrow function?", options: ["->", "=>", "==", "::"], ans: 1 } }
            }
        },
        {
            id: 4,
            content: {
                th: { title: "🧱 4. โครงสร้างข้อมูลแบบ Object", desc: "การเก็บข้อมูลในรูปแบบ Key และ Value เพื่อจัดกลุ่มข้อมูลที่มีความเกี่ยวข้องกัน", code: "const user = { name: 'Chanwit', age: 18 };\nconsole.log(user.name);", quiz: { q: "คำสั่ง user.name จะดึงค่าอะไรออกมาแสดงผล?", options: ["18", "undefined", "Chanwit", "name"], ans: 2 } },
                en: { title: "🧱 4. JavaScript Objects", desc: "Storing data as Key-Value pairs to group related properties together.", code: "const user = { name: 'Chanwit', age: 18 };\nconsole.log(user.name);", quiz: { q: "What will user.name fetch?", options: ["18", "undefined", "Chanwit", "name"], ans: 2 } }
            }
        },
        {
            id: 5,
            content: {
                th: { title: "⚡ 5. การควบคุม DOM เบื้องต้น", desc: "การใช้ JavaScript เข้าไปเลือกและแก้ไขเนื้อหาของ HTML บนหน้าเว็บได้แบบเรียลไทม์", code: "document.getElementById('title').innerText = 'Done';", quiz: { q: "ฟังก์ชันใดใช้เลือก Element จากไอดีบนหน้า HTML?", options: ["querySelector()", "getElementById()", "getElementsByClass()", "fetch()"], ans: 1 } },
                en: { title: "⚡ 5. Basic DOM Manipulation", desc: "Using JavaScript to select and modify HTML content dynamically on the fly.", code: "document.getElementById('title').innerText = 'Done';", quiz: { q: "Which method is specifically used to select an HTML element by its ID?", options: ["querySelector()", "getElementById()", "getElementsByClass()", "fetch()"], ans: 1 } }
            }
        }
    ]
};