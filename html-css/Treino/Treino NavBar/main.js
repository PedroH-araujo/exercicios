const menubtn = document.querySelector('#menu-btn')
const closebtn = document.querySelector('#close-btn')
const navbar = document.querySelector('nav .container ul')

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