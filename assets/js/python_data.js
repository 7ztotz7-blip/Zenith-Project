const courseData = {
    id: "python", // เพิ่ม ID เพื่อให้ main.js นำไปใช้ทำ Progress Key
    title: "Python Automation",
    themeColor: "#2dd4bf",
    lessons: [
        { id: 1, title: "01 Variables", desc: "การสร้างตัวแปร" },
        { id: 2, title: "02 Print", desc: "การแสดงผล" }
    ]
};

const lessonData = [
    {
        id: 1,
        content: {
            th: {
                title: "การสร้างตัวแปร",
                desc: "ตัวแปรคือกล่องสำหรับเก็บข้อมูล",
                code: "name = \"Zenith\"\nprint(name)",
                quiz: {
                    q: "สัญลักษณ์ใดใช้กำหนดค่าตัวแปร?",
                    options: ["==", "=", "=>", ":="],
                    ans: 1 // คือข้อ B. ซึ่งเป็นเครื่องหมาย =
                }
            }
        }
    }
];