let text = document.getElementById('text');
let mountain = document.getElementById('mountain')
let man = document.getElementById('man')

window.addEventListener('scroll',() =>{
    let value = window.scrollY
    text.style.marginTop = value * -1.5 + "px";
    sky.style.top = value * -2.5 + "px";
    hill2.style.top = value * -2.5 + "px";
    man.style.top = value * 1.5 + "px";

})