const courseData = {
    title: "Modern JavaScript",
    themeColor: "#eab308",
    lessons: [
        { id: 1, title: "01 DOM Manipulation", desc: "การเข้าถึงและแก้ไข HTML ด้วย JS" },
        { id: 2, title: "02 Events & Listeners", desc: "การตอบสนองต่อการกระทำของผู้ใช้" },
        { id: 3, title: "03 Functions & Scope", desc: "การสร้างและใช้งานฟังก์ชันใน JS" },
        { id: 4, title: "04 Arrays & Loops", desc: "การจัดการข้อมูลหลายชุดพร้อมกัน" },
        { id: 5, title: "05 Fetch & Async", desc: "การดึงข้อมูลจาก API แบบ Modern" }
    ]
};

const lessonData = [
    {
        id: 1,
        content: {
            th: {
                title: "DOM Manipulation",
                desc: "DOM คือโครงสร้าง HTML ที่ JavaScript สามารถเข้าถึงและแก้ไขได้แบบ Real-time ทำให้หน้าเว็บมีชีวิตชีวา",
                code: `// เลือก element จาก HTML\nconst title = document.getElementById('title');\nconst items = document.querySelectorAll('.item');\n\n// แก้ไข content\ntitle.innerText = "Hello Zenith!";\ntitle.style.color = "#a855f7";\n\n// สร้าง element ใหม่\nconst newDiv = document.createElement('div');\nnewDiv.className = 'card';\ndocument.body.appendChild(newDiv);`,
                quiz: {
                    q: "คำสั่งใดใช้เลือก Element หลายตัวด้วย CSS Class?",
                    options: ["document.getElementById('.class')", "document.querySelectorAll('.class')", "document.getClass('.class')", "document.selectAll('.class')"],
                    ans: 1
                }
            },
            en: {
                title: "DOM Manipulation",
                desc: "The DOM is the HTML structure that JavaScript can access and modify in real-time, making pages interactive.",
                code: `// Select elements\nconst title = document.getElementById('title');\nconst items = document.querySelectorAll('.item');\n\n// Modify content\ntitle.innerText = "Hello Zenith!";\ntitle.style.color = "#a855f7";\n\n// Create new element\nconst newDiv = document.createElement('div');\nnewDiv.className = 'card';\ndocument.body.appendChild(newDiv);`,
                quiz: {
                    q: "Which method selects multiple elements by CSS class?",
                    options: ["document.getElementById('.class')", "document.querySelectorAll('.class')", "document.getClass('.class')", "document.selectAll('.class')"],
                    ans: 1
                }
            }
        }
    },
    {
        id: 2,
        content: {
            th: {
                title: "Events & Listeners",
                desc: "Event คือเหตุการณ์ที่เกิดขึ้นบนหน้าเว็บ เช่น คลิก พิมพ์ หรือเลื่อนเมาส์ addEventListener ช่วยให้เราตอบสนองต่อเหตุการณ์เหล่านั้นได้",
                code: `const btn = document.getElementById('myBtn');\n\n// รับฟัง event คลิก\nbtn.addEventListener('click', (e) => {\n    console.log('คลิกที่:', e.target);\n    btn.style.background = '#a855f7';\n});\n\n// รับฟัง keyboard\ndocument.addEventListener('keydown', (e) => {\n    if (e.key === 'Enter') {\n        console.log('กด Enter แล้ว!');\n    }\n});`,
                quiz: {
                    q: "Parameter ใดใน callback ของ addEventListener ที่เก็บข้อมูลเกี่ยวกับ Event?",
                    options: ["data", "event (e)", "this", "target"],
                    ans: 1
                }
            },
            en: {
                title: "Events & Listeners",
                desc: "Events are actions like clicks, typing, or scrolling. addEventListener lets us respond to those events dynamically.",
                code: `const btn = document.getElementById('myBtn');\n\n// Listen for click\nbtn.addEventListener('click', (e) => {\n    console.log('Clicked:', e.target);\n    btn.style.background = '#a855f7';\n});\n\n// Listen for keyboard\ndocument.addEventListener('keydown', (e) => {\n    if (e.key === 'Enter') {\n        console.log('Enter pressed!');\n    }\n});`,
                quiz: {
                    q: "Which parameter in the addEventListener callback holds Event data?",
                    options: ["data", "event (e)", "this", "target"],
                    ans: 1
                }
            }
        }
    },
    {
        id: 3,
        content: {
            th: {
                title: "Functions & Scope",
                desc: "Function คือกลุ่มโค้ดที่เรียกใช้ซ้ำได้ Scope กำหนดว่าตัวแปรใดสามารถเข้าถึงได้จากที่ไหน",
                code: `// Traditional Function\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow Function (Modern)\nconst multiply = (a, b) => a * b;\n\n// Scope ตัวอย่าง\nconst globalVar = "ทั่วโลกเข้าถึงได้";\n\nfunction test() {\n    const localVar = "เฉพาะใน function";\n    console.log(globalVar); // ✅\n}\nconsole.log(localVar); // ❌ Error!`,
                quiz: {
                    q: "Arrow Function ใดถูกต้อง?",
                    options: ["function => (a, b) { return a + b }", "const add = (a, b) => a + b", "arrow add(a, b) => a + b", "const add => (a, b) { a + b }"],
                    ans: 1
                }
            },
            en: {
                title: "Functions & Scope",
                desc: "Functions are reusable code blocks. Scope determines where variables can be accessed from.",
                code: `// Traditional Function\nfunction add(a, b) {\n    return a + b;\n}\n\n// Arrow Function (Modern)\nconst multiply = (a, b) => a * b;\n\n// Scope example\nconst globalVar = "accessible everywhere";\n\nfunction test() {\n    const localVar = "only inside function";\n    console.log(globalVar); // ✅\n}\nconsole.log(localVar); // ❌ Error!`,
                quiz: {
                    q: "Which Arrow Function syntax is correct?",
                    options: ["function => (a, b) { return a + b }", "const add = (a, b) => a + b", "arrow add(a, b) => a + b", "const add => (a, b) { a + b }"],
                    ans: 1
                }
            }
        }
    },
    {
        id: 4,
        content: {
            th: {
                title: "Arrays & Loops",
                desc: "Array คือรายการข้อมูลหลายชุด JavaScript มี method ทรงพลังอย่าง map, filter, reduce สำหรับจัดการ Array",
                code: `const scores = [95, 72, 88, 61, 100];\n\n// map - แปลงทุก element\nconst doubled = scores.map(s => s * 2);\n\n// filter - กรองตามเงื่อนไข\nconst passed = scores.filter(s => s >= 75);\n\n// reduce - รวมเป็นค่าเดียว\nconst total = scores.reduce((sum, s) => sum + s, 0);\nconst avg = total / scores.length;\n\nconsole.log("ผ่าน:", passed); // [95, 88, 100]\nconsole.log("เฉลี่ย:", avg); // 83.2`,
                quiz: {
                    q: "Array method ใดใช้กรองข้อมูลตามเงื่อนไข?",
                    options: ["map()", "filter()", "reduce()", "find()"],
                    ans: 1
                }
            },
            en: {
                title: "Arrays & Loops",
                desc: "Arrays store multiple values. JavaScript has powerful methods like map, filter, and reduce for array manipulation.",
                code: `const scores = [95, 72, 88, 61, 100];\n\n// map - transform each element\nconst doubled = scores.map(s => s * 2);\n\n// filter - filter by condition\nconst passed = scores.filter(s => s >= 75);\n\n// reduce - combine into one value\nconst total = scores.reduce((sum, s) => sum + s, 0);\nconst avg = total / scores.length;\n\nconsole.log("Passed:", passed); // [95, 88, 100]\nconsole.log("Average:", avg); // 83.2`,
                quiz: {
                    q: "Which Array method filters data by condition?",
                    options: ["map()", "filter()", "reduce()", "find()"],
                    ans: 1
                }
            }
        }
    },
    {
        id: 5,
        content: {
            th: {
                title: "Fetch & Async/Await",
                desc: "Fetch API ใช้ดึงข้อมูลจาก Server async/await ทำให้โค้ด asynchronous อ่านง่ายเหมือนโค้ดปกติ",
                code: `// แบบ async/await (Modern & Clean)\nasync function getUser(id) {\n    try {\n        const response = await fetch(\`https://api.example.com/users/\${id}\`);\n        \n        if (!response.ok) throw new Error('Not found');\n        \n        const user = await response.json();\n        console.log("ชื่อ:", user.name);\n        return user;\n    } catch (error) {\n        console.error("Error:", error.message);\n    }\n}\n\ngetUser(1);`,
                quiz: {
                    q: "Keyword ใดใช้รอผล Promise ใน async function?",
                    options: ["wait", "await", "async", "then"],
                    ans: 1
                }
            },
            en: {
                title: "Fetch & Async/Await",
                desc: "Fetch API retrieves data from servers. async/await makes asynchronous code readable like synchronous code.",
                code: `// async/await (Modern & Clean)\nasync function getUser(id) {\n    try {\n        const response = await fetch(\`https://api.example.com/users/\${id}\`);\n        \n        if (!response.ok) throw new Error('Not found');\n        \n        const user = await response.json();\n        console.log("Name:", user.name);\n        return user;\n    } catch (error) {\n        console.error("Error:", error.message);\n    }\n}\n\ngetUser(1);`,
                quiz: {
                    q: "Which keyword waits for a Promise inside an async function?",
                    options: ["wait", "await", "async", "then"],
                    ans: 1
                }
            }
        }
    }
];