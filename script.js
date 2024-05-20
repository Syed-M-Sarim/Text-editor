var Bold = document.getElementById('bold')
var Italic = document.getElementById('italic')
var Underline = document.getElementById('underline')
var Hero = document.getElementById('hero') 

Bold.addEventListener('click', function() {
    hero.style.fontWeight = '900' 
})
Italic.addEventListener('click', function(){
    hero.style.fontStyle = 'Italic' 
})
Underline.addEventListener('click', function(){
    hero.style.textDecoration = 'underline'
})