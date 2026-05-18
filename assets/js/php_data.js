// ==========================
// PHP COURSE
// assets/js/php_data.js
// ==========================

const courseData = {
    title: "PHP Backend",
    themeColor: "#777bb4",

    lessons: [

        {
            id: 1,
            title: "PHP คืออะไร",
            desc: "เริ่มต้น PHP",

            content: {
                th: {
                    title: "PHP คืออะไร",
                    desc: "PHP ใช้พัฒนา Backend",

                    code:
`<?php

echo "Hello World";

?>`
                }
            },

            quiz: {
                q: "PHP ใช้ทำอะไร?",
                options: [
                    "พัฒนา Backend",
                    "ตัดต่อวิดีโอ",
                    "สร้างเกม",
                    "วาดรูป"
                ],
                ans: 0
            }
        },

        {
            id: 2,
            title: "Variables",
            desc: "ตัวแปร",

            content: {
                th: {
                    title: "Variables",
                    desc: "ใช้ $ สร้างตัวแปร",

                    code:
`<?php

$name = "Zenith";

echo $name;

?>`
                }
            },

            quiz: {
                q: "PHP ใช้อะไรขึ้นต้นตัวแปร?",
                options: [
                    "$",
                    "#",
                    "@",
                    "%"
                ],
                ans: 0
            }
        },

        {
            id: 3,
            title: "Echo",
            desc: "แสดงผล",

            content: {
                th: {
                    title: "Echo",
                    desc: "ใช้ echo แสดงผล",

                    code:
`<?php

echo "Hello PHP";

?>`
                }
            },

            quiz: {
                q: "echo ใช้ทำอะไร?",
                options: [
                    "แสดงผล",
                    "ลบข้อมูล",
                    "สร้างรูป",
                    "สร้างสี"
                ],
                ans: 0
            }
        },

        {
            id: 4,
            title: "If Else",
            desc: "เงื่อนไข",

            content: {
                th: {
                    title: "If Else",
                    desc: "ตรวจสอบเงื่อนไข",

                    code:
`<?php

$age = 20;

if($age >= 18){
   echo "ผู้ใหญ่";
}else{
   echo "เด็ก";
}

?>`
                }
            },

            quiz: {
                q: "if ใช้ทำอะไร?",
                options: [
                    "ตรวจสอบเงื่อนไข",
                    "สร้างเว็บ",
                    "สร้างรูป",
                    "สร้างสี"
                ],
                ans: 0
            }
        },

        {
            id: 5,
            title: "Loops",
            desc: "ลูป",

            content: {
                th: {
                    title: "For Loop",
                    desc: "ทำงานซ้ำ",

                    code:
`<?php

for($i = 1; $i <= 5; $i++){
   echo $i;
}

?>`
                }
            },

            quiz: {
                q: "for ใช้ทำอะไร?",
                options: [
                    "วนลูป",
                    "สร้าง AI",
                    "สร้างสี",
                    "ลบข้อมูล"
                ],
                ans: 0
            }
        },

        {
            id: 6,
            title: "Functions",
            desc: "ฟังก์ชัน",

            content: {
                th: {
                    title: "Functions",
                    desc: "สร้างฟังก์ชัน",

                    code:
`<?php

function hello(){
   echo "Hello";
}

hello();

?>`
                }
            },

            quiz: {
                q: "function ใช้ทำอะไร?",
                options: [
                    "สร้างฟังก์ชัน",
                    "ลบเว็บ",
                    "สร้างเกม",
                    "สร้างรูป"
                ],
                ans: 0
            }
        },

        {
            id: 7,
            title: "Arrays",
            desc: "เก็บหลายข้อมูล",

            content: {
                th: {
                    title: "Arrays",
                    desc: "Array เก็บข้อมูลหลายค่า",

                    code:
`<?php

$fruits = ["Apple","Banana"];

echo $fruits[0];

?>`
                }
            },

            quiz: {
                q: "Array ใช้ทำอะไร?",
                options: [
                    "เก็บหลายข้อมูล",
                    "สร้างสี",
                    "สร้างเกม",
                    "สร้างเว็บ"
                ],
                ans: 0
            }
        },

        {
            id: 8,
            title: "Forms",
            desc: "รับข้อมูลจากผู้ใช้",

            content: {
                th: {
                    title: "Forms",
                    desc: "รับข้อมูลจาก input",

                    code:
`<form method="POST">
   <input name="username">
</form>

<?php

echo $_POST["username"];

?>`
                }
            },

            quiz: {
                q: "$_POST ใช้ทำอะไร?",
                options: [
                    "รับข้อมูลจาก form",
                    "สร้างรูป",
                    "ลบข้อมูล",
                    "สร้างสี"
                ],
                ans: 0
            }
        },

        {
            id: 9,
            title: "MySQL Connection",
            desc: "เชื่อมฐานข้อมูล",

            content: {
                th: {
                    title: "MySQL Connection",
                    desc: "เชื่อมต่อฐานข้อมูล",

                    code:
`<?php

$conn = mysqli_connect(
   "localhost",
   "root",
   "",
   "test"
);

?>`
                }
            },

            quiz: {
                q: "mysqli_connect ใช้ทำอะไร?",
                options: [
                    "เชื่อมฐานข้อมูล",
                    "สร้างเกม",
                    "สร้างสี",
                    "ลบเว็บ"
                ],
                ans: 0
            }
        },

        {
            id: 10,
            title: "Login System",
            desc: "ระบบล็อกอิน",

            content: {
                th: {
                    title: "ระบบล็อกอิน",
                    desc: "ตัวอย่างจริง",

                    code:
`<?php

$username = $_POST["username"];
$password = $_POST["password"];

if($username == "admin" &&
   $password == "1234"){

   echo "เข้าสู่ระบบสำเร็จ";

}else{

   echo "รหัสผิด";
}

?>`
                }
            },

            quiz: {
                q: "Backend ใช้ทำอะไร?",
                options: [
                    "ทำงานฝั่ง Server",
                    "วาดรูป",
                    "สร้างเพลง",
                    "ตัดต่อวิดีโอ"
                ],
                ans: 0
            }
        }

    ]
};