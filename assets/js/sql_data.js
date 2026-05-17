// assets/js/sql_data.js
const courseData = {
    id: "sql",
    title: "SQL & Relational Database Management",
    description: "การออกแบบฐานข้อมูลและภาษาสอบถามข้อมูลเพื่อการวิเคราะห์ธุรกิจ",
    lessons: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        content: {
            th: {
                title: `บทที่ ${i + 1}: ${getSQLTitleTH(i + 1)}`,
                desc: `ศึกษาการจัดการระบบฐานข้อมูลเชิงสัมพันธ์ในหัวข้อ ${getSQLTitleTH(i + 1)}...`,
                code: `-- ตัวอย่างคำสั่ง SQL บทที่ ${i + 1}\nSELECT user_id, username FROM zenith_users\nWHERE level >= 2;`
            },
            en: {
                title: `Chapter ${i + 1}: ${getSQLTitleEN(i + 1)}`,
                desc: `Mastering relational databases with ${getSQLTitleEN(i + 1)}.`,
                code: `SELECT * FROM courses WHERE id = 'sql';`
            }
        },
        quiz: {
            q: `คำถามประจำบทที่ ${i + 1}: คำสั่ง Query ข้อใดในเรื่อง ${getSQLTitleTH(i + 1)} ที่เขียนได้ถูกต้องตามหลักไวยากรณ์?`,
            options: ["ตัวเลือก A (คำตอบที่ถูก)", "ตัวเลือก B (ผิด)", "ตัวเลือก C (ผิด)", "ตัวเลือก D (ผิด)"],
            ans: 0
        }
    }))
};

function getSQLTitleTH(id) {
    const titles = ["แนะนำระบบฐานข้อมูล และประเภทของ Database", "การออกแบบตารางและการทำ Normalization เบื้องต้น", "คำสั่งสร้างตารางและกำหนดสิทธิ์ (CREATE TABLE, Data Types)", "การเพิ่มข้อมูลเข้าสู่ระบบ (INSERT INTO)", "การดึงข้อมูลพื้นฐาน (SELECT, WHERE, ORDER BY)", "การกรองข้อมูลขั้นสูง (LIKE, IN, BETWEEN, AND/OR)", "ฟังก์ชันการคำนวณและสรุปผล (COUNT, SUM, AVG, GROUP BY)", "การเชื่อมโยงตารางข้อมูล (INNER JOIN, LEFT JOIN)", "การแก้ไขและปรับปรุงข้อมูล (UPDATE & SET)", "การลบข้อมูลและตารางอย่างปลอดภัย (DELETE & DROP)", "การเขียน Query ซ้อน Query (Subqueries)", "สถาปัตยกรรมฐานข้อมูลสำหรับแอปพลิเคชันธุรกิจ"];
    return titles[id - 1];
}
function getSQLTitleEN(id) {
    const titles = ["Introduction to Databases", "Database Design & Normalization", "DDL: CREATE TABLE", "DML: INSERT INTO", "DQL: Basic SELECT", "Advanced Filtering", "Aggregate Functions", "Table Joins", "UPDATE Statement", "DELETE & DROP", "Subqueries", "Database Architecture"];
    return titles[id - 1];
}