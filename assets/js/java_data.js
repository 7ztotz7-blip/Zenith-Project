const courseData = {
    title: "Java Programming",
    themeColor: "#f89820",

    lessons: [

        {
            id: 1,
            content: {
                th: {
                    title: "Java คืออะไร",
                    desc: "Java เป็นภาษา OOP ที่ทำงานข้ามแพลตฟอร์มผ่าน JVM (Java Virtual Machine) หลักการ Write Once, Run Anywhere ใช้พัฒนา Android, Web, Enterprise",
                    code:
`public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Zenith!");
    }
}`
                }
            },
            quiz: {
                q: "Java ทำงานข้ามแพลตฟอร์มได้ผ่านอะไร?",
                options: ["Compiler", "JVM", "Browser", "OS Kernel"],
                ans: 1
            }
        },

        {
            id: 2,
            content: {
                th: {
                    title: "Variables & Data Types",
                    desc: "Java มี primitive type: int, double, float, long, char, boolean, byte, short และ reference type เช่น String, Array, Object",
                    code:
`public class Main {
    public static void main(String[] args) {
        int age = 20;
        double price = 99.99;
        char grade = 'A';
        boolean isActive = true;
        String name = "Zenith";

        System.out.println(name + " age " + age);
        System.out.println("Active: " + isActive);
    }
}`
                }
            },
            quiz: {
                q: "String ใน Java เป็น type ชนิดใด?",
                options: ["Primitive type", "Reference type", "Keyword type", "Basic type"],
                ans: 1
            }
        },

        {
            id: 3,
            content: {
                th: {
                    title: "รับ Input จากผู้ใช้",
                    desc: "ใช้ Scanner class รับ input จากผู้ใช้ ต้อง import java.util.Scanner ก่อน และสร้าง object Scanner ด้วย System.in",
                    code:
`import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter your name: ");
        String name = sc.nextLine();

        System.out.print("Enter your age: ");
        int age = sc.nextInt();

        System.out.println("Hello " + name + "! Age: " + age);
        sc.close();
    }
}`
                }
            },
            quiz: {
                q: "Class ใดใช้รับ input จากผู้ใช้ใน Java?",
                options: ["Input", "Reader", "Scanner", "Console"],
                ans: 2
            }
        },

        {
            id: 4,
            content: {
                th: {
                    title: "Operators",
                    desc: "Java มี operator เหมือน C++: เลขคณิต (+,-,*,/,%), เปรียบเทียบ (==,!=,<,>), ตรรกะ (&&,||,!), bitwise (&,|,^,~,<<,>>)",
                    code:
`public class Main {
    public static void main(String[] args) {
        int a = 15, b = 4;

        System.out.println(a + b);   // 19
        System.out.println(a - b);   // 11
        System.out.println(a * b);   // 60
        System.out.println(a / b);   // 3
        System.out.println(a % b);   // 3

        System.out.println(a > b && b > 0); // true
        System.out.println(a == 15 || b == 5); // true
    }
}`
                }
            },
            quiz: {
                q: "ผลลัพธ์ของ 15 % 4 ใน Java คืออะไร?",
                options: ["3", "4", "3.75", "0"],
                ans: 0
            }
        },

        {
            id: 5,
            content: {
                th: {
                    title: "if / else",
                    desc: "Java ใช้ if-else เหมือน C++ รวมถึง else if สำหรับหลายเงื่อนไข และ switch-case สำหรับค่าที่ตรงกัน",
                    code:
`public class Main {
    public static void main(String[] args) {
        int score = 88;
        String grade;

        if (score >= 90) {
            grade = "A";
        } else if (score >= 80) {
            grade = "B";
        } else if (score >= 70) {
            grade = "C";
        } else {
            grade = "F";
        }

        System.out.println("Grade: " + grade);
    }
}`
                }
            },
            quiz: {
                q: "ถ้า score = 88 จะได้ grade อะไร?",
                options: ["A", "B", "C", "F"],
                ans: 1
            }
        },

        {
            id: 6,
            content: {
                th: {
                    title: "Loops",
                    desc: "Java มีลูป 3 ชนิด: for, while, do-while นอกจากนี้ยังมี enhanced for loop (for-each) สำหรับวนผ่าน array หรือ collection",
                    code:
`public class Main {
    public static void main(String[] args) {
        // for loop
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();

        // while loop
        int n = 10;
        while (n > 0) {
            System.out.print(n + " ");
            n -= 3;
        }
        System.out.println();

        // for-each
        int[] nums = {2, 4, 6, 8};
        for (int x : nums) {
            System.out.print(x + " ");
        }
    }
}`
                }
            },
            quiz: {
                q: "Enhanced for loop (for-each) ใช้สำหรับอะไร?",
                options: ["วนตามจำนวนรอบที่กำหนด", "วนผ่าน array/collection", "วนไม่สิ้นสุด", "วนย้อนหลัง"],
                ans: 1
            }
        },

        {
            id: 7,
            content: {
                th: {
                    title: "Methods",
                    desc: "Methods (ฟังก์ชัน) ใน Java ต้องอยู่ใน class เสมอ ประกาศด้วย access modifier + return type + ชื่อ + parameters",
                    code:
`public class Main {
    static int add(int a, int b) {
        return a + b;
    }

    static double circleArea(double r) {
        return Math.PI * r * r;
    }

    static void greet(String name) {
        System.out.println("Hello, " + name + "!");
    }

    public static void main(String[] args) {
        System.out.println(add(5, 3));
        System.out.printf("Area: %.2f%n", circleArea(7));
        greet("Zenith");
    }
}`
                }
            },
            quiz: {
                q: "Method ที่ไม่ return ค่าใดเลย ใช้ return type ใดใน Java?",
                options: ["null", "none", "void", "empty"],
                ans: 2
            }
        },

        {
            id: 8,
            content: {
                th: {
                    title: "Arrays",
                    desc: "Array ใน Java มีขนาดคงที่ ประกาศด้วย type[] name = new type[size] หรือ initialize ตรงๆ สามารถใช้ .length หาขนาด",
                    code:
`public class Main {
    public static void main(String[] args) {
        int[] scores = {90, 85, 78, 92, 88};
        String[] names = {"Alice", "Bob", "Charlie"};

        // for-each loop
        for (int s : scores) {
            System.out.print(s + " ");
        }
        System.out.println();

        // หาค่าสูงสุด
        int max = scores[0];
        for (int s : scores) {
            if (s > max) max = s;
        }
        System.out.println("Max: " + max);
        System.out.println("Size: " + scores.length);
    }
}`
                }
            },
            quiz: {
                q: "ใช้ property ใดหาขนาด array ใน Java?",
                options: [".size()", ".count()", ".length", ".len()"],
                ans: 2
            }
        },

        {
            id: 9,
            content: {
                th: {
                    title: "Classes & Objects",
                    desc: "Java เป็น OOP เต็มรูปแบบ ทุกอย่างอยู่ใน class Constructor ใช้สร้าง object new ClassName() ใช้สร้าง instance",
                    code:
`public class Main {

    static class Student {
        String name;
        int age;

        Student(String name, int age) {
            this.name = name;
            this.age = age;
        }

        void introduce() {
            System.out.println("Hi! I'm " + name + ", age " + age);
        }
    }

    public static void main(String[] args) {
        Student s1 = new Student("Alice", 20);
        Student s2 = new Student("Bob", 22);

        s1.introduce();
        s2.introduce();
    }
}`
                }
            },
            quiz: {
                q: "Keyword ใดใช้สร้าง instance ของ class ใน Java?",
                options: ["create", "make", "new", "init"],
                ans: 2
            }
        },

        {
            id: 10,
            content: {
                th: {
                    title: "Inheritance",
                    desc: "Java รองรับ Inheritance ผ่าน keyword extends class ลูกได้รับ properties และ methods จาก parent class สามารถ override method ได้",
                    code:
`public class Main {

    static class Animal {
        String name;

        Animal(String name) {
            this.name = name;
        }

        void speak() {
            System.out.println(name + " makes a sound");
        }
    }

    static class Dog extends Animal {
        Dog(String name) {
            super(name);
        }

        @Override
        void speak() {
            System.out.println(name + " says: Woof!");
        }
    }

    public static void main(String[] args) {
        Animal a = new Animal("Animal");
        Dog d = new Dog("Buddy");

        a.speak();
        d.speak();
    }
}`
                }
            },
            quiz: {
                q: "Keyword ใดใช้ inherit class ใน Java?",
                options: ["inherits", "extends", "implements", "super"],
                ans: 1
            }
        }
    ]
};
