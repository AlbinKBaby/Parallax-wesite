let text = document.getElementById('text');
let sky = document.getElementById('sky')
let hill = document.getElementById('hill')
let man = document.getElementById('man')

window.addEventListener('scroll',() =>{
    let value = window.scrollY
   
    text.style.marginTop = value * 1 + "px";
    sky.style.top = value * -2 + "px";
    hill2.style.top = value * -1.5 + "px";
    man.style.top = value * -2.5 + "px";
})