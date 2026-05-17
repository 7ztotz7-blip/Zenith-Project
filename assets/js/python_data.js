const courseData = {
    title: "Python Automation",
    themeColor: "#2dd4bf",
    lessons: [
        {
            id: 1,
            content: {
                th: { title: "🐍 1. รู้จักกับภาษา Python", desc: "ภาษาโปรแกรมมิ่งที่อ่านง่าย ไวยากรณ์ไม่ซับซ้อน เหมาะสำหรับใช้สั่งงานระบบอัตโนมัติ", code: "print('Hello, Automation!')", quiz: { q: "คำสั่งใดใช้แสดงผลข้อความใน Python?", options: ["echo()", "print()", "console.log()", "printf()"], ans: 1 } },
                en: { title: "🐍 1. Intro to Python", desc: "A readable and simple programming language, perfect for automation tasks.", code: "print('Hello, Automation!')", quiz: { q: "Which function outputs text in Python?", options: ["echo()", "print()", "console.log()", "printf()"], ans: 1 } }
            }
        },
        {
            id: 2,
            content: {
                th: { title: "📦 2. การใช้งานตัวแปร", desc: "การประกาศตัวแปรเพื่อเก็บข้อมูลประเภทต่างๆ โดยไม่จำเป็นต้องระบุชนิดข้อมูลล่วงหน้า", code: "task_name = 'Backup'\nprint(task_name)", quiz: { q: "ตัวแปร task_name เก็บข้อมูลประเภทใด?", options: ["Integer", "Float", "String", "Boolean"], ans: 2 } },
                en: { title: "📦 2. Python Variables", desc: "Declaring variables to store data without needing to specify types upfront.", code: "task_name = 'Backup'\nprint(task_name)", quiz: { q: "What data type is stored in 'task_name'?", options: ["Integer", "Float", "String", "Boolean"], ans: 2 } }
            }
        },
        {
            id: 3,
            content: {
                th: { title: "📊 3. ชนิดข้อมูลพื้นฐาน", desc: "เรียนรู้ความแตกต่างระหว่างข้อมูลแบบตัวเลขจำนวนเต็ม ทศนิยม และข้อความ", code: "count = 10\nrate = 0.5\nprint(type(rate))", quiz: { q: "คำสั่ง print(type(rate)) จะแสดงคลาสอะไร?", options: ["int", "str", "float", "bool"], ans: 2 } },
                en: { title: "📊 3. Basic Data Types", desc: "Learn the difference between integer, floating-point numbers, and strings.", code: "count = 10\nrate = 0.5\nprint(type(rate))", quiz: { q: "What will print(type(rate)) output?", options: ["int", "str", "float", "bool"], ans: 2 } }
            }
        },
        {
            id: 4,
            content: {
                th: { title: "🛠️ 4. เงื่อนไขควบคุม If-Else", desc: "ใช้ตรวจสอบเงื่อนไขในการทำงาน โดยให้ความสำคัญกับการย่อหน้าโค้ด (Indentation)", code: "status = 200\nif status == 200:\n    print('Success')\nelse:\n    print('Error')", quiz: { q: "ถ้าเปลี่ยน status เป็น 404 ระบบจะพิมพ์อะไร?", options: ["Success", "Error", "ไม่พิมพ์อะไรเลย", "Error โค้ดพัง"], ans: 1 } },
                en: { title: "🛠️ 4. If-Else Conditions", desc: "Using conditional logic to guide the execution flow based on rules.", code: "status = 200\nif status == 200:\n    print('Success')\nelse:\n    print('Error')", quiz: { q: "If status is changed to 404, what will be printed?", options: ["Success", "Error", "Nothing", "Syntax Error"], ans: 1 } }
            }
        },
        {
            id: 5,
            content: {
                th: { title: "🔄 5. การวนซ้ำด้วย For Loop", desc: "สั่งให้โปรแกรมทำงานซ้ำเป็นจำนวนรอบที่แน่นอน นิยมใช้คู่กับฟังก์ชัน range()", code: "for i in range(3):\n    print('Run')", quiz: { q: "ข้อความคำว่า 'Run' จะถูกพิมพ์ออกมาทั้งหมดกี่รอบ?", options: ["2 รอบ", "3 รอบ", "4 รอบ", "วนซ้ำไม่รู้จบ"], ans: 1 } },
                en: { title: "🔄 5. Loop Automation", desc: "Automate repetitive tasks for a fixed number of times using For Loops.", code: "for i in range(3):\n    print('Run')", quiz: { q: "How many times will 'Run' be printed?", options: ["2 times", "3 times", "4 times", "Infinite"], ans: 1 } }
            }
        }
    ]
};