const courseData = {
    title: "CSS Mastery",
    themeColor: "#38bdf8",

    lessons: [

        // =========================
        // LESSON 1
        // =========================

        {
            id: 1,

            title: "CSS Introduction",

            desc: "เรียนรู้พื้นฐานของ CSS และการตกแต่งเว็บไซต์",

            content: {
                th: {
                    title: "CSS คืออะไร",

                    desc: "CSS ใช้สำหรับตกแต่งเว็บไซต์ เช่น สี ขนาด ตัวอักษร ระยะห่าง และ Layout",

                    code: `body {
    background: black;
    color: white;
}`
                }
            },

            quiz: {
                q: "CSS ใช้ทำอะไร?",

                options: [
                    "ตกแต่งเว็บไซต์",
                    "สร้างฐานข้อมูล",
                    "เขียน AI"
                ],

                ans: 0
            }
        },

        // =========================
        // LESSON 2
        // =========================

        {
            id: 2,

            title: "Colors",

            desc: "การเปลี่ยนสีข้อความและพื้นหลัง",

            content: {
                th: {
                    title: "Colors",

                    desc: "CSS สามารถกำหนดสีได้หลายรูปแบบ",

                    code: `h1 {
    color: red;
}

body {
    background: #111;
}`
                }
            },

            quiz: {
                q: "ใช้ property อะไรเปลี่ยนสีข้อความ?",

                options: [
                    "font-size",
                    "color",
                    "background"
                ],

                ans: 1
            }
        },

        // =========================
        // LESSON 3
        // =========================

        {
            id: 3,

            title: "Font Size",

            desc: "ปรับขนาดข้อความ",

            content: {
                th: {
                    title: "font-size",

                    desc: "ใช้กำหนดขนาดตัวอักษร",

                    code: `p {
    font-size: 24px;
}`
                }
            },

            quiz: {
                q: "font-size ใช้ทำอะไร?",

                options: [
                    "เปลี่ยนสี",
                    "เปลี่ยนขนาดตัวอักษร",
                    "สร้างรูปภาพ"
                ],

                ans: 1
            }
        },

        // =========================
        // LESSON 4
        // =========================

        {
            id: 4,

            title: "Margin & Padding",

            desc: "ระยะห่างด้านนอกและด้านใน",

            content: {
                th: {
                    title: "Margin และ Padding",

                    desc: "Margin คือระยะห่างด้านนอก ส่วน Padding คือด้านใน",

                    code: `.box {
    margin: 20px;
    padding: 15px;
}`
                }
            },

            quiz: {
                q: "Padding คืออะไร?",

                options: [
                    "ระยะห่างด้านใน",
                    "ระยะห่างด้านนอก",
                    "สีพื้นหลัง"
                ],

                ans: 0
            }
        },

        // =========================
        // LESSON 5
        // =========================

        {
            id: 5,

            title: "Border Radius",

            desc: "ทำมุมโค้ง",

            content: {
                th: {
                    title: "border-radius",

                    desc: "ใช้ทำให้กล่องมีมุมโค้ง",

                    code: `.card {
    border-radius: 20px;
}`
                }
            },

            quiz: {
                q: "border-radius ใช้ทำอะไร?",

                options: [
                    "ทำเงา",
                    "ทำมุมโค้ง",
                    "เปลี่ยนสี"
                ],

                ans: 1
            }
        },

        // =========================
        // LESSON 6
        // =========================

        {
            id: 6,

            title: "Flexbox",

            desc: "จัดตำแหน่งแบบยืดหยุ่น",

            content: {
                th: {
                    title: "Flexbox",

                    desc: "Flexbox ใช้จัด Layout ได้ง่ายมาก",

                    code: `.container {
    display: flex;
    justify-content: center;
    align-items: center;
}`
                }
            },

            quiz: {
                q: "display:flex ใช้ทำอะไร?",

                options: [
                    "จัด Layout",
                    "สร้างฐานข้อมูล",
                    "เขียน Backend"
                ],

                ans: 0
            }
        },

        // =========================
        // LESSON 7
        // =========================

        {
            id: 7,

            title: "CSS Grid",

            desc: "ระบบ Grid Layout",

            content: {
                th: {
                    title: "Grid Layout",

                    desc: "Grid ใช้แบ่ง Layout เป็นแถวและคอลัมน์",

                    code: `.grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
}`
                }
            },

            quiz: {
                q: "Grid ใช้ทำอะไร?",

                options: [
                    "สร้างเสียง",
                    "จัด Layout",
                    "สร้าง API"
                ],

                ans: 1
            }
        },

        // =========================
        // LESSON 8
        // =========================

        {
            id: 8,

            title: "Hover Effect",

            desc: "เอฟเฟกต์เมื่อเอาเมาส์ชี้",

            content: {
                th: {
                    title: ":hover",

                    desc: "Hover ใช้สร้าง Interaction",

                    code: `button:hover {
    background: purple;
}`
                }
            },

            quiz: {
                q: ":hover ทำงานเมื่อใด?",

                options: [
                    "ตอนโหลดเว็บ",
                    "ตอนคลิก",
                    "ตอนเมาส์ชี้"
                ],

                ans: 2
            }
        },

        // =========================
        // LESSON 9
        // =========================

        {
            id: 9,

            title: "Animation",

            desc: "การสร้าง Animation",

            content: {
                th: {
                    title: "CSS Animation",

                    desc: "CSS สามารถสร้าง Animation ได้",

                    code: `@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}`
                }
            },

            quiz: {
                q: "@keyframes ใช้ทำอะไร?",

                options: [
                    "สร้าง Animation",
                    "สร้าง Database",
                    "เขียน PHP"
                ],

                ans: 0
            }
        },

        // =========================
        // LESSON 10
        // =========================

        {
            id: 10,

            title: "Responsive Design",

            desc: "ทำเว็บให้รองรับมือถือ",

            content: {
                th: {
                    title: "Responsive",

                    desc: "Responsive ทำให้เว็บใช้งานได้ทุกขนาดหน้าจอ",

                    code: `@media (max-width: 768px) {
    body {
        font-size: 14px;
    }
}`
                }
            },

            quiz: {
                q: "@media ใช้ทำอะไร?",

                options: [
                    "Responsive Design",
                    "สร้างเกม",
                    "เขียน SQL"
                ],

                ans: 0
            }
        }

    ]
};