const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const hamburger = document.getElementById('hamburgerBtn');
const toggleBtn = document.getElementById('toggleBtn');
const chev = document.getElementById('chev');

function isMobile() { return window.innerWidth <= 880; }

function openSidebar() { sidebar.classList.add('show'); overlay.classList.add('show'); }
function closeSidebar() { sidebar.classList.remove('show'); overlay.classList.remove('show'); }

hamburger.addEventListener('click', () => {
    sidebar.classList.toggle('show');
    overlay.classList.toggle('show');
});

overlay.addEventListener('click', closeSidebar);

// Arrow toggle for large screens
toggleBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    chev.style.transform = sidebar.classList.contains('collapsed') ? 'rotate(180deg)' : 'rotate(0deg)';
});

// Close overlay on resize
window.addEventListener('resize', () => {
    if (!isMobile()) { closeSidebar(); sidebar.classList.remove('collapsed'); chev.style.transform = 'rotate(0deg)'; }
});
