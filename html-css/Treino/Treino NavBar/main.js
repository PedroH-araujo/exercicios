const menubtn = document.querySelector('#menu-btn')
const closebtn = document.querySelector('#close-btn')
const navbar = document.querySelector('nav .container ul')

menubtn.addEventListener('click', () => {
   navbar.style.display = 'block';
   menubtn.style.display = 'none';
   closebtn.style.display = 'inline-block';
})
