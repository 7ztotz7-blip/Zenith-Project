// ==========================
// HTML COURSE
// assets/js/html_data.js
// ==========================

const courseData = {
    title: "HTML & CSS",
    themeColor: "#e34f26",

    lessons: [

        {
            id: 1,
            title: "HTML คืออะไร",
            desc: "เริ่มต้นสร้างเว็บไซต์",

            content: {
                th: {
                    title: "HTML คืออะไร",
                    desc: "HTML ใช้สร้างโครงสร้างเว็บไซต์",

                    code:
`<h1>Hello World</h1>`
                }
            },

            quiz: {
                q: "HTML ใช้ทำอะไร?",
                options: [
                    "สร้างโครงสร้างเว็บ",
                    "ตัดต่อวิดีโอ",
                    "สร้างเกม",
                    "ทำ AI"
                ],
                ans: 0
            }
        },

        {
            id: 2,
            title: "Heading",
            desc: "หัวข้อเว็บไซต์",

            content: {
                th: {
                    title: "Heading",
                    desc: "ใช้ h1-h6",

                    code:
`<h1>หัวข้อใหญ่</h1>
<h2>หัวข้อรอง</h2>`
                }
            },

            quiz: {
                q: "แท็กใดเป็นหัวข้อใหญ่สุด?",
                options: ["h6", "h1", "title", "p"],
                ans: 1
            }
        },

        {
            id: 3,
            title: "Paragraph",
            desc: "ข้อความ",

            content: {
                th: {
                    title: "Paragraph",
                    desc: "ใช้ p สำหรับข้อความ",

                    code:
`<p>Hello Zenith</p>`
                }
            },

            quiz: {
                q: "แท็กใดใช้แสดงข้อความ?",
                options: ["div", "img", "p", "a"],
                ans: 2
            }
        },

        {
            id: 4,
            title: "Links",
            desc: "ลิงก์เว็บไซต์",

            content: {
                th: {
                    title: "Links",
                    desc: "ใช้ a สร้างลิงก์",

                    code:
`<a href="https://google.com">
Google
</a>`
                }
            },

            quiz: {
                q: "href ใช้ทำอะไร?",
                options: [
                    "ใส่สี",
                    "ใส่ลิงก์",
                    "ใส่รูป",
                    "ใส่ฟอนต์"
                ],
                ans: 1
            }
        },

        {
            id: 5,
            title: "Images",
            desc: "แสดงรูปภาพ",

            content: {
                th: {
                    title: "Images",
                    desc: "ใช้ img แสดงรูป",

                    code:
`<img src="cat.png">`
                }
            },

            quiz: {
                q: "src ใช้ทำอะไร?",
                options: [
                    "ใส่รูปภาพ",
                    "ใส่สี",
                    "ใส่ข้อความ",
                    "ใส่ปุ่ม"
                ],
                ans: 0
            }
        },

        {
            id: 6,
            title: "Lists",
            desc: "รายการข้อมูล",

            content: {
                th: {
                    title: "Lists",
                    desc: "ul และ li ใช้สร้างรายการ",

                    code:
`<ul>
   <li>Apple</li>
   <li>Banana</li>
</ul>`
                }
            },

            quiz: {
                q: "li คืออะไร?",
                options: [
                    "รายการ",
                    "รูปภาพ",
                    "หัวข้อ",
                    "ลิงก์"
                ],
                ans: 0
            }
        },

        {
            id: 7,
            title: "Buttons",
            desc: "ปุ่ม",

            content: {
                th: {
                    title: "Buttons",
                    desc: "สร้างปุ่มด้วย button",

                    code:
`<button>Click</button>`
                }
            },

            quiz: {
                q: "แท็กใดใช้สร้างปุ่ม?",
                options: [
                    "btn",
                    "button",
                    "click",
                    "press"
                ],
                ans: 1
            }
        },

        {
            id: 8,
            title: "Input",
            desc: "ช่องกรอกข้อมูล",

            content: {
                th: {
                    title: "Input",
                    desc: "ใช้ input รับข้อมูล",

                    code:
`<input type="text">`
                }
            },

            quiz: {
                q: "input ใช้ทำอะไร?",
                options: [
                    "รับข้อมูล",
                    "เล่นเกม",
                    "เปิดเว็บ",
                    "ใส่รูป"
                ],
                ans: 0
            }
        },

        {
            id: 9,
            title: "CSS Colors",
            desc: "เปลี่ยนสี",

            content: {
                th: {
                    title: "CSS Colors",
                    desc: "ใช้ style เปลี่ยนสี",

                    code:
`<h1 style="color:red">
Hello
</h1>`
                }
            },

            quiz: {
                q: "color ใช้อะไร?",
                options: [
                    "เปลี่ยนสี",
                    "เปลี่ยนรูป",
                    "เปลี่ยนฟอนต์",
                    "เปลี่ยนเว็บ"
                ],
                ans: 0
            }
        },

        {
            id: 10,
            title: "Flexbox",
            desc: "จัด Layout",

            content: {
                th: {
                    title: "Flexbox",
                    desc: "ใช้จัดตำแหน่ง",

                    code:
`.box{
   display:flex;
   justify-content:center;
}`
                }
            },

            quiz: {
                q: "display:flex ใช้ทำอะไร?",
                options: [
                    "จัด Layout",
                    "ลบข้อมูล",
                    "สร้างเกม",
                    "สร้าง AI"
                ],
                ans: 0
            }
        }

    ]
};