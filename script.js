const menuBtn = document.querySelector('.menuBtn');
const nav = document.querySelector('nav');
menuBtn .addEventListener('click',function(){
    this .classList.toggle('active');
    nav.classList.toggle('active');
})