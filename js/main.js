// var bgcolor = document.querySelector('.site-header')
// var switchbtn = document.querySelector('.nightmod')

// switchbtn.addEventListener("click", function(){
//     bgcolor.classList.toggle('dark');
// });
var bgcolor = document.querySelector('body')
var btn = document.querySelector('.nightmod')

btn.addEventListener('click', function(){
    bgcolor.classList.toggle('dark');
})
