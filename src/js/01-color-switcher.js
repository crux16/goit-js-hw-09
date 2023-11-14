function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

// Notify
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ==============================================================
//     RANDOM BACKGROUND COLOR CHANGE RUNTIME
// ==============================================================

const stopBtn = document.querySelector('button[data-stop]');
const startBtn = document.querySelector('button[data-start]');
const buttons = document.querySelectorAll('button');

// default Button and default Interval variable
stopBtn.disabled = true; 
let loadHex;

// optional default style
startBtn.style.backgroundColor = "rgba(0,255,0,1)";
stopBtn.style.backgroundColor = "rgba(255,0,0,0.5)";

// general style
buttons.forEach((button)=>{
        button.style.color = "#fcf";
        button.style.fontSize = "20px";
        button.style.border = "1px solid #fff";
        button.style.padding = "5px 15px";
        button.style.boxShadow = "0 0 1px #000";
        button.style.textShadow = "0 0 3px #000";
        button.style.transition = "text-decoration-color ease 1sec";
})

// ===============================================
//  METHOD or FUNCTION
// ===============================================

// function set a background color with transition
const hexPlay = () => {
        document.body.style.backgroundColor = getRandomHexColor();
        document.body.style.transition = "background-color ease-in-out 500ms"; 
};  

// addtional function to line-through text
const disabledBtn = (d) => {
        buttons.forEach((button)=>{button.style.textDecoration='none';button.style.textDecorationColor='transparent';});
        d.style.textDecoration='line-through #eee';
};

disabledBtn(stopBtn);

// ================================================

// Event action click for button Start
startBtn.addEventListener('click', function(event) {
        // set button into disabled and enabled
        startBtn.disabled = true;
        stopBtn.disabled = false;

        // line text style
        disabledBtn(event.currentTarget);

        // addtional styling
        startBtn.style.backgroundColor = "rgba(0,255,0,0.3)";
        stopBtn.style.backgroundColor = "rgba(255,0,0,1)";

        // reference variable for setInterval() method
        loadHex = setInterval(hexPlay,1000);

        // Notify Play mode message
        Notify.success('PLAY');
});

stopBtn.addEventListener('click', function(event) {
        // set button into disabled and enabled
        stopBtn.disabled = true; 
        startBtn.disabled = false;
        
        // line text style
        disabledBtn(event.currentTarget);

        // addtional styling
        startBtn.style.backgroundColor = "rgba(0,255,0,1)";
        stopBtn.style.backgroundColor = "rgba(255,0,0,0.5)";

        // by setting the variable inside the clearInterval() method will initiate clearing the variable 
        clearInterval(loadHex);
        
        // Notify Stop mode message
        Notify.failure('STOP');
});