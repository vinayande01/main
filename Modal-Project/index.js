'use strict'
var showmodal=document.querySelectorAll(".show-modal")
for (var i=0 ; i < showmodal.length ; i++){
        showmodal[i].addEventListener('click',function (){
        document.querySelector('.modal').classList.remove('hidden');
        document.querySelector('.overlay').classList.remove('hidden');

    })
}
document.querySelector('.close-modal').addEventListener('click',function(){
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
})
document.querySelector('.overlay').addEventListener('click',function(){
    document.querySelector('.modal').classList.add('hidden');
    document.querySelector('.overlay').classList.add('hidden');
})

document.addEventListener('keydown',function(e){
    if (e.key === "Escape"){
        document.querySelector('.modal').classList.add('hidden');
        document.querySelector('.overlay').classList.add('hidden');


    }

})