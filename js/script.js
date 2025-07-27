// Simple JavaScript to update year and handle mobile menu
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.getElementById('nav-menu');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', !expanded);
        navMenu.classList.toggle('active');
    });
}

//Password//
function checkPassword() {
    const password = document.getElementById('password').value;
    const correctPassword = 'SharpProject2025'; // Change this
    
    if (password === correctPassword) {
        document.getElementById('password-container').style.display = 'none';
        document.getElementById('main-content').classList.remove('hidden');
    } else {
        document.getElementById('error').style.display = 'block';
    }
}

// Email obfuscation (only runs on pages that have the email element)
const emailElement = document.getElementById('email');
if (emailElement) {
    emailElement.innerHTML = '<a href="mailto:mrsharp@sharpinit.com">mrsharp@sharpinit.com</a>';
}
