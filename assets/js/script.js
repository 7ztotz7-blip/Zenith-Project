// ฟังก์ชันบันทึกชื่อผู้ใช้จากหน้าแรก
function saveUser() {
    const input = document.getElementById('userNameInput');
    const name = input.value.trim();
    
    if (name !== "") {
        // บันทึกชื่อลงใน LocalStorage ของ Browser
        localStorage.setItem('zenith_user', name);
        // เรียกใช้ฟังก์ชันตรวจสอบสถานะเพื่ออัปเดตหน้าจอทันที
        checkUserStatus();
    } else {
        alert("กรุณาระบุชื่อของคุณเพื่อเริ่มต้นการเรียนรู้ครับ");
    }
}

// ฟังก์ชันตรวจสอบสถานะผู้ใช้และอัปเดต UI
function checkUserStatus() {
    const savedName = localStorage.getItem('zenith_user');
    
    // องค์ประกอบในหน้าแรก (Hero Section)
    const nameSection = document.getElementById('nameSection');
    const welcomeSection = document.getElementById('welcomeSection');
    const userNameText = document.getElementById('userNameText');
    
    // องค์ประกอบบนแถบเมนู (Navbar)
    const guestLinks = document.getElementById('guestLinks');
    const userProfile = document.getElementById('userProfile');
    const navUserName = document.getElementById('navUserName');

    if (savedName) {
        // ถ้ามีชื่อในระบบ: แสดงข้อความต้อนรับและโปรไฟล์บน Navbar
        if (nameSection) nameSection.classList.add('hidden');
        if (welcomeSection) {
            welcomeSection.classList.remove('hidden');
            userNameText.innerText = savedName;
        }
        
        if (guestLinks) guestLinks.classList.add('hidden');
        if (userProfile) {
            userProfile.classList.remove('hidden');
            navUserName.innerText = savedName;
        }
    } else {
        // ถ้าไม่มีชื่อ: แสดงช่องกรอกชื่อและปุ่มเข้าสู่ระบบปกติ
        if (nameSection) nameSection.classList.remove('hidden');
        if (welcomeSection) welcomeSection.classList.add('hidden');
        
        if (guestLinks) guestLinks.classList.remove('hidden');
        if (userProfile) userProfile.classList.add('hidden');
    }
}

// ฟังก์ชันออกจากระบบ
function logout() {
    if (confirm("คุณต้องการออกจากระบบใช่หรือไม่?")) {
        localStorage.removeItem('zenith_user');
        // รีโหลดหน้าเว็บเพื่อให้ UI กลับเป็นสถานะเริ่มต้น
        window.location.reload();
    }
}

// ให้ระบบทำงานทันทีที่โหลดหน้าเว็บเสร็จ
document.addEventListener('DOMContentLoaded', checkUserStatus);