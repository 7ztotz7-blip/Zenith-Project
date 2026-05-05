// ─── CONFIG & INITIALIZATION ────────────────────────────────────────────────
let currentLang = 'th';
let currentLessonId = 1;

// ดึงประเภทคอร์สจากข้อมูลที่มีอยู่ (ถ้าไม่มีให้ default เป็น 'js')
const courseType = (typeof courseData !== 'undefined' && courseData.id) ? courseData.id : 'js';

const XP_PER_CORRECT = 50;
const XP_PER_LEVEL   = 200;

// ─── XP & LEVEL SYSTEM ───────────────────────────────────────────────────────
function getXP()      { return parseInt(localStorage.getItem('zenith_xp') || '0'); }
function getLevel()   { return Math.floor(getXP() / XP_PER_LEVEL) + 1; }
function getLevelXP() { return getXP() % XP_PER_LEVEL; }
function getLevelPct(){ return (getLevelXP() / XP_PER_LEVEL) * 100; }

function addXP(amount) {
    const oldLevel = getLevel();
    const newXP    = getXP() + amount;
    localStorage.setItem('zenith_xp', newXP);
    const newLevel = getLevel();
    
    updateXPBar();
    if (newLevel > oldLevel) {
        localStorage.setItem('zenith_level', newLevel); // บันทึกเลเวลปัจจุบัน
        showLevelUp(newLevel);
        if (typeof confetti === 'function') confetti();
    }
}

function updateXPBar() {
    const bar  = document.getElementById('xpBar');
    const txt  = document.getElementById('xpText');
    const lvl  = document.getElementById('levelBadge');
    if (bar) bar.style.width = getLevelPct() + '%';
    if (txt) txt.innerText   = `${getLevelXP()} / ${XP_PER_LEVEL} XP`;
    if (lvl) lvl.innerText   = `LV ${getLevel()}`;
}

function showLevelUp(level) {
    const el = document.createElement('div');
    el.className = 'fixed top-20 left-1/2 -translate-x-1/2 z-[200] bg-[#a855f7] text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-lg shadow-2xl shadow-purple-500/40';
    el.innerHTML = `⚡ LEVEL UP! → LV ${level}`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
}

// ─── PROGRESS & UNLOCK SYSTEM ────────────────────────────────────────────────
function getUnlockedLesson() {
    const key = `zenith_progress_${courseType}`;
    return parseInt(localStorage.getItem(key) || '1');
}

function unlockNextLesson() {
    const key     = `zenith_progress_${courseType}`;
    const current = getUnlockedLesson();
    if (currentLessonId >= current) {
        localStorage.setItem(key, currentLessonId + 1);
    }
}

// ─── UI & RENDER FUNCTIONS ──────────────────────────────────────────────────
function updateUI() {
    const lessonObj = lessonData.find(l => l.id === currentLessonId);
    if (!lessonObj) return;
    const lesson = lessonObj.content[currentLang];

    document.getElementById('lessonTitle').innerText = lesson.title;
    document.getElementById('lessonDesc').innerText  = lesson.desc;
    document.getElementById('questionText').innerText = lesson.quiz.q;

    const codeBox = document.getElementById('codeBlock');
    if (lesson.code) {
        // ใช้ textContent เพื่อป้องกัน XSS และการรัน HTML ใน code block
        codeBox.textContent = lesson.code; 
        codeBox.classList.remove('hidden');
    } else {
        codeBox.classList.add('hidden');
    }

    const container = document.getElementById('optionsContainer');
    container.innerHTML = lesson.quiz.options.map((opt, i) => `
        <button onclick="checkAns(${i}, ${lesson.quiz.ans}, this)"
                class="option-btn p-5 bg-zinc-950 border border-zinc-800 rounded-2xl text-left font-bold text-gray-300 hover:text-white transition-all">
            <span class="text-[#a855f7] font-black mr-3">${String.fromCharCode(65+i)}.</span>${opt}
        </button>`).join('');

    document.getElementById('quizFeedback').innerText = '';
    renderSidebar();
    updateProgress();
    updateXPBar();
}

function checkAns(selected, correct, btn) {
    const feedback = document.getElementById('quizFeedback');
    const allBtns  = document.querySelectorAll('.option-btn');

    if (selected === correct) {
        btn.style.backgroundColor = '#2dd4bf';
        btn.style.color = 'black';
        feedback.innerHTML = `<span class="text-[#2dd4bf]">🎉 ถูกต้อง! </span><span class="text-[#a855f7] text-sm">+${XP_PER_CORRECT} XP</span>`;
        allBtns.forEach(b => b.disabled = true);

        addXP(XP_PER_CORRECT);
        unlockNextLesson();
    } else {
        btn.style.backgroundColor = '#ef4444';
        btn.classList.add('wrong-shake');
        feedback.innerText = currentLang === 'th' ? '❌ ลองใหม่อีกครั้งนะ' : '❌ TRY AGAIN';
        setTimeout(() => btn.classList.remove('wrong-shake'), 500);
    }
}