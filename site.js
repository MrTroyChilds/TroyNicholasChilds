// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
toggle?.addEventListener('click', () => nav.classList.toggle('open'));

// Close nav on link click (mobile)
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

// Current year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth header shadow on scroll
const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 20);
});
