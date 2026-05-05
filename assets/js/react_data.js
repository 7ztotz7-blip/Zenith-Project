const courseData = {
    title: "React Master",
    themeColor: "#3b82f6",
    lessons: [
        { id: 1, title: "01 Components & Props", desc: "พื้นฐานการสร้าง UI Component" },
        { id: 2, title: "02 State & useState", desc: "การจัดการข้อมูลภายใน Component" },
        { id: 3, title: "03 useEffect & Lifecycle", desc: "การทำงานของ Component ตามช่วงเวลา" },
        { id: 4, title: "04 Event Handling", desc: "การจัดการ Event ใน React" },
        { id: 5, title: "05 Lists & Keys", desc: "การแสดงผลรายการข้อมูลใน React" }
    ]
};

const lessonData = [
    {
        id: 1,
        content: {
            th: {
                title: "Components & Props",
                desc: "Component คือชิ้นส่วน UI ที่นำกลับมาใช้ซ้ำได้ เหมือน Lego ที่นำมาประกอบกัน Props คือข้อมูลที่ส่งเข้าไปใน Component",
                code: `// Functional Component\nfunction CourseCard({ title, level, color }) {\n    return (\n        <div style={{ borderColor: color }} className="card">\n            <span className="badge">{level}</span>\n            <h2>{title}</h2>\n        </div>\n    );\n}\n\n// ใช้งาน Component หลายครั้ง\nfunction App() {\n    return (\n        <div>\n            <CourseCard title="Python" level="Beginner" color="#2dd4bf" />\n            <CourseCard title="React" level="Advanced" color="#3b82f6" />\n        </div>\n    );\n}`,
                quiz: {
                    q: "Props ใน React มีลักษณะอย่างไร?",
                    options: ["แก้ไขค่าได้จากภายใน Component", "ส่งจาก Parent ไป Child และแก้ไขไม่ได้จาก Child", "เก็บไว้ใน State เสมอ", "ใช้ได้แค่ใน Class Component"],
                    ans: 1
                }
            },
            en: {
                title: "Components & Props",
                desc: "Components are reusable UI pieces like Lego blocks. Props are data passed into a Component from its parent.",
                code: `// Functional Component\nfunction CourseCard({ title, level, color }) {\n    return (\n        <div style={{ borderColor: color }} className="card">\n            <span className="badge">{level}</span>\n            <h2>{title}</h2>\n        </div>\n    );\n}\n\n// Reuse Component multiple times\nfunction App() {\n    return (\n        <div>\n            <CourseCard title="Python" level="Beginner" color="#2dd4bf" />\n            <CourseCard title="React" level="Advanced" color="#3b82f6" />\n        </div>\n    );\n}`,
                quiz: {
                    q: "What is true about Props in React?",
                    options: ["They can be modified inside the Component", "Passed from Parent to Child and read-only in Child", "Always stored in State", "Only work in Class Components"],
                    ans: 1
                }
            }
        }
    },
    {
        id: 2,
        content: {
            th: {
                title: "State & useState",
                desc: "State คือข้อมูลภายใน Component ที่เปลี่ยนแปลงได้ เมื่อ State เปลี่ยน React จะ re-render UI อัตโนมัติ",
                code: `import { useState } from 'react';\n\nfunction XPCounter() {\n    const [xp, setXp] = useState(0);\n    const [level, setLevel] = useState(1);\n\n    const gainXP = () => {\n        const newXp = xp + 50;\n        setXp(newXp);\n        \n        // เลเวลอัพทุก 200 XP\n        if (newXp >= level * 200) {\n            setLevel(level + 1);\n        }\n    };\n\n    return (\n        <div>\n            <p>Level {level} — {xp} XP</p>\n            <button onClick={gainXP}>+50 XP</button>\n        </div>\n    );\n}`,
                quiz: {
                    q: "เมื่อ State เปลี่ยนแปลง React จะทำอะไร?",
                    options: ["โหลดหน้าเว็บใหม่ทั้งหมด", "Re-render เฉพาะ Component ที่ใช้ State นั้น", "บันทึกลง LocalStorage อัตโนมัติ", "ส่ง State ไปหา Parent"],
                    ans: 1
                }
            },
            en: {
                title: "State & useState",
                desc: "State is mutable data inside a Component. When State changes, React automatically re-renders the UI.",
                code: `import { useState } from 'react';\n\nfunction XPCounter() {\n    const [xp, setXp] = useState(0);\n    const [level, setLevel] = useState(1);\n\n    const gainXP = () => {\n        const newXp = xp + 50;\n        setXp(newXp);\n        \n        // Level up every 200 XP\n        if (newXp >= level * 200) {\n            setLevel(level + 1);\n        }\n    };\n\n    return (\n        <div>\n            <p>Level {level} — {xp} XP</p>\n            <button onClick={gainXP}>+50 XP</button>\n        </div>\n    );\n}`,
                quiz: {
                    q: "What happens when State changes in React?",
                    options: ["The whole page reloads", "Only the Component using that State re-renders", "State is saved to LocalStorage automatically", "State is sent to Parent"],
                    ans: 1
                }
            }
        }
    },
    {
        id: 3,
        content: {
            th: {
                title: "useEffect & Lifecycle",
                desc: "useEffect ใช้ทำงาน Side Effect เช่น ดึงข้อมูล API ตั้ง Timer หรือ subscribe event ทำงานหลังจาก Component render",
                code: `import { useState, useEffect } from 'react';\n\nfunction Dashboard() {\n    const [user, setUser] = useState(null);\n    const [loading, setLoading] = useState(true);\n\n    // รันครั้งเดียวตอน mount\n    useEffect(() => {\n        async function loadUser() {\n            const res = await fetch('/api/user');\n            const data = await res.json();\n            setUser(data);\n            setLoading(false);\n        }\n        loadUser();\n    }, []); // [] = dependency array ว่าง = รันครั้งเดียว\n\n    if (loading) return <p>Loading...</p>;\n    return <h1>Welcome, {user.name}!</h1>;\n}`,
                quiz: {
                    q: "useEffect ที่มี dependency array เป็น [] จะรันเมื่อไร?",
                    options: ["ทุกครั้งที่ re-render", "แค่ครั้งเดียวตอน Component mount", "ทุกวินาที", "เมื่อ Props เปลี่ยน"],
                    ans: 1
                }
            },
            en: {
                title: "useEffect & Lifecycle",
                desc: "useEffect handles side effects like fetching APIs, setting timers, or subscribing to events. It runs after rendering.",
                code: `import { useState, useEffect } from 'react';\n\nfunction Dashboard() {\n    const [user, setUser] = useState(null);\n    const [loading, setLoading] = useState(true);\n\n    // Run once on mount\n    useEffect(() => {\n        async function loadUser() {\n            const res = await fetch('/api/user');\n            const data = await res.json();\n            setUser(data);\n            setLoading(false);\n        }\n        loadUser();\n    }, []); // [] = empty dependency = run once\n\n    if (loading) return <p>Loading...</p>;\n    return <h1>Welcome, {user.name}!</h1>;\n}`,
                quiz: {
                    q: "When does useEffect with [] dependency array run?",
                    options: ["Every re-render", "Only once when Component mounts", "Every second", "When Props change"],
                    ans: 1
                }
            }
        }
    },
    {
        id: 4,
        content: {
            th: {
                title: "Event Handling",
                desc: "React จัดการ Event ด้วย camelCase เช่น onClick, onChange, onSubmit และรับ SyntheticEvent แทน DOM Event ปกติ",
                code: `import { useState } from 'react';\n\nfunction SearchBar() {\n    const [query, setQuery] = useState('');\n    const [results, setResults] = useState([]);\n\n    // onChange - รับค่าจาก input\n    const handleChange = (e) => {\n        setQuery(e.target.value);\n    };\n\n    // onSubmit - ป้องกัน page reload\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        console.log('ค้นหา:', query);\n    };\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input value={query} onChange={handleChange} />\n            <button type="submit">ค้นหา</button>\n        </form>\n    );\n}`,
                quiz: {
                    q: "ต้องเรียก method อะไรเพื่อป้องกันหน้าเว็บ reload เมื่อ submit form?",
                    options: ["e.stopPropagation()", "e.preventDefault()", "e.cancelEvent()", "e.blockSubmit()"],
                    ans: 1
                }
            },
            en: {
                title: "Event Handling",
                desc: "React handles events with camelCase like onClick, onChange, onSubmit, and receives SyntheticEvent instead of DOM events.",
                code: `import { useState } from 'react';\n\nfunction SearchBar() {\n    const [query, setQuery] = useState('');\n\n    // onChange - get input value\n    const handleChange = (e) => {\n        setQuery(e.target.value);\n    };\n\n    // onSubmit - prevent page reload\n    const handleSubmit = (e) => {\n        e.preventDefault();\n        console.log('Search:', query);\n    };\n\n    return (\n        <form onSubmit={handleSubmit}>\n            <input value={query} onChange={handleChange} />\n            <button type="submit">Search</button>\n        </form>\n    );\n}`,
                quiz: {
                    q: "Which method prevents a page reload when submitting a form?",
                    options: ["e.stopPropagation()", "e.preventDefault()", "e.cancelEvent()", "e.blockSubmit()"],
                    ans: 1
                }
            }
        }
    },
    {
        id: 5,
        content: {
            th: {
                title: "Lists & Keys",
                desc: "React ใช้ .map() ในการแสดงรายการข้อมูล ทุก element ต้องมี key prop ที่ไม่ซ้ำกันเพื่อให้ React track การเปลี่ยนแปลงได้",
                code: `function CourseList() {\n    const courses = [\n        { id: 1, name: "Python", level: "Beginner", color: "#2dd4bf" },\n        { id: 2, name: "JavaScript", level: "Intermediate", color: "#eab308" },\n        { id: 3, name: "React", level: "Advanced", color: "#3b82f6" },\n    ];\n\n    return (\n        <ul>\n            {courses.map((course) => (\n                // key ต้องไม่ซ้ำกัน ใช้ id ดีที่สุด\n                <li key={course.id} style={{ color: course.color }}>\n                    {course.name} — {course.level}\n                </li>\n            ))}\n        </ul>\n    );\n}`,
                quiz: {
                    q: "ทำไมต้องใส่ key prop ใน List ของ React?",
                    options: ["เพื่อกำหนดสีของ element", "เพื่อให้ React ระบุและ track การเปลี่ยนแปลงของแต่ละ element", "เพื่อเรียงลำดับ element", "เพื่อซ่อน element บางตัว"],
                    ans: 1
                }
            },
            en: {
                title: "Lists & Keys",
                desc: "React uses .map() to render lists. Every element must have a unique key prop so React can track changes efficiently.",
                code: `function CourseList() {\n    const courses = [\n        { id: 1, name: "Python", level: "Beginner", color: "#2dd4bf" },\n        { id: 2, name: "JavaScript", level: "Intermediate", color: "#eab308" },\n        { id: 3, name: "React", level: "Advanced", color: "#3b82f6" },\n    ];\n\n    return (\n        <ul>\n            {courses.map((course) => (\n                // key must be unique — use id\n                <li key={course.id} style={{ color: course.color }}>\n                    {course.name} — {course.level}\n                </li>\n            ))}\n        </ul>\n    );\n}`,
                quiz: {
                    q: "Why is the key prop required in React Lists?",
                    options: ["To set the element color", "So React can identify and track changes to each element", "To sort elements", "To hide certain elements"],
                    ans: 1
                }
            }
        }
    }
];