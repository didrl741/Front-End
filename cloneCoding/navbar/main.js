const toggleBtn = document.querySelector('.navbar_toggle');

const menu = document.querySelector('.navbar_menu');

const icons = document.querySelector('.navbar_icons');

toggleBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    icons.classList.toggle('active');
});

console.log('hello');