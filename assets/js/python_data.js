const courseData = {
    title: "Python Programming Masterclass",
    themeColor: "#2dd4bf",
    lessons: [
        {
            id: 1,
            content: {
                th: { 
                    title: "🐍 1. ตัวแปร ชนิดข้อมูล และ PEP 8 Standard", 
                    desc: "💡 [Concept] ตัวแปร (Variables) คือการจองพื้นที่ในหน่วยความจำเพื่อเก็บข้อมูล Python เป็นภาษาแบบ Dynamic Typing ไม่ต้องระบุชนิดตัวแปรล่วงหน้า ชนิดข้อมูลพื้นฐานประกอบด้วย int (เลขจำนวนเต็ม), float (เลขทศนิยม), str (ข้อความ), และ bool (True/False)\n\n💻 [Code Example]:\nuser_xp = 250\nplayer_name = 'Chanwit'\nis_completed = True\n\n🛠️ [Real-world Application] มาตรฐาน PEP 8 กำหนดให้ใช้ Snake Case (พิมพ์เล็กคั่นด้วย _) ห้ามขึ้นต้นด้วยตัวเลขหรือใช้คำสงวน เพื่อให้โค้ดสะอาดและระบบไม่เกิดข้อผิดพลาดในการคอมไพล์", 
                    quiz: { q: "ตามมาตรฐาน PEP 8 ข้อใดคือการตั้งชื่อตัวแปรที่ถูกต้องที่สุดใน Python?", options: ["user-score = 100", "1st_score = 100", "user_score = 100", "def = 100"], ans: 2 } 
                },
                en: { 
                    title: "🐍 1. Variables, Data Types & PEP 8 Standards", 
                    desc: "💡 [Concept] Variables store values in memory using dynamic typing. Core types include int, float, str, and bool.\n\n💻 [Code Example]:\nuser_xp = 250\nplayer_name = 'Chanwit'\n\n🛠️ [Real-world Application] Adhering to Snake Case keeps large repositories readable and maintainable.", 
                    quiz: { q: "Which variable declaration strictly complies with PEP 8 style guidelines?", options: ["user-score = 100", "1st_score = 100", "user_score = 100", "def = 100"], ans: 2 } 
                }
            }
        },
        {
            id: 2,
            content: {
                th: { 
                    title: "⚡ 2. ตัวดำเนินการทางคณิตศาสตร์และตรรกศาสตร์", 
                    desc: "💡 [Concept] ตัวดำเนินการคือเครื่องหมายที่ใช้ประมวลผลข้อมูล เช่น บวก ลบ คูณ หาร เครื่องหมายหารปัดเศษ (`//`), หารเอาเศษ (`%`), ยกกำลัง (`**`) และตัวดำเนินการตรรกศาสตร์อย่าง `and`, `or`, `not` ที่ใช้เชื่อมเงื่อนไขเข้าด้วยกัน\n\n💻 [Code Example]:\nx = 10\ny = 3\nprint(x // y)  # ผลลัพธ์: 3 (ตัดทศนิยมทิ้ง)\nprint(x % y)   # ผลลัพธ์: 1 (เหลือเศษ)\n\n🛠️ [Real-world Application] เครื่องหมาย Modulo (`%`) นิยมนำมาใช้ตรวจสอบเลขคู่เลขคี่ (เช่น `if num % 2 == 0`) หรือใช้ตัดรอบการทำงานในระบบคิวของโปรแกรม", 
                    quiz: { q: "ผลลัพธ์ของคำสั่ง 11 // 3 และ 11 % 3 คือข้อใดตามลำดับ?", options: ["3.66 และ 2", "3 และ 2", "3 และ 1", "4 และ 1"], ans: 1 } 
                },
                en: { 
                    title: "⚡ 2. Arithmetic & Logical Operators", 
                    desc: "💡 [Concept] Operators execute arithmetic operations. Key operators include floor division (`//`), modulo (`%`), and exponents (`**`), alongside logical gates (`and`, `or`, `not`).\n\n💻 [Code Example]:\nprint(10 // 3)  # Output: 3\nprint(10 % 3)   # Output: 1\n\n🛠️ [Real-world Application] Modulo arithmetic operations are heavily used to detect even/odd numbers or handle circular indexing.", 
                    quiz: { q: "What are the exact outputs of 11 // 3 and 11 % 3?", options: ["3.66 and 2", "3 and 2", "3 and 1", "4 and 1"], ans: 1 } 
                }
            }
        },
        {
            id: 3,
            content: {
                th: { 
                    title: "📱 3. โครงสร้างเงื่อนไขและการจัดบล็อกโค้ด (If-Elif-Else)", 
                    desc: "💡 [Concept] โครงสร้างเงื่อนไขใช้ควบคุมทิศทางโปรแกรม Python บังคับใช้การจัดย่อหน้า (Indentation) ขนาด 4 Spaces ท้ายเงื่อนไขต้องมีเครื่องหมาย `:` เสมอ คีย์เวิร์ด `elif` ใช้สำหรับเพิ่มเงื่อนไขตรวจสอบถัดไป\n\n💻 [Code Example]:\nscore = 75\nif score >= 80:\n    print('Grade A')\nelif score >= 70:\n    print('Grade B')\nelse:\n    print('Grade F')\n\n🛠️ [Real-world Application] การเว้นวรรคเยื้องหน้าโค้ดไม่เท่ากันจะเกิด `IndentationError` ทันที ซึ่งเป็นกลไกที่ Python ใช้บังคับให้นักพัฒนาเขียนโค้ดให้เป็นระเบียบอ่านง่าย", 
                    quiz: { q: "คีย์เวิร์ดใดใน Python ทำหน้าที่เป็นเงื่อนไขทางเลือกย่อยถัดจากเงื่อนไขหลักตัวแรก?", options: ["elseif", "else if", "elif", "otherwise"], ans: 2 } 
                },
                en: { 
                    title: "📱 3. Conditional Architecture (If-Elif-Else)", 
                    desc: "💡 [Concept] Conditionals branch code logic execution. Python relies heavily on 4-space indentations and trailing colons (`:`) instead of curly braces.\n\n💻 [Code Example]:\nif score >= 80:\n    print('A')\nelif score >= 70:\n    print('B')\n\n🛠️ [Real-world Application] Correct indentation ensures that specific logical gates are nested under their correct parental statements.", 
                    quiz: { q: "Which explicit keyword handles multi-conditional testing branches inside Python standard specifications?", options: ["elseif", "else if", "elif", "otherwise"], ans: 2 } 
                }
            }
        },
        {
            id: 4,
            content: {
                th: { 
                    title: "🔁 4. โครงสร้างการวนซ้ำ (For & While Loops)", 
                    desc: "💡 [Concept] การทำงานซ้ำแบ่งเป็น `for` loop (วนซ้ำตามจำนวนรอบที่แน่นอน เช่น ใน List หรือช่วง range) และ `while` loop (วนซ้ำตราบใดที่เงื่อนไขเป็นจริง) ใช้คีย์เวิร์ด `break` เพื่อหยุดลูป และ `continue` เพื่อข้ามรอบ\n\n💻 [Code Example]:\n# วนลูปพิมพ์เลข 0-4\nfor i in range(5):\n    print(i)\n\n# วนลูปทำงานไปเรื่อยๆ จนกว่าเงื่อนไขจะเปลี่ยน\nwhile True:\n    cmd = input('กรอกคำสั่ง: ')\n    if cmd == 'quit': break\n\n🛠️ [Real-world Application] ในระบบ Zenith คุณใช้ `for` loop ดึงบทเรียนจากอาร์เรย์มาแสดงบนหน้าจออัตโนมัติ ช่วยลดการเขียนโค้ด UI ซ้ำซ้อนได้มหาศาล", 
                    quiz: { q: "คีย์เวิร์ดใดสั่งให้โปรแกรมหยุดทำงานและหลุดออกจากลูปปัจจุบันทันที?", options: ["continue", "pass", "break", "exit"], ans: 2 } 
                },
                en: { 
                    title: "🔁 4. Iteration Systems (For & While Loops)", 
                    desc: "💡 [Concept] Iterations are handled via predefined `for` chains or statement-driven `while` states. Controls include `break` (exit loop) and `continue` (skip current iteration).\n\n💻 [Code Example]:\nfor i in range(3):\n    print(i)\n\n🛠️ [Real-world Application] Loops iterate over raw database record sets to format cards on custom interface grids.", 
                    quiz: { q: "Which control keyword forces a loop context execution block to terminate immediately?", options: ["continue", "pass", "break", "exit"], ans: 2 } 
                }
            }
        },
        {
            id: 5,
            content: {
                th: { 
                    title: "📦 5. โครงสร้างข้อมูลแบบรายการ (Lists & Tuples)", 
                    desc: "💡 [Concept] List (`[]`) คืออาร์เรย์ที่เก็บข้อมูลต่อกันเป็นลำดับ สามารถเพิ่ม ลด หรือแก้ไขสมาชิกได้ตลอดเวลา (Mutable) ส่วน Tuple (`()`) เมื่อสร้างแล้วจะไม่สามารถแก้ไขค่าได้ (Immutable) ทำให้ประมวลผลเร็วกว่าและปลอดภัยกว่า\n\n💻 [Code Example]:\nitems = ['HTML', 'CSS', 'JS']\nitems.append('Python')  # เพิ่มต่อท้าย\nprint(items[0])        # ผลลัพธ์: 'HTML' (นับจาก 0)\n\n🛠️ [Real-world Application] ใช้ List เก็บข้อมูลฟีดบทเรียน หรือรายการตะกร้าสินค้า ส่วน Tuple ใช้เก็บข้อมูลคงที่ที่ไม่ควรถูกแก้ไข เช่น ค่าพิกัดแผนที่ (X, Y) หรือการตั้งค่าระบบ", 
                    quiz: { q: "เมธอดใดใช้สำหรับเพิ่มสมาชิกใหม่ต่อเข้าส่วนท้ายสุดของข้อมูลประเภท List?", options: ["add()", "push()", "append()", "insert()"], ans: 2 } 
                },
                en: { 
                    title: "📦 5. Sequence Containers (Lists & Tuples)", 
                    desc: "💡 [Concept] Lists `[]` are mutable ordered arrays that accept runtime changes. Tuples `()` are immutable datasets, meaning they cannot be modified after initial structural creation.\n\n💻 [Code Example]:\ntech = ['HTML', 'CSS']\ntech.append('Python')\n\n🛠️ [Real-world Application] Lists manage live application queues while Tuples isolate static configurations safely.", 
                    quiz: { q: "Which built-in list method appends an external object to the tail of a list array?", options: ["add()", "push()", "append()", "insert()"], ans: 2 } 
                }
            }
        },
        {
            id: 6,
            content: {
                th: { 
                    title: "🔑 6. ข้อมูลแบบจับคู่พจนานุกรม (Dictionaries & Sets)", 
                    desc: "💡 [Concept] Dictionary (`{}`) จัดเก็บข้อมูลคู่ของ Key:Value ค้นหาข้อมูลได้เร็วผ่านคีย์ระบุเป้าหมายโดยไม่ต้องจำลำดับตัวเลข ส่วน Set (`{}`) เก็บข้อมูลแบบไม่ซ้ำกันและไม่เรียงลำดับ นิยมใช้ตัดข้อมูลที่ซ้ำทิ้ง\n\n💻 [Code Example]:\nuser = {'id': 101, 'name': 'Chanwit', 'role': 'Admin'}\nprint(user['name'])  # ผลลัพธ์: 'Chanwit'\nuser['level'] = 5    # เพิ่มคีย์ใหม่\n\n🛠️ [Real-world Application] โครงสร้าง Dictionary แปลงเป็นข้อมูลรูปแบบ JSON ได้โดยตรง ซึ่งเป็นรูปแบบมาตรฐานโลกที่ระบบหน้าบ้าน (Frontend) และหลังบ้าน (Backend) ใช้รับส่งข้อมูลหากันผ่าน API", 
                    quiz: { q: "ส่วนประกอบที่อยู่หน้าเครื่องหมาย `:` ใน Dictionary ที่ทำหน้าที่ระบุชี้เป้าค่าข้อมูลเรียกว่าอะไร?", options: ["Index", "Value", "Key", "Element"], ans: 2 } 
                },
                en: { 
                    title: "🔑 6. Key-Value Models (Dictionaries & Sets)", 
                    desc: "💡 [Concept] Dictionaries `{}` hold key-to-value assignments for high-speed queries. Sets `{}` are unordered item frameworks that guarantee data uniqueness.\n\n💻 [Code Example]:\nprofile = {'name': 'Chanwit', 'status': 'Active'}\n\n🛠️ [Real-world Application] Dictionary data layouts sync natively with JSON network data transfer protocols.", 
                    quiz: { q: "What is the specific name of the element tag positioned directly to the left of the colon marker in dictionaries?", options: ["Index", "Value", "Key", "Element"], ans: 2 } 
                }
            }
        },
        {
            id: 7,
            content: {
                th: { 
                    title: "🛠️ 7. การเขียนฟังก์ชันและการส่งคืนค่า (Functions)", 
                    desc: "💡 [Concept] ฟังก์ชันประกาศด้วยคีย์เวิร์ด `def` เป็นการยุบโค้ดที่ทำงานซ้ำๆ มารวมกัน สามารถรับพารามิเตอร์เข้ามาประมวลผล และดีดผลลัพธ์กลับออกไปด้วยคำสั่ง `return` เพื่อเอาค่าไปใช้งานต่อ\n\n💻 [Code Example]:\ndef add_xp(current, points):\n    total = current + points\n    return total\n\nnew_xp = add_xp(150, 50)  # คืนค่า 200 กลับมาเก็บในตัวแปร\n\n🛠️ [Real-world Application] ใช้รวบรวมตรรกะกลางของระบบ เช่น ฟังก์ชันคำนวณราคาสินค้ารวมภาษี หรือฟังก์ชันตรวจสอบสิทธิ์การล็อกอิน ทำให้โค้ดไม่กระจัดกระจายและง่ายต่อการซ่อมบำรุง", 
                    quiz: { q: "คีย์เวิร์ดใดทำหน้าที่ส่งผลลัพธ์ที่คำนวณเสร็จสิ้นแล้วออกจากฟังก์ชันกลับไปยังจุดที่เรียกใช้งาน?", options: ["output", "send", "return", "export"], ans: 2 } 
                },
                en: { 
                    title: "🛠️ 7. Custom Functions & Returns", 
                    desc: "💡 [Concept] Functions compress redundant code blocks using `def` syntax parameters. They isolate execution tracks and channel evaluated outputs outward via `return` operations.\n\n💻 [Code Example]:\ndef greet(name):\n    return f'Hello {name}'\n\n🛠️ [Real-world Application] Functions decouple operations like authorization verifications and global value formatting.", 
                    quiz: { q: "Which specific keyword returns values back to the original operational invoke hook?", options: ["output", "send", "return", "export"], ans: 2 } 
                }
            }
        },
        {
            id: 8,
            content: {
                th: { 
                    title: "🛡️ 8. การจัดการข้อผิดพลาดและข้อยกเว้น (Exceptions)", 
                    desc: "💡 [Concept] เมื่อเกิดข้อผิดพลาดขณะโปรแกรมรัน (Runtime Error) โปรแกรมจะพังค้างทันที Python แก้ปัญหานี้ด้วยบล็อก `try-except` โดยใส่โค้ดที่เสี่ยงพังใน `try` และระบุวิธีแก้ปัญหาหรือดักจับข้อผิดพลาดเอาไว้ในกล่อง `except`\n\n💻 [Code Example]:\ntry:\n    num = int(input('กรอกตัวเลข: '))\n    result = 10 / num\nexcept ZeroDivisionError:\n    print('ห้ามกรอกเลขศูนย์!')\nexcept ValueError:\n    print('กรุณากรอกเฉพาะตัวเลขเท่านั้น!')\n\n🛠️ [Real-world Application] ใช้ดักจับจังหวะที่ผู้ใช้กรอกข้อมูลผิดฟอร์แมต หรือจังหวะที่เน็ตหลุดขณะเชื่อมต่อระบบ ช่วยเปลี่ยนจากหน้าจอ Error น่ากลัวๆ ให้กลายเป็นการแจ้งเตือนที่สุภาพแทน", 
                    quiz: { q: "โครงสร้างคำสั่งคู่ใดใช้ในการดักจับ Runtime Errors เพื่อควบคุมไม่ให้โปรแกรมหลุดค้าง?", options: ["if - else", "for - break", "try - except", "def - return"], ans: 2 } 
                },
                en: { 
                    title: "🛡️ 8. Exception Handling & Robust Code (Try-Except)", 
                    desc: "💡 [Concept] Runtime faults immediately crash executing code. Wrapping operational statements inside `try-except` blocks captures anomalies smoothly and routes alternate workflows.\n\n💻 [Code Example]:\ntry:\n    res = 10 / 0\nexcept ZeroDivisionError:\n    res = 0\n\n🛠️ [Real-world Application] Protects workflows from invalid forms, remote connection structural timeouts, or hardware crashes.", 
                    quiz: { q: "Which functional pairing mitigates execution breakdowns dynamically inside standard scripts?", options: ["if - else statements", "for - break loops", "try - except scopes", "def - return definitions"], ans: 2 } 
                }
            }
        },
        {
            id: 9,
            content: {
                th: { 
                    title: "📁 9. การทำงานกับไฟล์และการบันทึกข้อมูล (File I/O)", 
                    desc: "💡 [Concept] โปรแกรมต้องการการบันทึกข้อมูลถาวรลงเครื่อง บล็อกคำสั่ง `with open()` จะช่วยเปิดไฟล์และทำการปิดให้โดยอัตโนมัติเมื่อสิ้นสุดบล็อกเพื่อป้องกันไฟล์เสียหาย โหมดหลักคือ 'r' (อ่าน), 'w' (เขียนทับ), และ 'a' (เขียนต่อท้าย)\n\n💻 [Code Example]:\n# บันทึกประวัติการเรียน\nwith open('history.txt', 'a', encoding='utf-8') as f:\n    f.write('Chanwit เรียนบทที่ 9 สำเร็จ\\n')\n\n# อ่านไฟล์\nwith open('history.txt', 'r', encoding='utf-8') as f:\n    print(f.read())\n\n🛠️ [Real-world Application] ใช้จัดเก็บไฟล์ Log บันทึกประวัติการทำงานของระบบ หรือดึงไฟล์โครงสร้างข้อความทั่วไปมาวิเคราะห์ประมวลผลขั้นต้นก่อนขยับไปผูกฐานข้อมูลใหญ่", 
                    quiz: { q: "ข้อใดคือข้อดีที่สุดของการเปิดไฟล์ด้วยคำสั่งคู่ with open() เสมอ?", options: ["เพิ่มสปีดการเขียนไฟล์", "ปิดไฟล์ให้โดยอัตโนมัติเมื่อสิ้นสุดการทำงาน ป้องกันไฟล์พังเสียหาย", "ช่วยย่อยขนาดไฟล์ให้เล็กลง", "อนุญาตให้เปิดไฟล์พร้อมกันได้ 1,000 ไฟล์"], ans: 1 } 
                },
                en: { 
                    title: "📁 9. Local File Storage Environments (File I/O)", 
                    desc: "💡 [Concept] Flat-file interactions persist data long-term. `with open()` serves as a runtime safehouse container ensuring automatic close signals upon exiting scopes.\n\n💻 [Code Example]:\nwith open('save.txt', 'w') as file:\n    file.write('Checkpoint Delta')\n\n🛠️ [Real-world Application] Manages local logging tasks and structural exports of flat analytics metrics directly into localized configurations.", 
                    quiz: { q: "Why is utilizing 'with open()' preferred over classic open/close handle routines?", options: ["Improves storage speeds", "Guarantees resource auto-disposal and stream file closures", "Reduces physical file size footprints", "Allows 1,000 parallel streams"], ans: 1 } 
                }
            }
        },
        {
            id: 10,
            content: {
                th: { 
                    title: "🎯 10. การเขียนโปรแกรมเชิงวัตถุสถาปัตยกรรม (OOP)", 
                    desc: "💡 [Concept] OOP (Object-Oriented Programming) คือการมองชุดโค้ดเป็นวัตถุ โดยมี `Class` เป็นพิมพ์เขียวต้นแบบ และมี `Object` เป็นตัวชิ้นงานจริงที่ปั๊มออกมา ภายในมีตัวแปรประจำตัว (`Attributes`) และฟังก์ชันสั่งงานประจำตัว (`Methods`)\n\n💻 [Code Example]:\nclass Course:\n    def __init__(self, title, code):\n        self.title = title  # Attribute\n        self.code = code\n    \n    def get_info(self):  # Method\n        return f'วิชา: {self.title} ({self.code})'\n\nc1 = Course('Python Programming', 'DBT-204')\nprint(c1.get_info())\n\n🛠️ [Real-world Application] เป็นสถาปัตยกรรมหลักในการคุมสเกลระบบขนาดใหญ่ เช่น การจำลองบัญชีผู้ใช้แต่ละคนให้เป็น Object แยกจากกันเพื่อป้องกันข้อมูลตีกันนั่นเอง", 
                    quiz: { q: "ในสถาปัตยกรรม OOP พิมพ์เขียวหรือแม่แบบต้นร่างที่ใช้ปั๊มโมเดลวัตถุออกมาเรียกว่าอะไร?", options: ["Object", "Class", "Method", "Property"], ans: 1 } 
                },
                en: { 
                    title: "🎯 10. Object-Oriented Programming (OOP Architecture)", 
                    desc: "💡 [Concept] OOP transforms applications into entity objects. A `Class` frames the blueprints, assigning dynamic unique traits (`Attributes`) and actions (`Methods`) to instantiated `Objects`.\n\n💻 [Code Example]:\nclass Player:\n    def __init__(self, name):\n        self.name = name\n\np1 = Player('Chanwit')\n\n🛠️ [Real-world Application] Maps complex enterprise business models, handling decoupled records cleanly without mutating global layers.", 
                    quiz: { q: "Which architectural terminology serves as the master template script layout?", options: ["Active Object", "Master Class", "Functional Method", "Local Property"], ans: 1 } 
                }
            }
        },
        {
            id: 11,
            content: {
                th: { 
                    title: "🗄️ 11. การเชื่อมต่อระบบฐานข้อมูล (SQLite Databases)", 
                    desc: "💡 [Concept] ไลบรารี `sqlite3` ติดตั้งมาพร้อม Python ช่วยให้เราสามารถสร้างระบบฐานข้อมูลแบบ SQL ในตัวไฟล์เครื่องได้โดยตรง ควบคุมด้วยภาษา SQL ผ่านคำสั่งชุดหลัก: INSERT, SELECT, UPDATE และ DELETE\n\n💻 [Code Example]:\nimport sqlite3\n\nconn = sqlite3.connect('zenith_db.db')\ncursor = conn.cursor()\n# สร้างตารางและหยอดข้อมูล\ncursor.execute('CREATE TABLE IF NOT EXISTS users (name TEXT, xp INTEGER)')\ncursor.execute(\"INSERT INTO users VALUES ('Chanwit', 500)\")\nconn.commit()\nconn.close()\n\n🛠️ [Real-world Application] ใช้บันทึกข้อมูลผู้เรียน คะแนนสอบ และสถิติต่างๆ แบบถาวรและปลอดภัย ถือเป็นกระดูกชิ้นสำคัญของการทำแอปพลิเคชันสายธุรกิจ", 
                    quiz: { q: "คำสั่งใดในโมดูล sqlite3 ทำหน้าที่ยืนยันการเปลี่ยนแปลงข้อมูล (เช่น เพิ่มหรือลบ) ลงไปในไฟล์ฐานข้อมูลจริง?", options: ["execute()", "commit()", "connect()", "rollback()"], ans: 1 } 
                },
                en: { 
                    title: "🗄️ 11. Relational Database Engineering (SQLite)", 
                    desc: "💡 [Concept] Python embeds native relational databasing engines through the `sqlite3` subsystem package, managing queries using structured standard SQL scripts.\n\n💻 [Code Example]:\nimport sqlite3\nconn = sqlite3.connect('app.db')\n# Execute statements...\nconn.commit()\nconn.close()\n\n🛠️ [Real-world Application] Forms the core backbone of financial or educational software trackers, persisting historical transactional logs reliably.", 
                    quiz: { q: "Which connection execution instruction commits saved transaction cycles directly into the disk file database?", options: ["execute()", "commit()", "connect()", "rollback()"], ans: 1 } 
                }
            }
        },
        {
            id: 12,
            content: {
                th: { 
                    title: "🌐 12. การดึงข้อมูลเว็บอัตโนมัติ (Web Scraping & API)", 
                    desc: "💡 [Concept] ข้อมูลมหาศาลอยู่บนโลกออนไลน์ เราใช้ไลบรารีภายนอกอย่าง `requests` ในการยิงคำขอเปิดเว็บ และใช้ `BeautifulSoup` จากโมดูล `bs4` ในการแกะรหัสโครงสร้าง HTML เพื่อดึงเฉพาะเนื้อหาหรือราคาสินค้าที่เราต้องการออกมา\n\n💻 [Code Example]:\nimport requests\nfrom bs4 import BeautifulSoup\n\nurl = 'https://quotes.toscrape.com/'\nres = requests.get(url)\nsoup = BeautifulSoup(res.text, 'html.html')\n# ดึงหัวข้อบทความตัวแรกมาโชว์\nprint(soup.find('span', class_='text').text)\n\n🛠️ [Real-world Application] ใช้ทำระบบบอทเปรียบเทียบราคาสินค้าอัตโนมัติ ดูดข้อมูลหุ้น ดึงข่าวสาร หรือดึงข้อมูลเทรนด์ตลาดจากเว็บไซต์ต่างๆ มาวิเคราะห์วางแผนกลยุทธ์ทางธุรกิจต่อไป", 
                    quiz: { q: "ไลบรารีคู่ใดนิยมนำมาผสานพลังกันเพื่อทำระบบดูดข้อมูลอัตโนมัติ (Web Scraping) ในภาษา Python?", options: ["math และ random", "requests และ BeautifulSoup", "sqlite3 และ os", "sys และ datetime"], ans: 1 } 
                },
                en: { 
                    title: "🌐 12. Automation & Web Crawling (Web Scraping)", 
                    desc: "💡 [Concept] Scraping harvests datasets across online nodes. Programmers pipe remote markup strings via the `requests` utility, parsing tags into queried targets using the `BeautifulSoup` analyzer package.\n\n💻 [Code Example]:\n# Basic scraping layout pattern\nimport requests\nfrom bs4 import BeautifulSoup\nhtml = requests.get('https://example.com').text\nsoup = BeautifulSoup(html, 'html.parser')\n\n🛠️ [Real-world Application] Drives commercial stock analytics index monitors, price-drop web notification bots, and competitive marketing data charts.", 
                    quiz: { q: "Which library coupling executes remote web scrapers to download and decode target elements?", options: ["math and random tools", "requests and BeautifulSoup modules", "sqlite3 and os interfaces", "sys and datetime wrappers"], ans: 1 } 
                }
            }
        }
    ]
};