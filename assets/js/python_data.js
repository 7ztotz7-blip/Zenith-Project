// assets/js/python_data.js

const courseData = {
    title: "Python Programming",
    lessons: [
        {
            id: 1,
            content: {
                th: {
                    title: "🐍 1. รู้จักกับภาษา Python",
                    desc: "Python เป็นภาษาโปรแกรมมิ่งระดับสูงที่อ่านง่าย ไวยากรณ์ไม่ซับซ้อน เหมาะสำหรับผู้เริ่มต้น โค้ดด้านล่างนี้คือคำสั่งในการสั่งให้ระบบแสดงข้อความออกทางหน้าจอ",
                    code: "print('Hello, Zenith!')",
                    quiz: {
                        q: "คำสั่งใดใช้สำหรับแสดงผลข้อความออกทางหน้าจอในภาษา Python?",
                        options: [
                            "echo 'Hello'",
                            "print('Hello')",
                            "console.log('Hello')",
                            "printf('Hello')"
                        ],
                        ans: 1 // ข้อ B (เริ่มนับชอยส์แรกจาก index 0, 1, 2, 3)
                    }
                },
                en: {
                    title: "🐍 1. Introduction to Python",
                    desc: "Python is a high-level programming language known for its readability and simple syntax. The code below shows how to display a message on the screen.",
                    code: "print('Hello, Zenith!')",
                    quiz: {
                        q: "Which function is used to output text to the screen in Python?",
                        options: [
                            "echo 'Hello'",
                            "print('Hello')",
                            "console.log('Hello')",
                            "printf('Hello')"
                        ],
                        ans: 1
                    }
                }
            }
        },
        {
            id: 2,
            content: {
                th: {
                    title: "📦 2. การสร้างตัวแปร (Variables)",
                    desc: "ตัวแปรเปรียบเสมือนกล่องที่ใช้เก็บข้อมูล ใน Python คุณสามารถสร้างตัวแปรขึ้นมาและกำหนดค่าให้มันได้ทันทีโดยไม่ต้องระบุชนิดข้อมูลล่วงหน้า",
                    code: "x = 5\nname = 'Zenith'\nprint(name)",
                    quiz: {
                        q: "จากโค้ดข้างต้น ตัวแปรชื่อ name เก็บข้อมูลประเภทใด?",
                        options: [
                            "จำนวนเต็ม (Integer)",
                            "ทศนิยม (Float)",
                            "ข้อความ (String)",
                            "ตรรกศาสตร์ (Boolean)"
                        ],
                        ans: 2 // ข้อ C
                    }
                },
                en: {
                    title: "📦 2. Python Variables",
                    desc: "Variables are containers for storing data values. In Python, a variable is created the moment you first assign a value to it.",
                    code: "x = 5\nname = 'Zenith'\nprint(name)",
                    quiz: {
                        q: "Based on the code above, what data type is stored in the variable 'name'?",
                        options: [
                            "Integer",
                            "Float",
                            "String",
                            "Boolean"
                        ],
                        ans: 2
                    }
                }
            }
        },
        {
            id: 3,
            content: {
                th: {
                    title: "📊 3. ชนิดข้อมูลพื้นฐาน (Data Types)",
                    desc: "ใน Python มีชนิดข้อมูลหลักๆ เช่น int (เลขจำนวนเต็ม), float (เลขทศนิยม) และ str (ข้อความที่ครอบด้วยเครื่องหมายคำพูด) เราสามารถตรวจสอบชนิดข้อมูลได้ด้วยคำสั่ง type()",
                    code: "age = 18\ngpa = 3.85\nprint(type(gpa))",
                    quiz: {
                        q: "จากโค้ดข้างต้น คำสั่ง print(type(gpa)) จะแสดงผลลัพธ์ตรงกับข้อใด?",
                        options: [
                            "<class 'int'>",
                            "<class 'str'>",
                            "<class 'float'>",
                            "<class 'boolean'>"
                        ],
                        ans: 2
                    }
                },
                en: {
                    title: "📊 3. Basic Data Types",
                    desc: "Python has several built-in data types including int (integers), float (floating-point numbers), and str (strings wrapped in quotes). You can check a variable's type using the type() function.",
                    code: "age = 18\ngpa = 3.85\nprint(type(gpa))",
                    quiz: {
                        q: "Based on the code above, what will print(type(gpa)) output?",
                        options: [
                            "<class 'int'>",
                            "<class 'str'>",
                            "<class 'float'>",
                            "<class 'boolean'>"
                        ],
                        ans: 2
                    }
                }
            }
        },
        {
            id: 4,
            content: {
                th: {
                    title: "🛠️ 4. การตรวจสอบเงื่อนไข (If-Else)",
                    desc: "คำสั่ง if-elif-else ใช้สำหรับควบคุมทิศทางของโปรแกรมตามเงื่อนไขที่กำหนด สิ่งสำคัญของ Python คือ 'การย่อหน้า (Indentation)' เพื่อบอกขอบเขตของโค้ดในเงื่อนไขนั้นๆ",
                    code: "score = 75\nif score >= 50:\n    print('Pass')\nelse:\n    print('Fail')",
                    quiz: {
                        q: "จากโค้ดด้านบน หากเปลี่ยนค่าตัวแปร score เป็น 45 ข้อความใดจะถูกแสดงบนหน้าจอ?",
                        options: [
                            "Pass",
                            "Fail",
                            "ไม่แสดงข้อความใดๆ เลย",
                            "เกิดข้อผิดพลาด (Error)"
                        ],
                        ans: 1
                    }
                },
                en: {
                    title: "🛠️ 4. Conditional Statements (If-Else)",
                    desc: "The if-elif-else statements are used to control the program flow based on conditions. Python relies on 'Indentation' (whitespace at the beginning of a line) to define the scope of the code block.",
                    code: "score = 75\nif score >= 50:\n    print('Pass')\nelse:\n    print('Fail')",
                    quiz: {
                        q: "Based on the code above, if we change the score variable to 45, what will be displayed on the screen?",
                        options: [
                            "Pass",
                            "Fail",
                            "Nothing will be displayed",
                            "An error will occur"
                        ],
                        ans: 1
                    }
                }
            }
        },
        {
            id: 5,
            content: {
                th: {
                    title: "🔄 5. การวนซ้ำด้วย For Loop",
                    desc: "ฟังก์ชัน for loop ใช้สำหรับสั่งให้โปรแกรมทำงานซ้ำๆ ตามจำนวนรอบที่ระบุ โดยมักจะใช้ร่วมกับฟังก์ชัน range() เพื่อกำหนดช่วงของตัวเลขรันจากเริ่มต้นไปจนถึงก่อนค่าสุดท้าย",
                    code: "for i in range(3):\n    print('Zenith')",
                    quiz: {
                        q: "จากโค้ดข้างต้น ข้อความคำว่า 'Zenith' จะถูกพิมพ์ออกมาทั้งหมดกี่ครั้ง?",
                        options: [
                            "2 ครั้ง",
                            "3 ครั้ง",
                            "4 ครั้ง",
                            "วนซ้ำไม่สิ้นสุด (Infinite Loop)"
                        ],
                        ans: 1
                    }
                },
                en: {
                    title: "🔄 5. For Loops",
                    desc: "A for loop is used for iterating over a sequence. It is commonly paired with the range() function to execute a block of code a specific number of times.",
                    code: "for i in range(3):\n    print('Zenith')",
                    quiz: {
                        q: "Based on the code above, how many times will the word 'Zenith' be printed?",
                        options: [
                            "2 times",
                            "3 times",
                            "4 times",
                            "Infinite times"
                        ],
                        ans: 1
                    }
                }
            }
        }
    ]
};