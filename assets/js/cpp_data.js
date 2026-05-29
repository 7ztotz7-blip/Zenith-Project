const courseData = {
    title: "C++ Programming",
    themeColor: "#00599C",

    lessons: [

        {
            id: 1,
            content: {
                th: {
                    title: "C++ คืออะไร",
                    desc: "C++ เป็นภาษาโปรแกรมระดับสูงที่มีประสิทธิภาพสูง ใช้พัฒนาเกม ระบบปฏิบัติการ ซอฟต์แวร์ฝัง และโปรแกรมที่ต้องการความเร็ว",
                    code:
`#include <iostream>
using namespace std;

int main() {
    cout << "Hello, Zenith!" << endl;
    return 0;
}`
                }
            },
            quiz: {
                q: "C++ ใช้คำสั่งใดพิมพ์ข้อความออกหน้าจอ?",
                options: ["print()", "cout <<", "console.log()", "printf only"],
                ans: 1
            }
        },

        {
            id: 2,
            content: {
                th: {
                    title: "Variables & Data Types",
                    desc: "C++ มี data type หลายชนิด เช่น int (จำนวนเต็ม), double (ทศนิยม), char (ตัวอักษร), bool (จริง/เท็จ), string (ข้อความ)",
                    code:
`#include <iostream>
#include <string>
using namespace std;

int main() {
    int age = 20;
    double price = 99.99;
    char grade = 'A';
    bool isActive = true;
    string name = "Zenith";

    cout << name << " age " << age << endl;
    return 0;
}`
                }
            },
            quiz: {
                q: "ชนิดข้อมูลใดใช้เก็บจำนวนเต็มใน C++?",
                options: ["double", "string", "int", "char"],
                ans: 2
            }
        },

        {
            id: 3,
            content: {
                th: {
                    title: "รับ Input จากผู้ใช้",
                    desc: "ใช้ cin >> รับข้อมูลจากผู้ใช้ และ cout << แสดงผล ทำงานคู่กับ #include <iostream>",
                    code:
`#include <iostream>
#include <string>
using namespace std;

int main() {
    string name;
    int age;

    cout << "Enter your name: ";
    cin >> name;

    cout << "Enter your age: ";
    cin >> age;

    cout << "Hello " << name << "! You are " << age << " years old." << endl;
    return 0;
}`
                }
            },
            quiz: {
                q: "คำสั่งใดใช้รับ input จากผู้ใช้ใน C++?",
                options: ["input()", "cin >>", "scanf only", "read()"],
                ans: 1
            }
        },

        {
            id: 4,
            content: {
                th: {
                    title: "Operators",
                    desc: "C++ มี operator ครบครัน: เลขคณิต (+,-,*,/,%), เปรียบเทียบ (==,!=,<,>), ตรรกะ (&&,||,!), และ assignment (=,+=,-=)",
                    code:
`#include <iostream>
using namespace std;

int main() {
    int a = 10, b = 3;

    cout << a + b << endl;  // 13
    cout << a - b << endl;  // 7
    cout << a * b << endl;  // 30
    cout << a / b << endl;  // 3
    cout << a % b << endl;  // 1

    bool result = (a > b) && (b > 0);
    cout << result << endl; // 1 (true)
    return 0;
}`
                }
            },
            quiz: {
                q: "เครื่องหมาย % ใน C++ คืออะไร?",
                options: ["หารปกติ", "เปอร์เซ็นต์", "เศษจากการหาร", "คูณร้อย"],
                ans: 2
            }
        },

        {
            id: 5,
            content: {
                th: {
                    title: "if / else",
                    desc: "ใช้ if-else ตรวจสอบเงื่อนไข และ else if สำหรับหลายเงื่อนไข C++ ยังมี switch-case สำหรับหลายค่า",
                    code:
`#include <iostream>
using namespace std;

int main() {
    int score = 85;

    if (score >= 80) {
        cout << "Grade A" << endl;
    } else if (score >= 70) {
        cout << "Grade B" << endl;
    } else if (score >= 60) {
        cout << "Grade C" << endl;
    } else {
        cout << "Grade F" << endl;
    }

    return 0;
}`
                }
            },
            quiz: {
                q: "Keyword ใดตรวจสอบเงื่อนไขใน C++?",
                options: ["check", "if", "condition", "when"],
                ans: 1
            }
        },

        {
            id: 6,
            content: {
                th: {
                    title: "Loops",
                    desc: "C++ มีลูป 3 ชนิด: for (รู้จำนวนรอบล่วงหน้า), while (วนจนเงื่อนไขเป็นเท็จ), do-while (รันอย่างน้อย 1 ครั้ง)",
                    code:
`#include <iostream>
using namespace std;

int main() {
    // for loop
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }
    cout << endl;

    // while loop
    int n = 1;
    while (n <= 5) {
        cout << n * n << " ";
        n++;
    }
    cout << endl;

    return 0;
}`
                }
            },
            quiz: {
                q: "for loop ใน C++ มีกี่ส่วนหลัก?",
                options: ["1", "2", "3", "4"],
                ans: 2
            }
        },

        {
            id: 7,
            content: {
                th: {
                    title: "Functions",
                    desc: "Functions ช่วยแบ่งโค้ดเป็นส่วนย่อย สามารถรับ parameter และ return ค่ากลับ ใน C++ ต้องประกาศ type ของ return value",
                    code:
`#include <iostream>
using namespace std;

int add(int a, int b) {
    return a + b;
}

double circle_area(double r) {
    return 3.14159 * r * r;
}

void greet(string name) {
    cout << "Hello, " << name << "!" << endl;
}

int main() {
    cout << add(5, 3) << endl;
    cout << circle_area(7.0) << endl;
    greet("Zenith");
    return 0;
}`
                }
            },
            quiz: {
                q: "Function ที่ไม่ return ค่าใดเลย ใช้ return type ใด?",
                options: ["null", "none", "void", "empty"],
                ans: 2
            }
        },

        {
            id: 8,
            content: {
                th: {
                    title: "Arrays",
                    desc: "Array คือชุดข้อมูลชนิดเดียวกัน ใน C++ ต้องกำหนดขนาดตั้งแต่แรก ใช้ index เริ่มต้นที่ 0 ในการเข้าถึงข้อมูล",
                    code:
`#include <iostream>
using namespace std;

int main() {
    int scores[5] = {90, 85, 78, 92, 88};
    string names[3] = {"Alice", "Bob", "Charlie"};

    // แสดงทุกค่า
    for (int i = 0; i < 5; i++) {
        cout << "Score " << i+1 << ": " << scores[i] << endl;
    }

    // หาค่าเฉลี่ย
    int sum = 0;
    for (int s : scores) sum += s;
    cout << "Average: " << sum / 5.0 << endl;

    return 0;
}`
                }
            },
            quiz: {
                q: "Array ใน C++ เริ่ม index ที่เท่าไร?",
                options: ["1", "0", "-1", "ขึ้นอยู่กับประกาศ"],
                ans: 1
            }
        },

        {
            id: 9,
            content: {
                th: {
                    title: "Pointers",
                    desc: "Pointer เป็นตัวแปรที่เก็บ address ของตัวแปรอื่นในหน่วยความจำ ใช้ & ดึง address และ * dereference เพื่อเข้าถึงค่า",
                    code:
`#include <iostream>
using namespace std;

int main() {
    int num = 42;
    int* ptr = &num;  // ptr เก็บ address ของ num

    cout << "Value: " << num << endl;
    cout << "Address: " << &num << endl;
    cout << "Ptr points to: " << *ptr << endl;

    *ptr = 100;  // เปลี่ยนค่าผ่าน pointer
    cout << "New value: " << num << endl;

    return 0;
}`
                }
            },
            quiz: {
                q: "เครื่องหมายใดใช้ดึง memory address ของตัวแปรใน C++?",
                options: ["*", "&", "@", "#"],
                ans: 1
            }
        },

        {
            id: 10,
            content: {
                th: {
                    title: "Classes & Objects",
                    desc: "C++ เป็น OOP language สามารถสร้าง class เพื่อนิยาม object ที่มี properties (attributes) และ methods (functions)",
                    code:
`#include <iostream>
#include <string>
using namespace std;

class Student {
public:
    string name;
    int age;

    Student(string n, int a) {
        name = n;
        age = a;
    }

    void introduce() {
        cout << "Hi! I'm " << name
             << ", age " << age << endl;
    }
};

int main() {
    Student s1("Alice", 20);
    Student s2("Bob", 22);

    s1.introduce();
    s2.introduce();

    return 0;
}`
                }
            },
            quiz: {
                q: "Keyword ใดใช้สร้าง class ใน C++?",
                options: ["object", "struct only", "class", "type"],
                ans: 2
            }
        }
    ]
};
