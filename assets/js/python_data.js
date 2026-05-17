// assets/js/python_data.js
const courseData = {
    id: "python",
    title: "Python Programming for Business",
    description: "จัดการงานซ้ำๆ ให้เป็นระบบอัตโนมัติขั้นสูงด้วย Python สำหรับนวัตกรรมยุคใหม่",
    lessons: [
        {
            id: 1,
            content: {
                th: { 
                    title: "บทที่ 1: แนะนำภาษา Python และการตั้งค่า", 
                    desc: "ภาษา Python เป็นภาษาโปรแกรมระดับสูงที่อ่านง่าย คล้ายภาษาอังกฤษ เหมาะสำหรับใช้จัดการข้อมูลและทำระบบอัตโนมัติ (Automation) ในโลกธุรกิจ การเริ่มต้นใช้งานจำเป็นต้องติดตั้งตัวแปลภาษา Python และโปรแกรมเขียนโค้ด เช่น VS Code ให้เรียบร้อยก่อน",
                    code: "# ตัวอย่างการเขียนสั่งแสดงผลครั้งแรก\nprint('Hello, Zenith Coder!')\nprint('Welcome to Python for Business')"
                },
                en: { 
                    title: "Chapter 1: Introduction to Python", 
                    desc: "Python is a high-level programming language known for readability, making it perfect for automation and data analysis. Setup requires installing Python interpreter and VS Code.",
                    code: "print('Hello, Zenith Coder!')"
                }
            },
            quiz: { q: "ข้อใดคือการประกาศตัวแปรที่ถูกต้องตามมาตรฐาน PEP 8?", options: ["user-score = 100", "1st_score = 100", "user_score = 100", "def = 100"], ans: 2 }
        },
        {
            id: 2,
            content: {
                th: { 
                    title: "บทที่ 2: ตัวแปรและประเภทข้อมูล", 
                    desc: "ตัวแปร (Variable) เปรียบเหมือนกล่องที่ใช้เก็บข้อมูลไว้ใช้งานในโปรแกรม Python มีจุดเด่นคือไม่จำเป็นต้องระบุประเภทข้อมูลตอนสร้าง ตัวระบบจะคำนวณชนิดข้อมูลให้เองอัตโนมัติ เช่น ข้อความ (String), เลขจำนวนเต็ม (Integer), และทศนิยม (Float)",
                    code: "# การประกาศตัวแปรใน Python\nproduct_name = 'Notebook'\nprice = 25000\ntax_rate = 0.07\nis_available = True"
                },
                en: { 
                    title: "Chapter 2: Variables & Data Types", 
                    desc: "Variables act as containers for storing data values. Python has no command for declaring a variable; it is created the moment you first assign a value to it.",
                    code: "product_name = 'Notebook'\nprice = 25000"
                }
            },
            quiz: { q: "ถ้าต้องการเก็บทศนิยมควรใช้ข้อมูลชนิดใด?", options: ["int", "float", "str", "bool"], ans: 1 }
        },
        {
            id: 3,
            content: {
                th: { 
                    title: "บทที่ 3: ตัวดำเนินการและการคำนวณ", 
                    desc: "ตัวดำเนินการ (Operators) คือเครื่องหมายที่ใช้คำนวณทางคณิตศาสตร์และเปรียบเทียบตรรกะ เช่น เครื่องหมายบวก (+) ลบ (-) คูณ (*) หาร (/) รวมถึงเครื่องหมายพิเศษอย่างการหารเอาเศษ (%) และการยกกำลัง (**)",
                    code: "# คำนวณราคาสินค้ารวมภาษี\nprice = 100\nvat = price * 0.07\ntotal_price = price + vat\nprint(total_price)  # ผลลัพธ์: 107.0"
                },
                en: { 
                    title: "Chapter 3: Operators & Expressions", 
                    desc: "Operators are used to perform operations on variables and values, including arithmetic operators (+, -, *, /) and modulus (%).",
                    code: "total = 100 + (100 * 0.07)"
                }
            },
            quiz: { q: "เครื่องหมายใดใช้สำหรับการหารเอาเศษ (Modulus)?", options: ["/", "//", "%", "**"], ans: 2 }
        }
    ]
};