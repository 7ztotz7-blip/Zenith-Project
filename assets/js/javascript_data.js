// ==========================
// JAVASCRIPT COURSE
// assets/js/javascript_data.js
// ==========================

const courseData = {
    title: "JavaScript Programming",
    themeColor: "#f7df1e",

    lessons: [

        {
            id: 1,
            title: "JavaScript คืออะไร",
            desc: "เริ่มต้น JavaScript",

            content: {
                th: {
                    title: "JavaScript คืออะไร",
                    desc: "JavaScript ทำให้เว็บไซต์โต้ตอบได้",

                    code:
`console.log("Hello World")`
                }
            },

            quiz: {
                q: "JavaScript ใช้ทำอะไร?",
                options: [
                    "ทำเว็บโต้ตอบได้",
                    "ตัดต่อวิดีโอ",
                    "ออกแบบรูป",
                    "สร้างฐานข้อมูล"
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
                    desc: "ใช้ let และ const",

                    code:
`let name = "Zenith";
const age = 18;

console.log(name);`
                }
            },

            quiz: {
                q: "คำสั่งใดใช้สร้างตัวแปร?",
                options: [
                    "let",
                    "print",
                    "show",
                    "echo"
                ],
                ans: 0
            }
        },

        {
            id: 3,
            title: "Functions",
            desc: "ฟังก์ชัน",

            content: {
                th: {
                    title: "Functions",
                    desc: "ฟังก์ชันช่วยจัดระเบียบโค้ด",

                    code:
`function hello() {
   console.log("Hello");
}

hello();`
                }
            },

            quiz: {
                q: "function ใช้ทำอะไร?",
                options: [
                    "สร้างฟังก์ชัน",
                    "สร้างรูป",
                    "สร้างเว็บ",
                    "ลบข้อมูล"
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
`let age = 18;

if(age >= 18){
   console.log("ผู้ใหญ่");
}else{
   console.log("เด็ก");
}`
                }
            },

            quiz: {
                q: "if ใช้ทำอะไร?",
                options: [
                    "เงื่อนไข",
                    "รูปภาพ",
                    "สี",
                    "ฐานข้อมูล"
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
`for(let i = 0; i < 5; i++){
   console.log(i);
}`
                }
            },

            quiz: {
                q: "for ใช้ทำอะไร?",
                options: [
                    "วนลูป",
                    "ลบเว็บ",
                    "สร้างสี",
                    "สร้างฐานข้อมูล"
                ],
                ans: 0
            }
        },

        {
            id: 6,
            title: "Arrays",
            desc: "เก็บหลายข้อมูล",

            content: {
                th: {
                    title: "Arrays",
                    desc: "Array เก็บหลายค่า",

                    code:
`const fruits = [
   "Apple",
   "Banana",
   "Orange"
];

console.log(fruits[0]);`
                }
            },

            quiz: {
                q: "Array ใช้อะไร?",
                options: [
                    "เก็บหลายข้อมูล",
                    "สร้างเกม",
                    "สร้าง AI",
                    "สร้างสี"
                ],
                ans: 0
            }
        },

        {
            id: 7,
            title: "Objects",
            desc: "Object",

            content: {
                th: {
                    title: "Objects",
                    desc: "เก็บข้อมูลแบบ key:value",

                    code:
`const user = {
   name: "Zenith",
   age: 18
};

console.log(user.name);`
                }
            },

            quiz: {
                q: "Object เก็บข้อมูลแบบใด?",
                options: [
                    "key:value",
                    "HTML",
                    "Loop",
                    "String"
                ],
                ans: 0
            }
        },

        {
            id: 8,
            title: "DOM",
            desc: "จัดการหน้าเว็บ",

            content: {
                th: {
                    title: "DOM",
                    desc: "เปลี่ยนข้อมูลบนหน้าเว็บ",

                    code:
`document
.getElementById("title")
.innerText = "Hello";`
                }
            },

            quiz: {
                q: "DOM ใช้ทำอะไร?",
                options: [
                    "จัดการหน้าเว็บ",
                    "สร้างเกม",
                    "ต่อฐานข้อมูล",
                    "ตัดต่อวิดีโอ"
                ],
                ans: 0
            }
        },

        {
            id: 9,
            title: "Events",
            desc: "การคลิก",

            content: {
                th: {
                    title: "Events",
                    desc: "ตรวจจับการคลิก",

                    code:
`button.addEventListener(
   "click",
   function(){
      alert("Hello");
   }
);`
                }
            },

            quiz: {
                q: "click คืออะไร?",
                options: [
                    "Event",
                    "Array",
                    "Loop",
                    "Object"
                ],
                ans: 0
            }
        },

        {
            id: 10,
            title: "Real Project",
            desc: "โปรเจกต์จริง",

            content: {
                th: {
                    title: "เครื่องคิดเลข",
                    desc: "ตัวอย่างโปรเจกต์จริง",

                    code:
`function add(){
   let a = 5;
   let b = 10;

   console.log(a + b);
}

add();`
                }
            },

            quiz: {
                q: "console.log ใช้ทำอะไร?",
                options: [
                    "แสดงผล",
                    "ลบข้อมูล",
                    "สร้างรูป",
                    "สร้างสี"
                ],
                ans: 0
            }
        }

    ]
};