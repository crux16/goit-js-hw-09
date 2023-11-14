function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Notify
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ==============================================================
//     RANDOM BACKGROUND COLOR CHANGE RUNTIME
// ==============================================================

const stopBtn = document.querySelector('[data-stop]');
const startBtn = document.querySelector('[data-start]');
const loadBg = document.body;
stopBtn.disabled = true; 
let loadHex  = null;

const hexPlay = () => {
        loadBg.style.backgroundColor = getRandomHexColor();
        loadBg.style.transition = "background-color ease-in-out 500ms"; 
};  

startBtn.addEventListener('click', function() {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        loadHex = setInterval(hexPlay,1000);
        Notify.success('PLAY');
});

stopBtn.addEventListener('click', function() {
        stopBtn.disabled = true; 
        startBtn.disabled = false;
        Notify.failure('STOP');
        clearInterval(loadHex);
});