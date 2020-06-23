const menuBtn = document.querySelector('.bars');
const navMenu = document.querySelector('.nav-menu');
let navShow = false;
menuBtn.addEventListener('click', () => {
    if (!navShow) {
        menuBtn.classList.add('show');
        navShow = true;
    } else {
        menuBtn.classList.remove('show');
        navShow = false;
    }
})