// ==========================================
// ZENITH CENTRAL ENGINE (MINIMAL CLEAN)
// ==========================================

let currentLang =
localStorage.getItem('zenith_lang') || 'th';

let currentLessonId =
window.currentLessonId ||
parseInt(localStorage.getItem('zenith_lesson_id')) ||
1;

let currentRandomizedQuiz = null;

// ──────────────────────────────────────────
// COURSE SYSTEM
// ──────────────────────────────────────────

function getCourseType() {

    return (
        window.courseType ||
        localStorage.getItem('zenith_course') ||
        'python'
    );
}

function getUnlockedLesson() {

    return parseInt(
        localStorage.getItem(
            `zenith_progress_${getCourseType()}`
        ) || '1'
    );
}

function unlockNextLesson() {

    const key =
    `zenith_progress_${getCourseType()}`;

    const current = getUnlockedLesson();

    if (currentLessonId >= current) {

        const nextLevel = currentLessonId + 1;
        localStorage.setItem(key, nextLevel);

        if (typeof window._zenithSaveProgress === 'function') {
            window._zenithSaveProgress(getCourseType(), nextLevel);
        }
    }
}

// ──────────────────────────────────────────
// QUIZ RANDOMIZER
// ──────────────────────────────────────────

function shuffleArray(array) {

    let currentIndex = array.length;

    while (currentIndex !== 0) {

        let randomIndex =
        Math.floor(Math.random() * currentIndex);

        currentIndex--;

        [
            array[currentIndex],
            array[randomIndex]
        ] = [
            array[randomIndex],
            array[currentIndex]
        ];
    }

    return array;
}

function getShuffledQuiz(originalQuiz) {

    let quiz =
    JSON.parse(JSON.stringify(originalQuiz));

    let correctAnswerText =
    quiz.options[quiz.ans];

    quiz.options =
    shuffleArray(quiz.options);

    quiz.ans =
    quiz.options.indexOf(correctAnswerText);

    return quiz;
}

// ──────────────────────────────────────────
// UPDATE UI
// ──────────────────────────────────────────

function updateUI() {

    if (
        typeof courseData === 'undefined' ||
        !courseData.lessons
    ) {
        return;
    }

    const lessonObj =
    courseData.lessons.find(
        l => l.id === currentLessonId
    );

    if (!lessonObj) return;

    const currentContent =
    lessonObj.content[currentLang] ||
    lessonObj.content['th'];

    // TITLE

    const titleEl =
    document.getElementById('lessonTitle');

    const descEl =
    document.getElementById('lessonDesc');

    if (titleEl) {
        titleEl.innerText =
        currentContent.title;
    }

    if (descEl) {
        descEl.innerText =
        currentContent.desc;
    }

    // SIDEBAR TITLE

    const sidebarTitle =
    document.getElementById('sidebarTitle');

    if (sidebarTitle) {
        sidebarTitle.innerText =
        courseData.title;
    }

    // CODE BLOCK

    const codeBox =
    document.getElementById('codeBlock');

    const codeContainer =
    document.getElementById('codeContainer');

    if (codeBox && codeContainer) {

        if (currentContent.code) {

            codeBox.textContent =
            currentContent.code;

            codeContainer.classList.remove('hidden');

        } else {

            codeContainer.classList.add('hidden');
        }
    }

    // QUIZ

    const questionText =
    document.getElementById('questionText');

    if (questionText) {
        questionText.innerText =
        lessonObj.quiz.q;
    }

    const optionsContainer =
    document.getElementById('optionsContainer');

    if (optionsContainer) {

        currentRandomizedQuiz =
        getShuffledQuiz(lessonObj.quiz);

        optionsContainer.innerHTML =
        currentRandomizedQuiz.options.map((opt, i) => `

            <button
                onclick="checkAns(${i}, ${currentRandomizedQuiz.ans}, this)"
                class="option-btn">

                <span class="text-[#a855f7] font-black mr-3">
                    ${String.fromCharCode(65 + i)}.
                </span>

                ${opt}

            </button>

        `).join('');
    }

    // FEEDBACK

    const feedback =
    document.getElementById('quizFeedback');

    if (feedback) {
        feedback.innerText = '';
    }

    // RESET QUIZ UI

    const startQuizBtn =
    document.getElementById('startQuizBtn');

    const quizSection =
    document.getElementById('quizSection');

    const nextBtn =
    document.getElementById('nextLessonBtn');

    if (startQuizBtn) {
        startQuizBtn.classList.remove('hidden');
    }

    if (quizSection) {
        quizSection.classList.add('hidden');
    }

    if (nextBtn) {
        nextBtn.classList.add('hidden');
    }

    // PROGRESS

    const progressText =
    document.getElementById('progressText');

    if (progressText) {

        progressText.innerText =
        `${getUnlockedLesson()} / ${courseData.lessons.length} บทเรียน`;
    }

    const sidebarBar =
    document.getElementById('sidebarProgress');

    if (sidebarBar) {

        const percent = Math.min(
            (
                (getUnlockedLesson() - 1) /
                courseData.lessons.length
            ) * 100,
            100
        );

        sidebarBar.style.width =
        percent + '%';
    }

    renderSidebar();
}

// ──────────────────────────────────────────
// QUIZ MODE
// ──────────────────────────────────────────

function switchToQuizMode() {

    const startQuizBtn =
    document.getElementById('startQuizBtn');

    const quizSection =
    document.getElementById('quizSection');

    if (startQuizBtn) {
        startQuizBtn.classList.add('hidden');
    }

    if (quizSection) {

        quizSection.classList.remove('hidden');

        quizSection.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        });
    }
}

// ──────────────────────────────────────────
// CHECK ANSWER
// ──────────────────────────────────────────

function checkAns(selected, correct, btn) {

    const feedback =
    document.getElementById('quizFeedback');

    const allBtns =
    document.querySelectorAll('.option-btn');

    if (selected === correct) {

        btn.classList.add('correct-glow');

        btn.style.backgroundColor =
        '#2dd4bf';

        btn.style.color =
        '#000';

        if (feedback) {

            feedback.innerHTML = `
                <span style="color:#2dd4bf">
                    ✓ ถูกต้อง! ปลดล็อกบทถัดไปแล้ว
                </span>
            `;
        }

        allBtns.forEach(
            b => b.disabled = true
        );

        unlockNextLesson();

        setTimeout(() => {

            const nextBtn =
            document.getElementById('nextLessonBtn');

            if (nextBtn) {
                nextBtn.classList.remove('hidden');
            }

        }, 500);

    } else {

        btn.classList.add('wrong-shake');

        if (feedback) {

            feedback.innerText =
            currentLang === 'th'
            ? '❌ ลองใหม่อีกครั้ง'
            : '❌ TRY AGAIN';
        }

        setTimeout(() => {
            btn.classList.remove('wrong-shake');
        }, 500);
    }
}

// ──────────────────────────────────────────
// SIDEBAR
// ──────────────────────────────────────────

function renderSidebar() {

    const lessonList =
    document.getElementById('lessonList');

    if (!lessonList) return;

    const unlocked =
    getUnlockedLesson();

    lessonList.innerHTML =
    courseData.lessons.map(lesson => {

        const isActive =
        lesson.id === currentLessonId;

        const isUnlocked =
        lesson.id <= unlocked;

        const isDone =
        lesson.id < unlocked;

        const content =
        lesson.content[currentLang] ||
        lesson.content['th'];

        return `

            <div
                onclick="${
                    isUnlocked
                    ? `setLesson(${lesson.id})`
                    : ''
                }"

                class="
                p-5
                sidebar-item
                font-bold
                text-sm
                flex
                items-center
                justify-between

                ${
                    isActive
                    ? 'active-lesson'
                    : isUnlocked
                    ? 'text-gray-400 cursor-pointer'
                    : 'text-zinc-700 cursor-not-allowed'
                }
                ">

                <span class="flex items-center gap-2 truncate">

                    ${
                        isDone
                        ? '<span style="color:#2dd4bf">✓</span>'
                        : ''
                    }

                    ${content.title}

                </span>

            </div>

        `;
    }).join('');
}

// ──────────────────────────────────────────
// COMPLETION SCREEN
// ──────────────────────────────────────────

function showCompletionScene() {

    const overlay =
    document.createElement('div');

    overlay.style.cssText = `
        position:fixed;
        inset:0;
        background:rgba(0,0,0,0.95);
        display:flex;
        align-items:center;
        justify-content:center;
        z-index:999;
        padding:24px;
    `;

    overlay.innerHTML = `

        <div style="
            max-width:500px;
            width:100%;
            text-align:center;
            color:white;
        ">

            <h1 style="
                font-size:52px;
                margin-bottom:16px;
            ">
                🏆
            </h1>

            <h2 style="
                font-size:32px;
                font-weight:900;
                margin-bottom:12px;
            ">
                เรียนจบแล้ว!
            </h2>

            <p style="
                color:#a1a1aa;
                margin-bottom:32px;
            ">
                คุณเรียนจบคอร์สนี้ครบทั้งหมดแล้ว
            </p>

            <a
                href="course.html?course=${getCourseType()}"
                style="
                    display:block;
                    padding:16px;
                    border-radius:18px;
                    background:#a855f7;
                    color:white;
                    text-decoration:none;
                    font-weight:900;
                ">

                กลับหน้าคอร์ส

            </a>

        </div>

    `;

    document.body.appendChild(overlay);
}

// ──────────────────────────────────────────
// NAVIGATION
// ──────────────────────────────────────────

function nextLesson() {

    if (
        currentLessonId <
        courseData.lessons.length
    ) {

        currentLessonId++;

        localStorage.setItem(
            'zenith_lesson_id',
            currentLessonId
        );

        updateUI();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    } else {

        showCompletionScene();
    }
}

function prevLesson() {

    if (currentLessonId > 1) {

        currentLessonId--;

        localStorage.setItem(
            'zenith_lesson_id',
            currentLessonId
        );

        updateUI();

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}

function setLesson(id) {

    currentLessonId = id;

    localStorage.setItem(
        'zenith_lesson_id',
        currentLessonId
    );

    updateUI();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    if (typeof closeDrawer === 'function') closeDrawer();
}

// ──────────────────────────────────────────
// LANGUAGE
// ──────────────────────────────────────────

function changeLanguage() {

    const langSelect =
    document.getElementById('langSelect');

    currentLang =
    langSelect.value;

    localStorage.setItem(
        'zenith_lang',
        currentLang
    );

    updateUI();
}

// ──────────────────────────────────────────
// START
// ──────────────────────────────────────────

document.addEventListener(
    'DOMContentLoaded',
    updateUI
);