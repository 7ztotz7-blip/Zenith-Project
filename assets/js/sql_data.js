const courseData = {
    title: "SQL Data Master",
    themeColor: "#00758f", // สีน้ำเงินมหาสมุทรสไตล์ SQL/MySQL
    lessons: [
        {
            id: 1,
            content: {
                th: { title: "🗄️ 1. โครงสร้างฐานข้อมูลเชิงสัมพันธ์", desc: "ระบบการเก็บข้อมูลในตารางที่มีโครงสร้างแถว (Rows) และคอลัมน์ (Columns) ชัดเจน", code: "SELECT * FROM users;", quiz: { q: "คำสั่ง SELECT * มีความหมายตรงกับข้อใดมากที่สุด?", options: ["เลือกลบข้อมูลทั้งหมด", "เลือกดึงข้อมูลทุกคอลัมน์", "เลือกแก้ไขบางแถว", "นับจำนวนตาราง"], ans: 1 } },
                en: { title: "🗄️ 1. Relational Databases", desc: "Structuring data inside linked tables configured with solid rows and columns.", code: "SELECT * FROM users;", quiz: { q: "What does the star token (*) stand for inside SELECT commands?", options: ["Delete everything", "Fetch all columns", "Modify certain rows", "Count total tables"], ans: 1 } }
            }
        },
        {
            id: 2,
            content: {
                th: { title: "🔍 2. การกรองข้อมูลด้วย WHERE", desc: "การระบุเงื่อนไขท้ายประโยคคิวรี เพื่อดึงเฉพาะแถวข้อมูลที่เราต้องการตรวจสอบมาดู", code: "SELECT * FROM products\nWHERE price > 500;", quiz: { q: "จากโค้ดข้างต้น ระบบจะกรองสินค้าชนิดใดออกมาให้ดู?", options: ["ราคาน้อยกว่า 500", "ราคาเท่ากับ 500 เท่านั้น", "ราคามากกว่า 500 ขึ้นไป", "สินค้าทุกชิ้น"], ans: 2 } },
                en: { title: "🔍 2. Filtering via WHERE clauses", desc: "Extracting precise rows of matching data using precise boundary rules.", code: "SELECT * FROM products\nWHERE price > 500;", quiz: { q: "Based on the query above, what items are fetched?", options: ["Price lower than 500", "Price exactly 500", "Price greater than 500", "All products"], ans: 2 } }
            }
        },
        {
            id: 3,
            content: {
                th: { title: "➕ 3. การเพิ่มข้อมูลด้วย INSERT INTO", desc: "คำสั่งสำหรับเพิ่มข้อมูลบันทึกแถวใหม่เข้าไปในตารางฐานข้อมูลที่กำหนด", code: "INSERT INTO users (name, age)\nVALUES ('Chanwit', 18);", quiz: { q: "คีย์เวิร์ดใดคู่กับ INSERT INTO เพื่อใช้กำหนดชุดข้อมูลใหม่?", options: ["DATA", "SET", "VALUES", "FIELDS"], ans: 2 } },
                en: { title: "➕ 3. Insertion of Records", desc: "Command used to insert new row data records inside a specified table structural matrix.", code: "INSERT INTO users (name, age)\nVALUES ('Chanwit', 18);", quiz: { q: "Which keyword acts in tandem with INSERT INTO to deliver records?", options: ["DATA", "SET", "VALUES", "FIELDS"], ans: 2 } }
            }
        },
        {
            id: 4,
            content: {
                th: { title: "🔄 4. การแก้ไขข้อมูล UPDATE", desc: "การแก้ไขค่าเดิมในตาราง สิ่งสำคัญคือต้องมี WHERE เสมอ มิฉะนั้นข้อมูลจะเปลี่ยนทั้งตาราง!", code: "UPDATE users\nSET age = 19\nWHERE id = 1;", quiz: { q: "จะเกิดอะไรขึ้นหากสั่งคำสั่ง UPDATE โดยลืมใส่ WHERE ต่อท้ายเงื่อนไข?", options: ["ระบบจะแจ้งเตือนและยกเลิก", "โค้ดทำงานปกติแต่ไม่แก้ข้อมูล", "ข้อมูลในคอลัมน์นั้นจะถูกแก้ไขเปลี่ยนทุกแถว", "ฐานข้อมูลล่มสลาย"], ans: 2 } },
                en: { title: "🔄 4. Modifying via UPDATE", desc: "Modifying values inside tables. Crucial tip: Always guard it with WHERE filters!", code: "UPDATE users\nSET age = 19\nWHERE id = 1;", quiz: { q: "What transpires if you invoke UPDATE without standard WHERE clauses?", options: ["Aborts with warning alerts", "Runs but changes nothing", "Updates specified columns across all rows", "Crashes database instantly"], ans: 2 } }
            }
        },
        {
            id: 5,
            content: {
                th: { title: "❌ 5. การลบข้อมูลด้วย DELETE", desc: "คำสั่งทำลายแถวข้อมูลที่ไม่ใช้งานออกจากระบบฐานข้อมูลอย่างถาวร", code: "DELETE FROM users\nWHERE id = 5;", quiz: { q: "คำสั่งลบข้อใดข้างต้นจะส่งผลกระทบต่อผู้ใช้งานกี่คน?", options: ["ลบผู้ใช้ทุกคน", "ลบผู้ใช้ที่มีไอดีเท่ากับ 5 เพียงคนเดียว", "ลบผู้ใช้ที่มีอายุต่ำกว่า 5 ปี", "ไม่ลบใครเลย"], ans: 1 } },
                en: { title: "❌ 5. Deleting Row Records", desc: "Purging unused or obsolete structural data rows out of the database maps permanently.", code: "DELETE FROM users\nWHERE id = 5;", quiz: { q: "How many users are removed via the code snippet provided above?", options: ["Removes entire users", "Removes only the user with ID 5", "Removes users below age 5", "Removes nobody"], ans: 1 } }
            }
        }
    ]
};