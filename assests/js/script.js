
/** Game is to generate two seperate mountain ranges and is asking two is the first mounatin
 * higher or lower than the second mountain. The user presses the higher button or lower button. 
 * If the answer is correct the game continues and if incorrect the game ends.
 */


let questionText = document.getElementById("question-text");
let answerButtons = document.getElementsByClassName("btn-answer");

let score;
let currentQuestion;
let questionSet;

function startGame(questions) {
    score = 1;
    currentQuestion = 1;
    
}


/* 
const mt1 = document.getElementById('mt1')
const mt2 = document.getElementById('mt2')
const higher = document.getElementById('higher')
const lower = document.getElementById('lower')
const possibleChoice = document.querySelectorAll('button')
let mt1

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click',() => {
    mt1 = e.target.id
    mt2.innerHTML = mt1
}))

// Scope Function Start //
/*
function() {
    fnReset();
}

const enter = document.getElementById("enter");
const homedisplay = document.getElementById("home-display");
const rules = document.getElementById("rules");

function fnReset() {
    document.getElementById('game-display').classList.remove('quizhide');
}

/* Display and hiding sections of screen as the game moves forward*
enter.addEventListener("click", () => {

    
    showgame();
    showrules();
});

function showgame(){
    homedisplay.style.display = "none"
}

function showrules() {
    homedisplay.style.display = "hidden"
} */

