function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
// ==============================================================
//     RANDOM BACKGROUND COLOR RUNTIME
// ==============================================================

const stopBtn = document.querySelector('[data-stop]');
const startBtn = document.querySelector('[data-start]');
const loadBg = document.body;
let loadHex = null;
let hexAction = false;

const hexPlay = () => {
        loadBg.style.backgroundColor = getRandomHexColor();
        loadBg.style.transition = "background-color ease-in-out 500ms"; 
};



startBtn.addEventListener('click', function() {
        startBtn.disabled = "true";
        stopBtn.removeAttribute('disabled');
        loadHex = setInterval(hexPlay,1000);
});

stopBtn.addEventListener('click', function() {
        stopBtn.disabled = "true"; 
        startBtn.removeAttribute('disabled');
        clearInterval(loadHex);
        console.log("set:", hexAction);
});