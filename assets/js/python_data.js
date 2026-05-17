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
        }
        // สามารถคัดลอกบล็อกนี้เพิ่มบทเรียนที่ 3, 4, 5... ต่อลงมาได้เรื่อยๆ เลยครับ
    ]
};