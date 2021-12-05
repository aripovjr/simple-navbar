const nav = document.querySelector('.navbar')
const menuUL = document.querySelector('.menu')
const btn = document.querySelector('#btn')

btn.addEventListener('click', ()=>{
    nav.classList.toggle('toggle')
    menuUL.classList.toggle('show')
   
})