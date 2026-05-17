// assets/js/php_data.js
const courseData = {
    id: "php",
    title: "Server-Side Web Development with PHP",
    description: "พัฒนาแอปพลิเคชันหลังบ้านและเชื่อมต่อระบบฐานข้อมูลแบบไดนามิก",
    lessons: Array.from({ length: 12 }, (_, i) => ({
        id: i + 1,
        content: {
            th: {
                title: `บทที่ ${i + 1}: ${getPHPTitleTH(i + 1)}`,
                desc: `เรียนรู้การทำงานฝั่งเซิร์ฟเวอร์ด้วยภาษา PHP ในหัวข้อ ${getPHPTitleTH(i + 1)}...`,
                code: `<?php\n// ตัวอย่างโค้ดบทที่ ${i + 1}\n$platform = "Zenith";\necho "Welcome to " . $platform;\n?>`
            },
            en: {
                title: `Chapter ${i + 1}: ${getPHPTitleEN(i + 1)}`,
                desc: `Building dynamic backend systems using PHP: ${getPHPTitleEN(i + 1)}.`,
                code: `<?php echo "Hello from Zenith Server"; ?>`
            }
        },
        quiz: {
            q: `คำถามประจำบทที่ ${i + 1}: ข้อใดระบุการทำงานหรือโครงสร้างโค้ด PHP ในเรื่อง ${getPHPTitleTH(i + 1)} ได้ถูกต้อง?`,
            options: ["ตัวเลือก A (ผิด)", "ตัวเลือก B (ผิด)", "ตัวเลือก C (คำตอบที่ถูก)", "ตัวเลือก D (ผิด)"],
            ans: 2
        }
    }))
};

function getPHPTitleTH(id) {
    const titles = ["แนะนำสถาปัตยกรรม Client-Server และพื้นฐาน PHP", "การประกาศตัวแปรและการจัดการสตริง (Variables & Strings)", "ตัวดำเนินการและการคำนวณฝั่ง Server", "โครงสร้างควบคุมเงื่อนไข (If, Else, Elseif)", "การใช้งาน Loops ในการจัดการชุดข้อมูลบน Server", "การสร้างฟังก์ชันและขอบเขตของตัวแปร (Functions)", "อาเรย์และการจัดเก็บข้อมูลแบบกลุ่ม (Arrays & Associative Arrays)", "การรับส่งข้อมูลผ่านฟอร์มด้วยวิธี $_GET และ $_POST", "การบริหารจัดการไฟล์ระบบบน Server (File Handling)", "การใช้งาน Sessions และ Cookies สำหรับระบบ Login", "การใช้ PHP เชื่อมต่อฐานข้อมูล MySQL/SQLite (PDO)", "การทำระบบตรวจสอบความปลอดภัยเพื่อป้องกัน SQL Injection"];
    return titles[id - 1];
}
function getPHPTitleEN(id) {
    const titles = ["Client-Server & PHP Basics", "Variables & Strings", "Server Operators", "Conditional Statements", "Loops in PHP", "Custom Functions", "PHP Arrays", "Form Handling ($_GET & $_POST)", "File System Operations", "Sessions & Cookies Management", "Database Connections (PDO)", "Backend Security Basics"];
    return titles[id - 1];
}