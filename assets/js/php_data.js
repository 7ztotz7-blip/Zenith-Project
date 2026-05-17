const courseData = {
    title: "PHP Backend Developer",
    themeColor: "#777bb4", // สีม่วงสว่างสไตล์ PHP
    lessons: [
        {
            id: 1,
            content: {
                th: { title: "🐘 1. การทำงานของภาษา PHP", desc: "ภาษาฝั่ง Server-side script ที่ประมวลผลบนเซิร์ฟเวอร์แล้วส่งผลลัพธ์กลับมาเป็น HTML", code: "<?php\necho 'Hello PHP';\n?>", quiz: { q: "แท็กเปิดโค้ดในภาษา PHP ข้อใดถูกต้อง?", options: ["<script>", "<?php", "<%", "<?php>"], ans: 1 } },
                en: { title: "🐘 1. Intro to PHP", desc: "A server-side scripting language processing scripts on server before returning HTML.", code: "<?php\necho 'Hello PHP';\n?>", quiz: { q: "What is the correct opening tag for PHP code blocks?", options: ["<script>", "<?php", "<%", "<?php>"], ans: 1 } }
            }
        },
        {
            id: 2,
            content: {
                th: { title: "📦 2. การสร้างตัวแปรใน PHP", desc: "การประกาศตัวแปรในภาษา PHP จะต้องมีเครื่องหมาย Dollar Sign ($) นำหน้าเสมอ", code: "$username = 'Chanwit';\necho $username;", quiz: { q: "สัญลักษณ์ใดระบุว่าเป็นตัวแปรในภาษา PHP?", options: ["#", "@", "$", "&"], ans: 2 } },
                en: { title: "📦 2. Variables in PHP", desc: "Variables in PHP must always start with a dollar sign symbol ($).", code: "$username = 'Chanwit';\necho $username;", quiz: { q: "Which character identifies a variable in PHP?", options: ["#", "@", "$", "&"], ans: 2 } }
            }
        },
        {
            id: 3,
            content: {
                th: { title: "🔗 3. การต่อคำด้วยเครื่องหมายจุด", desc: "ใน PHP เราใช้เครื่องหมายจุด (.) ในการรวมสายอักขระข้อความเข้าหากัน ต่างจากภาษาอื่นที่ใช้เครื่องหมายบวก", code: "$firstName = 'Zen';\n$lastName = 'ith';\necho $firstName . $lastName;", quiz: { q: "ผลลัพธ์ของสคริปต์การรวมคำข้างต้นคือข้อใด?", options: ["Zen+ith", "Zen ith", "Zenith", "เกิด Error"], ans: 2 } },
                en: { title: "🔗 3. String Concatenation", desc: "In PHP, the dot operator (.) is used to join two string values together.", code: "$firstName = 'Zen';\n$lastName = 'ith';\necho $firstName . $lastName;", quiz: { q: "What is the correct concatenated output?", options: ["Zen+ith", "Zen ith", "Zenith", "Error"], ans: 2 } }
            }
        },
        {
            id: 4,
            content: {
                th: { title: "📬 4. การส่งค่าผ่านวิธี $_POST", desc: "ตัวแปร Global ที่ใช้รับข้อมูลฟอร์มที่ส่งมาแบบซ่อนค่า เพื่อความปลอดภัย เช่น รหัสผ่าน", code: "$pwd = $_POST['password'];\necho $pwd;", quiz: { q: "การส่งข้อมูลแบบฟอร์มผ่าน $_POST จะแสดงข้อมูลบน URL หรือไม่?", options: ["แสดงผลชัดเจน", "ไม่แสดงผลบน URL", "แล้วแต่บราวเซอร์", "แสดงเป็นรหัสผ่านที่ถอดแล้ว"], ans: 1 } },
                en: { title: "📬 4. Handling $_POST Methods", desc: "Global array variable used to collect form data after submitting via post methods.", code: "$pwd = $_POST['password'];\necho $pwd;", quiz: { q: "Does submitting data via $_POST exhibit form data inside the browser URL?", options: ["Yes, explicitly", "No, it hides data from URL", "Browser dependent", "Decrypts on URL"], ans: 1 } }
            }
        },
        {
            id: 5,
            content: {
                th: { title: "📥 5. การเปิดเชื่อมต่อไฟล์ (Include)", desc: "คำสั่งสำหรับดึงโค้ดจากไฟล์อื่นมาฝังรวมไว้ ช่วยลดการเขียนโค้ดซ้ำซ้อน เช่น เมนูด้านบนหน้าเว็บ", code: "include 'navbar.php';\necho 'Home Page';", quiz: { q: "ข้อใดคือข้อดีของการใช้คำสั่ง include ในระบบเว็บแอปพลิเคชัน?", options: ["ทำให้เว็บโหลดช้าลง", "แชร์โค้ดชุดเดียวกันไปหน้าอื่นได้ง่าย", "ช่วยกรองไวรัส", "เพิ่มขนาดไฟล์"], ans: 1 } },
                en: { title: "📥 5. File Inclusion Mechanism", desc: "The include statement takes all the text/code in a specified file and copies it.", code: "include 'navbar.php';\necho 'Home Page';", quiz: { q: "What is the prime benefit of utilizing include functions?", options: ["Slows pages down", "Allows code reuse across files easily", "Filters script threats", "Bloats overall code sizes"], ans: 1 } }
            }
        }
    ]
};