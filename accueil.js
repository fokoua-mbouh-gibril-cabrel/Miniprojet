var b = document.querySelector('.bouton1')
var a = document.querySelector('.formulaire')
var c = document.querySelector('.motEntete')
var BodyAmburger = document.querySelector('.bodyAmburger')
var Amburger = document.querySelector('.amburger')
var supprimer = document.querySelector('.sup')
b.addEventListener('click',function (){
   a.style.display = 'block' 
   b.style.opacity = '0' 
   c.style.opacity = '0'
})
Amburger.addEventListener('click',function (){
   BodyAmburger.style.display = 'block'
})
supprimer.addEventListener('click',function(){
   BodyAmburger.style.display = 'none'
   BodyAmburger.style.transition = 'display 0.6s'
})
document.querySelector('.envoie').addEventListener('click',()=>{
   document.querySelector('.bouton1').style.display = 'none'
})