/* Navigation logic */

//Variables
const mobileNav = document.getElementById('mobile-nav');
const hamburgerBtn = document.getElementById('hamburger-btn');

//Event Listeners
hamburgerBtn.addEventListener('click', ()=>{
    mobileNav.classList.toggle('hidden');
});