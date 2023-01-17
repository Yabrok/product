var bgcolor = document.querySelector('body')
var btn = document.querySelector('.nightmod')
var btnMenu = document.querySelector('.js-nightmenu')

btn.addEventListener('click', function(){
    bgcolor.classList.toggle('dark');
})

btnMenu.addEventListener('click', ()=>{
    bgcolor.classList.toggle('dark');
})


