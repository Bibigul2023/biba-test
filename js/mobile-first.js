const burgerButton = document.getElementById('burger');
const navList = document.getElementById('nav-list');

burgerButton.addEventListener('click', (e)=> {
  burgerButton.classList.toogle('burger-open')
navList.classList.toggle('hidden-display');
})