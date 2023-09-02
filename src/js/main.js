const char = document.getElementById("character");
let moveStep = 10;
const myGame = document.getElementById('myGame');

window.addEventListener('load', ()=> {
    char.style.position = 'absolute';
    char.style.left = '210px';
    char.style.bottom = '0';
})


window.addEventListener("keydown", (e) =>{
    switch (e.key){
        case 'ArrowLeft':
            char.style.left = parseInt(char.style.left) - moveStep + 'px';
            break;
        case 'ArrowRight':
            char.style.left = parseInt(char.style.left) + moveStep + 'px';
            break;
        case 'ArrowUp':
            char.style.bottom = parseInt(char.style.bottom) + moveStep + 'px';
            break;
        case 'ArrowDown':
            char.style.bottom = parseInt(char.style.bottom) - moveStep + 'px';
            break;
    }
});





