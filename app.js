const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

const scrollButton = document.getElementById('scroll__btn');
scrollButton.addEventListener('click', function() {
    
    const scrollTarget = document.getElementById('scroll__end');
    const headerOffset = 80;
    const targetPos = scrollTarget.getBoundingClientRect().top + window.pageYOffset;
    const offsetPos = targetPos - headerOffset  
    window.scrollTo({
        top: offsetPos,
        behavior: 'smooth'
    });
});
