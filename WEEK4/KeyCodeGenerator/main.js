
const displayKey = document.querySelector('.key h2');
const displayKeyCode = document.querySelector('.keyCode h2');
const keyCodeDiv = document.querySelector('.keyCode');
const overlay = document.querySelector('.overlay');

window.addEventListener('keydown',(e)=>{
    overlay.classList.add('hide');
    displayKey.innerText = e.key;
    displayKeyCode.innerText = e.code;
    if(e.code === 32){
        displayKey.innerText = `'space'`;
    }
})
