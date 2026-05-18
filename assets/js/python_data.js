const courseData = {
    title: "Python Programming",
    themeColor: "#2dd4bf",

    lessons: [

        {
            id: 1,
            title: "Python คืออะไร",
            desc: "เริ่มต้นรู้จักภาษา Python",

            content: {
                th: {
                    title: "Python คืออะไร",
                    desc: "Python เป็นภาษาโปรแกรมที่นิยมมาก ใช้ทำเว็บไซต์ AI เกม ระบบอัตโนมัติ และงานข้อมูล",

                    code:
`print("Hello World")`
                }
            },

            quiz: {
                q: "Python ใช้ทำอะไรได้?",
                options: [
                    "สร้างเว็บไซต์",
                    "AI",
                    "Automation",
                    "ถูกทุกข้อ"
                ],
                ans: 3
            }
        },

        {
            id: 2,
            title: "Variables",
            desc: "การสร้างตัวแปร",

            content: {
                th: {
                    title: "Variables",
                    desc: "ตัวแปรใช้เก็บข้อมูล",

                    code:
`name = "Zenith"
age = 18

print(name)
print(age)`
                }
            },

            quiz: {
                q: "เครื่องหมายใดใช้กำหนดค่าให้ตัวแปร?",
                options: ["=", "+", "*", "=="],
                ans: 0
            }
        },

        {
            id: 3,
            title: "Input",
            desc: "รับค่าจากผู้ใช้",

            content: {
                th: {
                    title: "Input",
                    desc: "ใช้ input() รับข้อมูล",

                    code:
`username = input("ชื่อ: ")

print("สวัสดี", username)`
                }
            },

            quiz: {
                q: "input() ใช้ทำอะไร?",
                options: [
                    "รับข้อมูล",
                    "ลบข้อมูล",
                    "คำนวณ",
                    "ปิดโปรแกรม"
                ],
                ans: 0
            }
        },

        {
            id: 4,
            title: "Data Types",
            desc: "ชนิดข้อมูล",

            content: {
                th: {
                    title: "ชนิดข้อมูล",
                    desc: "Python มี string number boolean เป็นต้น",

                    code:
`name = "Zenith"
age = 18
price = 99.99
isAdmin = True

print(type(name))
print(type(age))`
                }
            },

            quiz: {
                q: "True และ False คือชนิดข้อมูลอะไร?",
                options: [
                    "String",
                    "Boolean",
                    "Float",
                    "Array"
                ],
                ans: 1
            }
        },

        {
            id: 5,
            title: "Math Operators",
            desc: "เครื่องหมายคำนวณ",

            content: {
                th: {
                    title: "Operators",
                    desc: "ใช้คำนวณตัวเลข",

                    code:
`a = 10
b = 5

print(a + b)
print(a - b)
print(a * b)
print(a / b)`
                }
            },

            quiz: {
                q: "10 * 5 ได้เท่าไร?",
                options: ["15", "20", "50", "100"],
                ans: 2
            }
        },

        {
            id: 6,
            title: "If Else",
            desc: "เงื่อนไข",

            content: {
                th: {
                    title: "If Else",
                    desc: "ใช้ตรวจสอบเงื่อนไข",

                    code:
`age = 18

if age >= 18:
    print("ผู้ใหญ่")
else:
    print("เด็ก")`
                }
            },

            quiz: {
                q: "if ใช้ทำอะไร?",
                options: [
                    "สร้างตัวแปร",
                    "สร้างเงื่อนไข",
                    "ลบข้อมูล",
                    "สร้างเว็บ"
                ],
                ans: 1
            }
        },

        {
            id: 7,
            title: "Loops",
            desc: "การวนลูป",

            content: {
                th: {
                    title: "For Loop",
                    desc: "ใช้ทำงานซ้ำ",

                    code:
`for i in range(5):
    print(i)`
                }
            },

            quiz: {
                q: "range(5) ทำงานกี่รอบ?",
                options: ["3", "4", "5", "6"],
                ans: 2
            }
        },

        {
            id: 8,
            title: "While Loop",
            desc: "ลูปแบบเงื่อนไข",

            content: {
                th: {
                    title: "While Loop",
                    desc: "ทำงานจนกว่าเงื่อนไขจะเป็น False",

                    code:
`count = 1

while count <= 5:
    print(count)
    count += 1`
                }
            },

            quiz: {
                q: "while ใช้อะไรควบคุม?",
                options: [
                    "เงื่อนไข",
                    "สี",
                    "ไฟล์",
                    "อินเทอร์เน็ต"
                ],
                ans: 0
            }
        },

        {
            id: 9,
            title: "Functions",
            desc: "สร้างฟังก์ชัน",

            content: {
                th: {
                    title: "Functions",
                    desc: "ฟังก์ชันช่วยให้โค้ดเป็นระเบียบ",

                    code:
`def hello():
    print("Hello")

hello()`
                }
            },

            quiz: {
                q: "def ใช้ทำอะไร?",
                options: [
                    "สร้างฟังก์ชัน",
                    "ลบฟังก์ชัน",
                    "สร้าง loop",
                    "สร้างตัวแปร"
                ],
                ans: 0
            }
        },

        {
            id: 10,
            title: "Lists",
            desc: "เก็บข้อมูลหลายค่า",

            content: {
                th: {
                    title: "Lists",
                    desc: "List ใช้เก็บหลายข้อมูล",

                    code:
`fruits = ["Apple", "Banana", "Orange"]

print(fruits[0])`
                }
            },

            quiz: {
                q: "List ใช้อะไร?",
                options: [
                    "เก็บหลายข้อมูล",
                    "สร้างเว็บ",
                    "ต่ออินเทอร์เน็ต",
                    "สร้างเกม"
                ],
                ans: 0
            }
        },

        {
            id: 11,
            title: "Dictionary",
            desc: "เก็บข้อมูลแบบ key value",

            content: {
                th: {
                    title: "Dictionary",
                    desc: "เก็บข้อมูลแบบ key:value",

                    code:
`user = {
    "name": "Zenith",
    "age": 18
}

print(user["name"])`
                }
            },

            quiz: {
                q: "Dictionary เก็บข้อมูลแบบใด?",
                options: [
                    "key:value",
                    "HTML",
                    "Loop",
                    "Boolean"
                ],
                ans: 0
            }
        },

        {
            id: 12,
            title: "Real Project",
            desc: "โปรเจกต์จริง",

            content: {
                th: {
                    title: "โปรแกรมคำนวณเกรด",
                    desc: "ตัวอย่างโปรแกรมที่ใช้จริง",

                    code:
`score = int(input("คะแนน: "))

if score >= 80:
    print("A")
elif score >= 70:
    print("B")
elif score >= 60:
    print("C")
else:
    print("F")`
                }
            },

            quiz: {
                q: "elif ใช้ทำอะไร?",
                options: [
                    "เพิ่มเงื่อนไข",
                    "สร้างเว็บ",
                    "สร้างตัวแปร",
                    "จบโปรแกรม"
                ],
                ans: 0
            }
        }

    ]
};