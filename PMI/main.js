//MOSTRAR E ESCONDER NAV BAR NO MOBILE
const menubtn = document.querySelector('#menu-btn')
const closebtn = document.querySelector('#close-btn')
const navbar = document.querySelector('#menu-bar')
const navlist = document.querySelector("#navList")


window.addEventListener('resize', () => {
  if(window.getComputedStyle(navlist).display == 'flex'){
    menubtn.style.display = 'none';
    closebtn.style.display = 'none';
    navbar.style.display = 'none';
  } else {
    menubtn.style.display = 'inline-block';
    if(window.getComputedStyle(navbar).display == 'block'){
      menubtn.style.display = 'none';
  }}
} )


menubtn.addEventListener('click', function() {
  navbar.style.display = 'block';
  menubtn.style.display = 'none';
  closebtn.style.display = 'inline-block';
})

closebtn.addEventListener('click', () => {
  navbar.style.display = 'none';
  closebtn.style.display = 'none';
  menubtn.style.display = 'inline-block';
})


var swiper = new Swiper(".swiper", {
   spaceBetween: 30,
   centeredSlides: true,
   autoplay: {
     delay: 3000,
     disableOnInteraction: false,
   },
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });
