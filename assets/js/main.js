// ============================================================
//  ZENITH — main.js (Fixed for Content-First Mode)
//  courseType ถูกกำหนดจาก lesson.html ผ่าน window.courseType
//  ห้ามนิยาม courseType ซ้ำในไฟล์นี้
// ============================================================

let currentLang     = 'th';
let currentLessonId = 1;

const XP_PER_CORRECT = 50;
const XP_PER_LEVEL   = 200;

// ─── XP & LEVEL ──────────────────────────────────────────────
function getXP()      { return parseInt(localStorage.getItem('zenith_xp') || '0'); }
function getLevel()   { return Math.floor(getXP() / XP_PER_LEVEL) + 1; }
function getLevelXP() { return getXP() % XP_PER_LEVEL; }
function getLevelPct(){ return (getLevelXP() / XP_PER_LEVEL) * 100; }

function addXP(amount) {
    const oldLevel = getLevel();
    localStorage.setItem('zenith_xp', getXP() + amount);
    updateXPBar();
    if (getLevel() > oldLevel) showLevelUp(getLevel());
}

function updateXPBar() {
    const bar = document.getElementById('xpBar');
    const txt = document.getElementById('xpText');
    const lvl = document.getElementById('levelBadge');
    if (bar) bar.style.width = getLevelPct() + '%';
    if (txt) txt.innerText   = `${getLevelXP()} / ${XP_PER_LEVEL} XP`;
    if (lvl) lvl.innerText   = `LV ${getLevel()}`;
}

function showLevelUp(level) {
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;top:80px;left:50%;transform:translateX(-50%);z-index:200;background:#a855f7;color:white;padding:14px 32px;border-radius:20px;font-weight:900;font-size:18px;text-transform:uppercase;letter-spacing:0.1em;box-shadow:0 0 40px rgba(168,85,247,0.5);animation:fadeUp 0.5s ease';
    el.textContent = `⚡ LEVEL UP! → LV ${level}`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3000);
}

// ─── STREAK ──────────────────────────────────────────────────
function checkStreak() {
    const today     = new Date().toDateString();
    const lastDate  = localStorage.getItem('zenith_last_date');
    const yesterday = new Date(Date.now() - 86400000).toDateString();
    let   streak    = parseInt(localStorage.getItem('zenith_streak') || '0');
    if (lastDate === today) return streak;
    streak = (lastDate === yesterday) ? streak + 1 : 1;
    localStorage.setItem('zenith_streak', streak);
    localStorage.setItem('zenith_last_date', today);
    return streak;
}

function getStreak() { return parseInt(localStorage.getItem('zenith_streak') || '0'); }

// ─── UNLOCK — ใช้ window.courseType จาก lesson.html ─────────
function getCourseType() {
    return window.courseType || 'python';
}

function getUnlockedLesson() {
    return parseInt(localStorage.getItem(`zenith_progress_${getCourseType()}`) || '1');
}

function unlockNextLesson() {
    const key     = `zenith_progress_${getCourseType()}`;
    const current = getUnlockedLesson();
    if (currentLessonId >= current) {
        localStorage.setItem(key, currentLessonId + 1);
    }
}

// ─── ACHIEVEMENTS ─────────────────────────────────────────────
const ACHIEVEMENTS = [
    { id:'first_correct', icon:'🎯', title:'First Blood',   desc:'ตอบถูกเป็นครั้งแรก' },
    { id:'reach_lv2',     icon:'⚡', title:'Rising Star',   desc:'ถึง Level 2'         },
    { id:'reach_lv5',     icon:'💎', title:'Diamond Coder', desc:'ถึง Level 5'         },
    { id:'streak_3',      icon:'🔥', title:'On Fire',       desc:'เรียน 3 วันติดต่อกัน'},
    { id:'streak_7',      icon:'🏆', title:'Unstoppable',   desc:'เรียน 7 วันติดต่อกัน'},
];

function checkAchievements() {
    const unlocked = JSON.parse(localStorage.getItem('zenith_achievements') || '[]');
    const xp = getXP(), streak = getStreak();
    const earned = [];

    ACHIEVEMENTS.forEach(a => {
        if (unlocked.includes(a.id)) return;
        let ok = false;
        if (a.id === 'first_correct' && xp >= XP_PER_CORRECT) ok = true;
        if (a.id === 'reach_lv2'     && xp >= 200)            ok = true;
        if (a.id === 'reach_lv5'     && xp >= 800)            ok = true;
        if (a.id === 'streak_3'      && streak >= 3)           ok = true;
        if (a.id === 'streak_7'      && streak >= 7)           ok = true;
        if (ok) { unlocked.push(a.id); earned.push(a); }
    });

    if (earned.length) {
        localStorage.setItem('zenith_achievements', JSON.stringify(unlocked));
        earned.forEach(showAchievementToast);
    }
}

function showAchievementToast(a) {
    const el = document.createElement('div');
    el.style.cssText = 'position:fixed;bottom:24px;right:24px;z-index:200;background:#0d0d0e;border:1px solid rgba(168,85,247,0.5);border-radius:20px;padding:16px 20px;box-shadow:0 0 30px rgba(168,85,247,0.2);max-width:280px;animation:fadeUp 0.5s ease';
    el.innerHTML = `
        <p style="font-size:9px;color:#a855f7;font-weight:900;text-transform:uppercase;letter-spacing:0.15em;margin-bottom:6px">🏅 Achievement Unlocked!</p>
        <div style="display:flex;align-items:center;gap:12px">
            <span style="font-size:28px">${a.icon}</span>
            <div>
                <p style="font-weight:900;font-size:14px;color:white">${a.title}</p>
                <p style="font-size:11px;color:#71717a">${a.desc}</p>
            </div>
        </div>`;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 4000);
}

// ─── UI CONTROLLER ───
function updateUI() {
    if (typeof courseData === 'undefined' || !courseData.lessons) return;
    
    const lessonObj = courseData.lessons.find(l => l.id === currentLessonId);
    if (!lessonObj) return;

    const lesson = lessonObj.content[currentLang] || lessonObj.content['th'];
    if (!lesson) return;

    // ─── 1. แสดงผลเนื้อหาบทเรียน ───
    const titleEl = document.getElementById('lessonTitle');
    const descEl = document.getElementById('lessonDesc');
    const codeBox = document.getElementById('codeBlock');

    if (titleEl) {
        titleEl.innerText = lesson.title;
        titleEl.classList.remove('hidden');
    }
    if (descEl) {
        descEl.innerText = lesson.desc;
        descEl.classList.remove('hidden');
    }

    if (codeBox) {
        if (lesson.code) {
            codeBox.textContent = lesson.code;
            codeBox.classList.remove('hidden');
        } else {
            codeBox.classList.add('hidden');
        }
    }

    // ─── 2. เจนเนอเรตควิซและตัวเลือกคำตอบ ───
    const questionTextEl = document.getElementById('questionText');
    if (questionTextEl) questionTextEl.innerText = lesson.quiz.q;

    const container = document.getElementById('optionsContainer');
    if (container) {
        container.innerHTML = lesson.quiz.options.map((opt, i) => `
            <button onclick="checkAns(${i}, ${lesson.quiz.ans}, this)"
                    class="option-btn">
                <span class="text-[#a855f7] font-black mr-3">${String.fromCharCode(65+i)}.</span>${opt}
            </button>`).join('');
    }

    const feedbackEl = document.getElementById('quizFeedback');
    if (feedbackEl) feedbackEl.innerText = '';
    
    // ─── 3. เคลียร์สถานะปุ่มสำหรับ "โหมดเริ่มเรียนใหม่" ───
    const startQuizBtn = document.getElementById('startQuizBtn');
    const quizSection = document.getElementById('quizSection');
    const nextBtn = document.getElementById('nextLessonBtn');
    
    if (startQuizBtn) startQuizBtn.classList.remove('hidden');
    if (quizSection) quizSection.classList.add('hidden');
    
    if (nextBtn) {
        nextBtn.classList.add('hidden');
        nextBtn.classList.remove('animate-bounce');
    }

    renderSidebar();
    updateProgress();
    updateXPBar();
}

// ─── 4. ฟังก์ชันเปิดโหมดควิซเมื่อผู้เรียนกดปุ่มม่วง ───
function switchToQuizMode() {
    const startQuizBtn = document.getElementById('startQuizBtn');
    const quizSection = document.getElementById('quizSection');
    
    if (startQuizBtn) startQuizBtn.classList.add('hidden');
    
    if (quizSection) {
        quizSection.classList.remove('hidden');
        quizSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function checkAns(selected, correct, btn) {
    const feedback = document.getElementById('quizFeedback');
    const allBtns  = document.querySelectorAll('.option-btn');

    if (selected === correct) {
        btn.style.backgroundColor = '#2dd4bf';
        btn.style.color = 'black';
        btn.classList.add('correct-glow');
        feedback.innerHTML = `<span style="color:#2dd4bf">🎉 ถูกต้อง! </span><span style="color:#a855f7;font-size:14px">+${XP_PER_CORRECT} XP</span>`;
        allBtns.forEach(b => b.disabled = true);
        addXP(XP_PER_CORRECT);
        unlockNextLesson();
        checkStreak();
        checkAchievements();

        setTimeout(() => {
            const nextBtn = document.getElementById('nextLessonBtn');
            if (nextBtn) {
                nextBtn.classList.remove('hidden');
                nextBtn.classList.add('animate-bounce');
            }
        }, 600);

    } else {
        btn.classList.add('wrong-shake');
        feedback.innerText = currentLang === 'th' ? '❌ ลองใหม่อีกครั้งนะ' : '❌ TRY AGAIN';
        setTimeout(() => {
            btn.classList.remove('wrong-shake');
        }, 600);
    }
}

function updateProgress() {
    if (typeof courseData === 'undefined' || !courseData.lessons) return;
    const total    = courseData.lessons.length;
    const unlocked = getUnlockedLesson();
    const pct      = Math.min(((unlocked - 1) / total) * 100, 100);
    const bar      = document.getElementById('sidebarProgress');
    if (bar) bar.style.width = pct + '%';
}

function renderSidebar() {
    if (typeof courseData === 'undefined' || !courseData.lessons) return;
    const list     = document.getElementById('lessonList');
    if (!list) return;
    const unlocked = getUnlockedLesson();

    list.innerHTML = courseData.lessons.map(lesson => {
        const isActive   = lesson.id === currentLessonId;
        const isUnlocked = lesson.id <= unlocked;
        const isDone     = lesson.id < unlocked;
        const content    = lesson.content[currentLang] || lesson.content['th'];
        return `
        <div onclick="${isUnlocked ? `setLesson(${lesson.id})` : ''}"
             class="p-5 sidebar-item font-bold text-sm flex items-center justify-between
                    ${isActive ? 'active-lesson' : isUnlocked ? 'text-gray-400 cursor-pointer' : 'text-zinc-700 cursor-not-allowed'}">
            <span class="flex items-center gap-2 min-w-0">
                ${isDone ? '<span style="color:#2dd4bf;font-size:12px">✓</span>' : ''}
                <span class="truncate">${content ? content.title : lesson.id}</span>
            </span>
            ${!isUnlocked ? '<svg style="width:14px;height:14px;color:#3f3f46;flex-shrink:0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/></svg>' : ''}
        </div>`;
    }).join('');
}

function showCompletionScene() {
    const userName = localStorage.getItem('zenith_user') || 'นักเรียน';
    if (typeof confetti !== 'undefined') {
        confetti({ particleCount: 200, spread: 90, origin: { y: 0.6 }, colors: ['#a855f7','#2dd4bf','#eab308'] });
    }
    addXP(200);
    checkAchievements();

    const title = typeof courseData !== 'undefined' ? courseData.title : 'คอร์สนี้';
    const total = typeof courseData !== 'undefined' && courseData.lessons ? courseData.lessons.length : '-';

    const overlay = document.createElement('div');
    overlay.style.cssText = 'position:fixed;inset:0;z-index:100;background:rgba(0,0,0,0.95);backdrop-filter:blur(20px);display:flex;align-items:center;justify-content:center;padding:24px';
    overlay.innerHTML = `
        <div style="text-align:center;max-width:500px;width:100%">
            <p style="font-size:64px;margin-bottom:24px">🏆</p>
            <h2 style="font-size:36px;font-weight:900;color:white;font-style:italic;letter-spacing:-0.05em;margin-bottom:8px">ยินดีด้วย, ${userName}!</h2>
            <p style="color:#a855f7;font-weight:700;text-transform:uppercase;letter-spacing:0.2em;font-size:12px;margin-bottom:4px">${title} — สำเร็จแล้ว</p>
            <p style="color:#2dd4bf;font-size:12px;margin-bottom:32px">+200 Bonus XP • Level ${getLevel()}</p>
            <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.06);border-radius:24px;padding:24px;margin-bottom:32px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px;text-align:center">
                <div><p style="color:#6b7280;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px">บทเรียน</p><p style="font-size:24px;font-weight:900;color:white">${total}</p></div>
                <div><p style="color:#6b7280;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px">XP รวม</p><p style="font-size:24px;font-weight:900;color:#a855f7">${getXP()}</p></div>
                <div><p style="color:#6b7280;font-size:9px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:4px">Streak</p><p style="font-size:24px;font-weight:900;color:#2dd4bf">${getStreak()}🔥</p></div>
            </div>
            <div style="display:flex;gap:12px">
                <a href="index.html" style="flex:1;padding:16px;border:1px solid #3f3f46;border-radius:16px;color:white;font-weight:900;text-transform:uppercase;font-size:11px;text-decoration:none;display:block;text-align:center;transition:all 0.2s" onmouseover="this.style.borderColor='#a855f7'" onmouseout="this.style.borderColor='#3f3f46'">กลับหน้าหลัก</a>
                <button onclick="location.reload()" style="flex:1;padding:16px;background:#a855f7;border:none;border-radius:16px;color:white;font-weight:900;text-transform:uppercase;font-size:11px;cursor:pointer">เรียนซ้ำ</button>
            </div>
        </div>`;
    document.body.appendChild(overlay);
}

// ─── NAVIGATION ───────────────────────────────────────────────
function nextLesson() {
    if (typeof courseData === 'undefined' || !courseData.lessons) return;
    if (currentLessonId < courseData.lessons.length) {
        currentLessonId++;
        updateUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showCompletionScene();
    }
}
function prevLesson() {
    if (currentLessonId > 1) {
        currentLessonId--;
        updateUI();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
function setLesson(id) {
    currentLessonId = id;
    updateUI();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function changeLanguage() {
    currentLang = document.getElementById('langSelect').value;
    updateUI();
}