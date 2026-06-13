const courseData = {
    title: "Python Programming",
    themeColor: "#2dd4bf",

    lessons: [

        // ══════════════════════════════════════════════
        // หน่วยที่ 1: พื้นฐาน Python (Basics First)
        // ══════════════════════════════════════════════

        {
            id: 1,
            title: "ทำความรู้จัก Python",
            desc: "Python คืออะไร และเครื่องมือที่ใช้",

            content: {
                th: {
                    title: "ทำความรู้จักกับ Python",
                    desc: "Python เป็นภาษาโปรแกรมระดับสูงที่อ่านง่ายเหมือนภาษาอังกฤษ ถูกสร้างโดย Guido van Rossum นิยมใช้ทำเว็บไซต์ ปัญญาประดิษฐ์ (AI) วิเคราะห์ข้อมูล และระบบอัตโนมัติ จุดเด่นคือเขียนสั้น เข้าใจง่าย เหมาะกับผู้เริ่มต้น เครื่องมือที่นิยมใช้เขียนคือ VS Code และ Google Colab ที่รันได้บนเบราว์เซอร์โดยไม่ต้องติดตั้ง",

                    code:
`# โปรแกรมแรกของคุณ
print("Hello, World!")
print("ยินดีต้อนรับสู่ Python")`
                }
            },

            quiz: {
                q: "ใครเป็นผู้สร้างภาษา Python?",
                options: [
                    "Guido van Rossum",
                    "Bill Gates",
                    "Mark Zuckerberg",
                    "Steve Jobs"
                ],
                ans: 0
            }
        },

        {
            id: 2,
            title: "ตัวแปรและชนิดข้อมูล",
            desc: "Variables และ Data Types พื้นฐาน",

            content: {
                th: {
                    title: "ตัวแปร (Variables) และประเภทข้อมูล",
                    desc: "ตัวแปรคือกล่องเก็บข้อมูลที่ตั้งชื่อได้ ใช้เครื่องหมาย = เพื่อกำหนดค่า Python มีชนิดข้อมูลพื้นฐาน 4 แบบ: String (ข้อความ ใส่ในเครื่องหมายคำพูด), Integer (จำนวนเต็ม), Float (ทศนิยม) และ Boolean (จริง/เท็จ คือ True หรือ False) เราใช้ฟังก์ชัน type() เพื่อตรวจสอบชนิดข้อมูลได้",

                    code:
`name = "Zenith"      # String
age = 18             # Integer
price = 99.99        # Float
is_student = True    # Boolean

print(name, age, price, is_student)
print(type(age))`
                }
            },

            quiz: {
                q: "ข้อมูล 99.99 เป็นชนิดข้อมูลอะไร?",
                options: [
                    "String",
                    "Integer",
                    "Float",
                    "Boolean"
                ],
                ans: 2
            }
        },

        {
            id: 3,
            title: "รับค่าและแสดงผล",
            desc: "input() และ print()",

            content: {
                th: {
                    title: "การรับค่าและการแสดงผล",
                    desc: "ฟังก์ชัน print() ใช้แสดงผลออกหน้าจอ ส่วน input() ใช้รับข้อมูลจากผู้ใช้ผ่านคีย์บอร์ด ข้อควรระวัง: input() จะได้ข้อมูลเป็น String เสมอ ถ้าต้องการตัวเลขต้องแปลงด้วย int() หรือ float() ก่อน นอกจากนี้ยังใช้ f-string (ใส่ f หน้าเครื่องหมายคำพูด) เพื่อแทรกตัวแปรลงในข้อความได้สะดวก",

                    code:
`name = input("คุณชื่ออะไร: ")
age = int(input("อายุเท่าไหร่: "))

print(f"สวัสดีคุณ {name}")
print(f"ปีหน้าคุณจะอายุ {age + 1} ปี")`
                }
            },

            quiz: {
                q: "input() คืนค่าเป็นชนิดข้อมูลอะไรเสมอ?",
                options: [
                    "Integer",
                    "String",
                    "Float",
                    "Boolean"
                ],
                ans: 1
            }
        },

        {
            id: 4,
            title: "ตัวดำเนินการ",
            desc: "Operators คณิตศาสตร์และตรรกศาสตร์",

            content: {
                th: {
                    title: "ตัวดำเนินการ (Operators)",
                    desc: "ตัวดำเนินการทางคณิตศาสตร์ ได้แก่ + - * / และพิเศษคือ // (หารปัดเศษลง), % (หาเศษ), ** (ยกกำลัง) ส่วนตัวดำเนินการเปรียบเทียบ เช่น == (เท่ากับ), != (ไม่เท่ากับ), > < >= <= จะคืนค่าเป็น Boolean และตัวดำเนินการตรรกศาสตร์ and, or, not ใช้เชื่อมเงื่อนไขหลายตัวเข้าด้วยกัน",

                    code:
`a = 10
b = 3

print(a + b)    # 13
print(a // b)   # 3 (หารปัดลง)
print(a % b)    # 1 (เศษ)
print(a ** b)   # 1000 (ยกกำลัง)
print(a > b and b > 0)  # True`
                }
            },

            quiz: {
                q: "ผลลัพธ์ของ 10 % 3 คือเท่าไหร่?",
                options: ["3", "1", "0", "3.33"],
                ans: 1
            }
        },

        // ══════════════════════════════════════════════
        // หน่วยที่ 2: การควบคุมทิศทางและโครงสร้างข้อมูล
        // ══════════════════════════════════════════════

        {
            id: 5,
            title: "เงื่อนไข if/elif/else",
            desc: "การตัดสินใจด้วยเงื่อนไข",

            content: {
                th: {
                    title: "การตัดสินใจด้วยเงื่อนไข",
                    desc: "คำสั่ง if ใช้ตรวจสอบเงื่อนไข ถ้าเป็นจริง (True) จะทำงานในบล็อกนั้น ใช้ elif (else if) เพื่อเพิ่มเงื่อนไขทางเลือก และ else เมื่อไม่ตรงเงื่อนไขใดเลย สิ่งสำคัญใน Python คือการย่อหน้า (indentation) ด้วยการเว้นวรรค 4 ตัว เพื่อบอกว่าโค้ดบรรทัดไหนอยู่ในบล็อกของ if",

                    code:
`score = 75

if score >= 80:
    print("เกรด A")
elif score >= 70:
    print("เกรด B")
elif score >= 60:
    print("เกรด C")
else:
    print("ตก")`
                }
            },

            quiz: {
                q: "elif ย่อมาจากอะไร?",
                options: [
                    "else if",
                    "end if",
                    "elevated if",
                    "exit if"
                ],
                ans: 0
            }
        },

        {
            id: 6,
            title: "ลูป for และ while",
            desc: "การทำงานซ้ำ",

            content: {
                th: {
                    title: "การทำงานซ้ำด้วยลูป",
                    desc: "ลูปใช้ทำงานซ้ำหลายรอบ for loop เหมาะเมื่อรู้จำนวนรอบ มักใช้คู่กับ range() เช่น range(5) คือ 0 ถึง 4 ส่วน while loop จะทำงานวนไปเรื่อยๆ ตราบใดที่เงื่อนไขยังเป็นจริง ต้องระวังอย่าให้เกิด infinite loop (วนไม่รู้จบ) โดยต้องมีการเปลี่ยนค่าให้เงื่อนไขเป็นเท็จในที่สุด",

                    code:
`# for loop
for i in range(1, 6):
    print(f"รอบที่ {i}")

# while loop
count = 3
while count > 0:
    print(f"นับถอยหลัง: {count}")
    count -= 1`
                }
            },

            quiz: {
                q: "range(1, 6) จะวนกี่รอบ?",
                options: ["4", "5", "6", "7"],
                ans: 1
            }
        },

        {
            id: 7,
            title: "List และ Tuple",
            desc: "ตัวเก็บข้อมูลแบบกลุ่ม Part 1",

            content: {
                th: {
                    title: "List และ Tuple",
                    desc: "List คือตัวเก็บข้อมูลหลายค่าในตัวแปรเดียว สร้างด้วยวงเล็บเหลี่ยม [] เข้าถึงด้วย index เริ่มจาก 0 และแก้ไขได้ มีเมธอด .append() เพิ่ม, .remove() ลบ ส่วน Tuple สร้างด้วยวงเล็บ () คล้าย List แต่แก้ไขไม่ได้ (immutable) เหมาะกับข้อมูลที่ไม่ต้องการให้เปลี่ยน เช่น พิกัด",

                    code:
`fruits = ["แอปเปิล", "กล้วย", "ส้ม"]
print(fruits[0])        # แอปเปิล
fruits.append("องุ่น")
print(len(fruits))      # 4

# Tuple แก้ไขไม่ได้
point = (10, 20)
print(point[0])         # 10`
                }
            },

            quiz: {
                q: "List กับ Tuple ต่างกันอย่างไร?",
                options: [
                    "List แก้ไขได้ Tuple แก้ไขไม่ได้",
                    "List เร็วกว่า Tuple",
                    "ไม่ต่างกัน",
                    "Tuple เก็บได้มากกว่า"
                ],
                ans: 0
            }
        },

        {
            id: 8,
            title: "Dictionary และ Set",
            desc: "ตัวเก็บข้อมูลแบบกลุ่ม Part 2",

            content: {
                th: {
                    title: "Dictionary และ Set",
                    desc: "Dictionary เก็บข้อมูลแบบคู่ key:value สร้างด้วยวงเล็บปีกกา {} เข้าถึงข้อมูลผ่าน key เหมาะกับข้อมูลที่มีโครงสร้าง เช่น ข้อมูลผู้ใช้ ส่วน Set คือกลุ่มข้อมูลที่ไม่มีลำดับและไม่มีสมาชิกซ้ำกัน เหมาะกับการกรองข้อมูลซ้ำออก",

                    code:
`# Dictionary
user = {
    "name": "Zenith",
    "age": 18,
    "city": "ลำพูน"
}
print(user["name"])     # Zenith

# Set ไม่มีค่าซ้ำ
nums = {1, 2, 2, 3, 3, 3}
print(nums)             # {1, 2, 3}`
                }
            },

            quiz: {
                q: "Dictionary เก็บข้อมูลในรูปแบบใด?",
                options: [
                    "key:value",
                    "index เท่านั้น",
                    "ค่าเดียว",
                    "True/False"
                ],
                ans: 0
            }
        },

        // ══════════════════════════════════════════════
        // หน่วยที่ 3: ฟังก์ชันและการจัดการข้อผิดพลาด
        // ══════════════════════════════════════════════

        {
            id: 9,
            title: "สร้างฟังก์ชัน",
            desc: "def, Arguments, Return",

            content: {
                th: {
                    title: "การสร้างและเรียกใช้ฟังก์ชัน",
                    desc: "ฟังก์ชันคือกลุ่มโค้ดที่ทำงานเฉพาะอย่าง ช่วยให้โค้ดเป็นระเบียบและนำกลับมาใช้ซ้ำได้ สร้างด้วยคีย์เวิร์ด def ตามด้วยชื่อฟังก์ชัน เราส่งข้อมูลเข้าฟังก์ชันผ่าน arguments (พารามิเตอร์) และส่งผลลัพธ์กลับด้วยคำสั่ง return ถ้าไม่มี return ฟังก์ชันจะคืนค่า None",

                    code:
`def calculate_area(width, height):
    area = width * height
    return area

result = calculate_area(5, 3)
print(f"พื้นที่ = {result}")  # 15

def greet(name):
    return f"สวัสดี {name}"

print(greet("Zenith"))`
                }
            },

            quiz: {
                q: "คำสั่งใดใช้ส่งค่ากลับจากฟังก์ชัน?",
                options: [
                    "return",
                    "print",
                    "def",
                    "input"
                ],
                ans: 0
            }
        },

        {
            id: 10,
            title: "ขอบเขตตัวแปร",
            desc: "Global vs Local Variable",

            content: {
                th: {
                    title: "ขอบเขตของตัวแปร (Scope)",
                    desc: "ตัวแปรมีขอบเขตการใช้งาน ตัวแปร Local คือตัวแปรที่สร้างภายในฟังก์ชัน ใช้ได้เฉพาะในฟังก์ชันนั้น ส่วนตัวแปร Global สร้างนอกฟังก์ชัน ใช้ได้ทั่วทั้งโปรแกรม ถ้าต้องการแก้ไขตัวแปร global จากในฟังก์ชัน ต้องใช้คีย์เวิร์ด global ประกาศก่อน",

                    code:
`score = 100   # Global

def show():
    bonus = 50   # Local
    print(score + bonus)

show()           # 150
print(score)     # 100
# print(bonus)   # Error! ใช้ไม่ได้นอกฟังก์ชัน`
                }
            },

            quiz: {
                q: "ตัวแปร Local ใช้งานได้ที่ไหน?",
                options: [
                    "เฉพาะในฟังก์ชันที่สร้าง",
                    "ทั่วทั้งโปรแกรม",
                    "เฉพาะนอกฟังก์ชัน",
                    "ในไฟล์อื่นด้วย"
                ],
                ans: 0
            }
        },

        {
            id: 11,
            title: "จัดการข้อผิดพลาด",
            desc: "try, except",

            content: {
                th: {
                    title: "การดักจับและจัดการข้อผิดพลาด",
                    desc: "เมื่อโปรแกรมเจอข้อผิดพลาด (error) จะหยุดทำงานทันที เราใช้ try-except เพื่อดักจับข้อผิดพลาดไม่ให้โปรแกรมพัง โค้ดใน try จะถูกทดลองรัน ถ้าเกิด error จะกระโดดไปทำใน except แทน ทำให้โปรแกรมทำงานต่อได้อย่างปลอดภัย",

                    code:
`try:
    num = int(input("ใส่ตัวเลข: "))
    result = 100 / num
    print(f"ผลลัพธ์ = {result}")
except ValueError:
    print("กรุณาใส่ตัวเลขเท่านั้น")
except ZeroDivisionError:
    print("หารด้วยศูนย์ไม่ได้")`
                }
            },

            quiz: {
                q: "try-except ใช้ทำอะไร?",
                options: [
                    "ดักจับข้อผิดพลาด",
                    "สร้างตัวแปร",
                    "วนลูป",
                    "สร้างฟังก์ชัน"
                ],
                ans: 0
            }
        },

        {
            id: 12,
            title: "ทำงานกับไฟล์",
            desc: "เปิด อ่าน เขียนไฟล์",

            content: {
                th: {
                    title: "การทำงานกับไฟล์",
                    desc: "Python อ่านและเขียนไฟล์ได้ด้วยฟังก์ชัน open() โดยระบุโหมด: 'r' อ่าน, 'w' เขียนทับ, 'a' เขียนต่อท้าย แนะนำให้ใช้ with open() เพราะจะปิดไฟล์ให้อัตโนมัติเมื่อเสร็จ ป้องกันการลืมปิดไฟล์ที่อาจทำให้ข้อมูลเสียหาย",

                    code:
`# เขียนไฟล์
with open("data.txt", "w", encoding="utf-8") as f:
    f.write("สวัสดี Zenith\\n")
    f.write("บรรทัดที่ 2")

# อ่านไฟล์
with open("data.txt", "r", encoding="utf-8") as f:
    content = f.read()
    print(content)`
                }
            },

            quiz: {
                q: "โหมด 'w' ในการเปิดไฟล์หมายถึงอะไร?",
                options: [
                    "เขียนทับ",
                    "อ่านอย่างเดียว",
                    "เขียนต่อท้าย",
                    "ลบไฟล์"
                ],
                ans: 0
            }
        },

        // ══════════════════════════════════════════════
        // หน่วยที่ 4: การเขียนโปรแกรมเชิงวัตถุ (OOP)
        // ══════════════════════════════════════════════

        {
            id: 13,
            title: "OOP: Class และ Object",
            desc: "แนวคิด OOP เบื้องต้น",

            content: {
                th: {
                    title: "แนวคิด OOP: Class และ Object",
                    desc: "OOP (Object-Oriented Programming) คือการเขียนโปรแกรมโดยมองทุกอย่างเป็นวัตถุ Class คือพิมพ์เขียว (แบบแปลน) ที่กำหนดว่าวัตถุจะมีคุณสมบัติและความสามารถอะไร ส่วน Object คือวัตถุจริงที่สร้างขึ้นจาก Class นั้น เช่น Class คือแบบแปลนบ้าน ส่วน Object คือบ้านที่สร้างจริง",

                    code:
`class Dog:
    def bark(self):
        print("โฮ่ง โฮ่ง!")

# สร้าง Object จาก Class
my_dog = Dog()
my_dog.bark()      # โฮ่ง โฮ่ง!`
                }
            },

            quiz: {
                q: "Class เปรียบเหมือนอะไร?",
                options: [
                    "พิมพ์เขียว/แบบแปลน",
                    "วัตถุจริง",
                    "ตัวแปร",
                    "ฟังก์ชัน"
                ],
                ans: 0
            }
        },

        {
            id: 14,
            title: "Attributes และ Methods",
            desc: "คุณลักษณะและ __init__",

            content: {
                th: {
                    title: "Attributes และ Methods",
                    desc: "Attributes คือคุณลักษณะ (ข้อมูล) ของวัตถุ ส่วน Methods คือความสามารถ (ฟังก์ชันในคลาส) เมธอดพิเศษ __init__ เรียกว่า constructor จะทำงานอัตโนมัติตอนสร้าง object ใช้กำหนดค่าเริ่มต้น คีย์เวิร์ด self หมายถึงตัววัตถุนั้นเอง ใช้อ้างถึง attributes ของตัวเอง",

                    code:
`class Student:
    def __init__(self, name, age):
        self.name = name      # Attribute
        self.age = age

    def introduce(self):      # Method
        print(f"ผมชื่อ {self.name} อายุ {self.age}")

s1 = Student("Zenith", 18)
s1.introduce()`
                }
            },

            quiz: {
                q: "เมธอด __init__ ทำงานเมื่อใด?",
                options: [
                    "ตอนสร้าง object",
                    "ตอนลบ object",
                    "ตอนจบโปรแกรม",
                    "ไม่ทำงานเลย"
                ],
                ans: 0
            }
        },

        {
            id: 15,
            title: "Inheritance",
            desc: "การสืบทอดคุณสมบัติ",

            content: {
                th: {
                    title: "การสืบทอดคุณสมบัติ (Inheritance)",
                    desc: "Inheritance คือการที่ Class ลูกสืบทอดคุณสมบัติและเมธอดจาก Class แม่ ช่วยลดการเขียนโค้ดซ้ำ Class ลูกใช้ของ Class แม่ได้ทั้งหมด และเพิ่มหรือแก้ไขเมธอดของตัวเองได้ เขียนโดยใส่ชื่อ Class แม่ในวงเล็บหลังชื่อ Class ลูก",

                    code:
`class Animal:
    def __init__(self, name):
        self.name = name
    def eat(self):
        print(f"{self.name} กำลังกิน")

class Cat(Animal):      # สืบทอดจาก Animal
    def meow(self):
        print("เหมียว!")

c = Cat("มะลิ")
c.eat()      # มะลิ กำลังกิน (จาก Animal)
c.meow()     # เหมียว! (ของ Cat เอง)`
                }
            },

            quiz: {
                q: "Inheritance ช่วยเรื่องอะไร?",
                options: [
                    "ลดการเขียนโค้ดซ้ำ",
                    "ทำให้โปรแกรมช้าลง",
                    "ลบข้อมูล",
                    "สร้างไฟล์"
                ],
                ans: 0
            }
        },

        {
            id: 16,
            title: "Encapsulation",
            desc: "การซ่อนข้อมูล",

            content: {
                th: {
                    title: "การซ่อนข้อมูล (Encapsulation)",
                    desc: "Encapsulation คือการปกป้องข้อมูลภายในวัตถุไม่ให้ถูกแก้ไขจากภายนอกโดยตรง ใน Python ใช้ขีดล่างนำหน้า เช่น _name (protected) หรือ __name (private) แล้วสร้างเมธอด getter/setter เพื่อควบคุมการเข้าถึงและแก้ไขข้อมูลอย่างปลอดภัย เป็นหลักการสำคัญของ OOP",

                    code:
`class BankAccount:
    def __init__(self):
        self.__balance = 0      # private

    def deposit(self, amount):
        if amount > 0:
            self.__balance += amount

    def get_balance(self):
        return self.__balance

acc = BankAccount()
acc.deposit(1000)
print(acc.get_balance())   # 1000`
                }
            },

            quiz: {
                q: "Encapsulation มีไว้เพื่ออะไร?",
                options: [
                    "ปกป้องข้อมูลภายในวัตถุ",
                    "ทำให้โค้ดยาวขึ้น",
                    "เพิ่มความเร็ว",
                    "สร้างเว็บไซต์"
                ],
                ans: 0
            }
        }

    ]
};