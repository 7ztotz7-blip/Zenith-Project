function saveUser() {
    const input = document.getElementById('userNameInput');
    if (!input) return;
    const name = input.value.trim();
    
    if (name.length >= 2) {
        localStorage.setItem('zenith_user', name);
        checkUserStatus();
    } else {
        alert("กรุณาใส่ชื่ออย่างน้อย 2 ตัวอักษรครับ");
    }
}

function checkUserStatus() {
    const savedName = localStorage.getItem('zenith_user');
    const guestLinks = document.getElementById('guestLinks');
    const userProfile = document.getElementById('userProfile');
    const navUserName = document.getElementById('navUserName');

    if (savedName) {
        if (guestLinks) guestLinks.classList.add('hidden');
        if (userProfile) userProfile.classList.remove('hidden');
        if (navUserName) navUserName.innerText = savedName;
        
        // ถ้าอยู่ในหน้าแรก ให้แสดง welcomeSection
        const welcome = document.getElementById('welcomeSection');
        const nameInput = document.getElementById('nameSection');
        if (welcome) welcome.classList.remove('hidden');
        if (nameInput) nameInput.classList.add('hidden');
        if (document.getElementById('userNameText')) {
            document.getElementById('userNameText').innerText = savedName;
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {
    checkUserStatus();
    // ถ้ามีฟังก์ชัน updateXPBar ในหน้านั้น ให้เรียกใช้ด้วย
    if (typeof updateXPBar === 'function') updateXPBar();
});