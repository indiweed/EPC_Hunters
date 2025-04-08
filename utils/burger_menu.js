/*const burger_menu = document.querySelector('.burger_menu');
const overlay = document.querySelector('.overlay');
const burger_links = document.querySelectorAll('.burger_link')

document.querySelector('.burger_button').addEventListener('click', function() {
    burger_menu.style.display = 'block';
    overlay.style.display = 'block';
})   
document.querySelector('.close_burger').addEventListener('click', function() {
    burger_menu.style.display = 'none';
    overlay.style.display = 'none';
})
burger_links.forEach(link => {
    link.addEventListener('click', function() {
        burger_menu.style.display = 'none';
        overlay.style.display = 'none';
    });
});*/

const burger_menu = document.querySelector('.burger_menu');
const overlay = document.querySelector('.overlay');
const burger_links = document.querySelectorAll('.burger_link')

document.querySelector('.burger_button').addEventListener('click', function() {
    burger_menu.classList.toggle('active')
    overlay.classList.toggle('active')
}) 

document.querySelector('.close_burger').addEventListener('click', function() {
    burger_menu.classList.toggle('active')
    overlay.classList.toggle('active')
})

overlay.addEventListener('click', function() {
    burger_menu.classList.toggle('active')
    overlay.classList.toggle('active')
})

burger_links.forEach(link => {
    link.addEventListener('click', function() {
        burger_menu.classList.toggle('active')
    overlay.classList.toggle('active')
    });
});

burgerMenu.addEventListener('click', function(e) {
    e.stopPropagation();
});
