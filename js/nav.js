/* Navigation logic */

//Variables
const mobileNav = document.getElementById('mobile-nav');
const hamburgerBtn = document.getElementById('hamburger-btn');
const homeBtn = document.getElementById('home-btn');
const aboutBtn = document.getElementById('about-btn');
const resumeBtn = document.getElementById('resume-btn');
const portfolioBtn = document.getElementById('portfolio-btn');
const contactBtn = document.getElementById('contact-btn');
const navBtns = [hamburgerBtn, homeBtn, aboutBtn, resumeBtn, portfolioBtn, contactBtn];

//Functions

function toggleMobileMenu(){
    mobileNav.classList.toggle('hidden');
}

//Event Listeners
navBtns.forEach( item =>{
    item.addEventListener('click', toggleMobileMenu);
});