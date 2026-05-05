const courseData = {
    id: "sql",
    title: "SQL Data Management",
    themeColor: "#00758f",
    lessons: [
        { id: 1, title: "Intro to Databases", desc: "ฐานข้อมูลคืออะไร?" },
        { id: 2, title: "SELECT Statement", desc: "การดึงข้อมูลออกมาใช้งาน" }
    ]
};

const lessonData = [
    {
        id: 1,
        content: {
            th: {
                title: "พื้นฐานฐานข้อมูล",
                desc: "Database คือการเก็บรวบรวมข้อมูลอย่างเป็นระบบ",
                code: "CREATE DATABASE zenith_db;",
                quiz: {
                    q: "คำสั่งใดใช้สร้างฐานข้อมูลใหม่?",
                    options: ["MAKE", "NEW", "CREATE DATABASE", "ADD"],
                    ans: 2 // คือข้อ C
                }
            }
        }
    }
];