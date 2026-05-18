// ==========================
// SQL COURSE
// assets/js/sql_data.js
// ==========================

const courseData = {
    title: "SQL Database",
    themeColor: "#00758f",

    lessons: [

        {
            id: 1,
            title: "SQL คืออะไร",
            desc: "เริ่มต้นฐานข้อมูล",

            content: {
                th: {
                    title: "SQL คืออะไร",
                    desc: "SQL ใช้จัดการฐานข้อมูล",

                    code:
`SELECT * FROM users;`
                }
            },

            quiz: {
                q: "SQL ใช้ทำอะไร?",
                options: [
                    "จัดการฐานข้อมูล",
                    "ตัดต่อวิดีโอ",
                    "สร้างเกม",
                    "วาดรูป"
                ],
                ans: 0
            }
        },

        {
            id: 2,
            title: "SELECT",
            desc: "ดึงข้อมูล",

            content: {
                th: {
                    title: "SELECT",
                    desc: "ใช้ดึงข้อมูลจากตาราง",

                    code:
`SELECT name
FROM users;`
                }
            },

            quiz: {
                q: "SELECT ใช้ทำอะไร?",
                options: [
                    "ดึงข้อมูล",
                    "ลบข้อมูล",
                    "แก้ข้อมูล",
                    "สร้างเว็บ"
                ],
                ans: 0
            }
        },

        {
            id: 3,
            title: "INSERT",
            desc: "เพิ่มข้อมูล",

            content: {
                th: {
                    title: "INSERT",
                    desc: "ใช้เพิ่มข้อมูล",

                    code:
`INSERT INTO users(name, age)
VALUES("Zenith", 18);`
                }
            },

            quiz: {
                q: "INSERT ใช้ทำอะไร?",
                options: [
                    "เพิ่มข้อมูล",
                    "ลบข้อมูล",
                    "สร้างสี",
                    "สร้างเกม"
                ],
                ans: 0
            }
        },

        {
            id: 4,
            title: "UPDATE",
            desc: "แก้ไขข้อมูล",

            content: {
                th: {
                    title: "UPDATE",
                    desc: "แก้ไขข้อมูลในตาราง",

                    code:
`UPDATE users
SET age = 20
WHERE id = 1;`
                }
            },

            quiz: {
                q: "UPDATE ใช้ทำอะไร?",
                options: [
                    "แก้ไขข้อมูล",
                    "ลบข้อมูล",
                    "ดึงข้อมูล",
                    "สร้างเว็บ"
                ],
                ans: 0
            }
        },

        {
            id: 5,
            title: "DELETE",
            desc: "ลบข้อมูล",

            content: {
                th: {
                    title: "DELETE",
                    desc: "ลบข้อมูลออกจากตาราง",

                    code:
`DELETE FROM users
WHERE id = 1;`
                }
            },

            quiz: {
                q: "DELETE ใช้ทำอะไร?",
                options: [
                    "ลบข้อมูล",
                    "เพิ่มข้อมูล",
                    "สร้าง AI",
                    "สร้างสี"
                ],
                ans: 0
            }
        },

        {
            id: 6,
            title: "WHERE",
            desc: "กรองข้อมูล",

            content: {
                th: {
                    title: "WHERE",
                    desc: "เลือกเฉพาะข้อมูลที่ต้องการ",

                    code:
`SELECT *
FROM users
WHERE age > 18;`
                }
            },

            quiz: {
                q: "WHERE ใช้ทำอะไร?",
                options: [
                    "กรองข้อมูล",
                    "สร้างตาราง",
                    "สร้างเกม",
                    "สร้างรูป"
                ],
                ans: 0
            }
        },

        {
            id: 7,
            title: "ORDER BY",
            desc: "เรียงข้อมูล",

            content: {
                th: {
                    title: "ORDER BY",
                    desc: "เรียงข้อมูล",

                    code:
`SELECT *
FROM users
ORDER BY age DESC;`
                }
            },

            quiz: {
                q: "DESC คืออะไร?",
                options: [
                    "เรียงจากมากไปน้อย",
                    "เรียงจากน้อยไปมาก",
                    "ลบข้อมูล",
                    "เพิ่มข้อมูล"
                ],
                ans: 0
            }
        },

        {
            id: 8,
            title: "CREATE TABLE",
            desc: "สร้างตาราง",

            content: {
                th: {
                    title: "CREATE TABLE",
                    desc: "สร้างตารางใหม่",

                    code:
`CREATE TABLE users(
   id INT,
   name VARCHAR(50)
);`
                }
            },

            quiz: {
                q: "CREATE TABLE ใช้ทำอะไร?",
                options: [
                    "สร้างตาราง",
                    "ลบตาราง",
                    "เพิ่มสี",
                    "สร้างเว็บ"
                ],
                ans: 0
            }
        },

        {
            id: 9,
            title: "Primary Key",
            desc: "คีย์หลัก",

            content: {
                th: {
                    title: "Primary Key",
                    desc: "ใช้ระบุข้อมูลไม่ให้ซ้ำ",

                    code:
`CREATE TABLE users(
   id INT PRIMARY KEY,
   name VARCHAR(50)
);`
                }
            },

            quiz: {
                q: "Primary Key ใช้ทำอะไร?",
                options: [
                    "ข้อมูลไม่ซ้ำ",
                    "สร้างสี",
                    "ลบเว็บ",
                    "สร้างเกม"
                ],
                ans: 0
            }
        },

        {
            id: 10,
            title: "Real Project",
            desc: "ระบบผู้ใช้",

            content: {
                th: {
                    title: "ระบบสมาชิก",
                    desc: "ตัวอย่างจริง",

                    code:
`SELECT username,email
FROM users
WHERE age >= 18
ORDER BY username ASC;`
                }
            },

            quiz: {
                q: "ASC คืออะไร?",
                options: [
                    "เรียงจากน้อยไปมาก",
                    "เรียงจากมากไปน้อย",
                    "ลบข้อมูล",
                    "เพิ่มข้อมูล"
                ],
                ans: 0
            }
        }

    ]
};