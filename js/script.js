const toggle = document.querySelector('.fa-bars');
const nav_bar = document.querySelector('.nav_bar');


toggle.addEventListener('click',function(e){
    e.preventDefault();
nav_bar.classList.toggle('active');
});

