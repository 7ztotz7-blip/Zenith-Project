// Anti-flash IIFE — runs before first paint
(function () {
    const saved = localStorage.getItem('zenith_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    if (saved === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
})();

window.toggleTheme = function () {
    const current = document.documentElement.getAttribute('data-theme') || 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('zenith_theme', next);
    if (next === 'dark') {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
    updateThemeIcons();
};

function updateThemeIcons() {
    const theme = document.documentElement.getAttribute('data-theme') || 'dark';
    document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
        // Sun icon = shown in dark mode (click to go light)
        const sun  = btn.querySelector('.icon-sun');
        const moon = btn.querySelector('.icon-moon');
        if (sun)  sun.style.display  = theme === 'dark'  ? 'block' : 'none';
        if (moon) moon.style.display = theme === 'light' ? 'block' : 'none';
    });
}

document.addEventListener('DOMContentLoaded', updateThemeIcons);
