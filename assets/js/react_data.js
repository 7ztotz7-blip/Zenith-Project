// ==========================
// REACT COURSE
// assets/js/react_data.js
// ==========================

const courseData = {
    title: "React Frontend",
    themeColor: "#61dafb",

    lessons: [

        {
            id: 1,
            title: "React คืออะไร",
            desc: "เริ่มต้น React",

            content: {
                th: {
                    title: "React คืออะไร",
                    desc: "React ใช้สร้าง UI แบบ Component",

                    code:
`function App() {
   return <h1>Hello React</h1>;
}

export default App;`
                }
            },

            quiz: {
                q: "React ใช้ทำอะไร?",
                options: [
                    "สร้าง UI",
                    "ตัดต่อวิดีโอ",
                    "สร้างเกม",
                    "ทำฐานข้อมูล"
                ],
                ans: 0
            }
        },

        {
            id: 2,
            title: "JSX",
            desc: "HTML ใน JavaScript",

            content: {
                th: {
                    title: "JSX",
                    desc: "JSX คือการเขียน HTML ใน JS",

                    code:
`const element = (
   <h1>Hello</h1>
);`
                }
            },

            quiz: {
                q: "JSX คืออะไร?",
                options: [
                    "HTML ใน JS",
                    "ฐานข้อมูล",
                    "CSS",
                    "Loop"
                ],
                ans: 0
            }
        },

        {
            id: 3,
            title: "Components",
            desc: "แยกส่วน UI",

            content: {
                th: {
                    title: "Components",
                    desc: "Component คือส่วนประกอบ UI",

                    code:
`function Button() {
   return <button>Click</button>;
}`
                }
            },

            quiz: {
                q: "Component คืออะไร?",
                options: [
                    "ส่วนประกอบ UI",
                    "ฐานข้อมูล",
                    "Server",
                    "SQL"
                ],
                ans: 0
            }
        },

        {
            id: 4,
            title: "Props",
            desc: "ส่งข้อมูล",

            content: {
                th: {
                    title: "Props",
                    desc: "Props ใช้ส่งข้อมูล",

                    code:
`function User(props){
   return <h1>{props.name}</h1>;
}

<User name="Zenith" />`
                }
            },

            quiz: {
                q: "Props ใช้ทำอะไร?",
                options: [
                    "ส่งข้อมูล",
                    "ลบข้อมูล",
                    "สร้างเกม",
                    "สร้างสี"
                ],
                ans: 0
            }
        },

        {
            id: 5,
            title: "useState",
            desc: "จัดการ State",

            content: {
                th: {
                    title: "useState",
                    desc: "State ใช้เก็บข้อมูล",

                    code:
`import { useState } from "react";

function App(){

   const [count,setCount] =
   useState(0);

   return (
      <button>
         {count}
      </button>
   );
}`
                }
            },

            quiz: {
                q: "useState ใช้ทำอะไร?",
                options: [
                    "เก็บ State",
                    "สร้างฐานข้อมูล",
                    "สร้าง CSS",
                    "สร้าง Server"
                ],
                ans: 0
            }
        },

        {
            id: 6,
            title: "Events",
            desc: "การคลิก",

            content: {
                th: {
                    title: "Events",
                    desc: "ตรวจจับการคลิก",

                    code:
`<button
   onClick={() => alert("Hi")}
>
   Click
</button>`
                }
            },

            quiz: {
                q: "onClick คืออะไร?",
                options: [
                    "Event",
                    "Database",
                    "Loop",
                    "Array"
                ],
                ans: 0
            }
        },

        {
            id: 7,
            title: "useEffect",
            desc: "ทำงานอัตโนมัติ",

            content: {
                th: {
                    title: "useEffect",
                    desc: "ทำงานเมื่อ Component โหลด",

                    code:
`import { useEffect } from "react";

useEffect(() => {
   console.log("Loaded");
}, []);`
                }
            },

            quiz: {
                q: "useEffect ใช้ทำอะไร?",
                options: [
                    "ทำงานอัตโนมัติ",
                    "สร้างสี",
                    "ลบข้อมูล",
                    "สร้าง SQL"
                ],
                ans: 0
            }
        },

        {
            id: 8,
            title: "Lists",
            desc: "แสดงข้อมูลหลายรายการ",

            content: {
                th: {
                    title: "Lists",
                    desc: "ใช้ map แสดงหลายข้อมูล",

                    code:
`const users = ["A","B","C"];

users.map(user =>
   <p>{user}</p>
);`
                }
            },

            quiz: {
                q: "map ใช้ทำอะไร?",
                options: [
                    "วนข้อมูล",
                    "ลบเว็บ",
                    "สร้าง Server",
                    "สร้างเกม"
                ],
                ans: 0
            }
        },

        {
            id: 9,
            title: "API Fetch",
            desc: "ดึงข้อมูล API",

            content: {
                th: {
                    title: "Fetch API",
                    desc: "ดึงข้อมูลจาก Server",

                    code:
`fetch("https://api.com")
.then(res => res.json())
.then(data => {
   console.log(data);
});`
                }
            },

            quiz: {
                q: "fetch ใช้ทำอะไร?",
                options: [
                    "ดึงข้อมูล API",
                    "สร้างสี",
                    "ลบเว็บ",
                    "สร้าง SQL"
                ],
                ans: 0
            }
        },

        {
            id: 10,
            title: "Real Project",
            desc: "Todo App",

            content: {
                th: {
                    title: "Todo App",
                    desc: "ตัวอย่างโปรเจกต์จริง",

                    code:
`function App(){

   return (
      <div>
         <h1>Todo App</h1>

         <input
            placeholder="เพิ่มงาน"
         />

         <button>
            Add
         </button>
      </div>
   );
}`
                }
            },

            quiz: {
                q: "React เหมาะกับอะไร?",
                options: [
                    "Frontend UI",
                    "ตัดต่อวิดีโอ",
                    "สร้างเพลง",
                    "วาดรูป"
                ],
                ans: 0
            }
        }

    ]
};