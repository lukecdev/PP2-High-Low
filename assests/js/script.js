
/** Game is to generate two seperate mountain ranges and is asking two is the first mounatin
 * higher or lower than the second mountain. The user presses the higher button or lower button. 
 * If the answer is correct the game continues and if incorrect the game ends.
 */


let questionText = document.getElementById("question-text");
let answerButtons = document.getElementsByClassName("btn-answer");
let questionDisplay = document.getElementById("quiz-area");

let homeDisplay = document.getElementById("start");
const answerBox = document.getElementById("end-box");

let score;
let currentQuestion;
let questionSet;

function startGame(questions) {
    score = 0;
    currentQuestion = 0;
    questionSet = questions;
    displayQuestion();
}

function displayQuestion() {
    if (currentQuestion + 1 > questionSet.length){
        gameOver();
    } else {
        questionText.innerHTML = questionSet[currentQuestion].question;
        for (let i = 0; i + 1 <= answerButtons.length; i++) {
            answerButtons[i].innerHTML = questionSet[currentQuestion].choices[i];
            answerButtons[i].dataset.answer = questionSet[currentQuestion].choices[i];
        }
    }
}

function checkAnswer(clickedAnswer) {
    if (clickedAnswer.dataset.answer == questionSet[currentQuestion].correct) {
        score++;
        alert("Correct!");
    } else {
        alert("Incorrect :(");
    }
    currentQuestion++;
    displayQuestion();
}

/* Click the rules button for the rules section to appear
 * hide start and question section */
function rulesDisplay() {
    var rhide = document.getElementById("rules");

    if(rhide.style.display === "none") {
        rhide.style.display = "block";
        homeDisplay.style.display = "none";
        questionDisplay.style.display = "none";
    }

    else {
        rhide.style.display = "none";
        homeDisplay.style.display = "block";
        questionDisplay.style.display = "block";
    }
}
/*
function gameOver() {
    alert("Game Over! You got " + score + " out of 10 correct!");
    location.reload();


    answerBox.style.display = "block";

    incrementScore = num => {
    score += num;
    scoreText.innerText = score;
};
} */

function darkMode() {
    var element = document.getElementById("start","quiz-area");
    element.classList.toggle("dark-mode");
}


function gameOver() {

    const scoreBox = document.getElementById("score-box");
    if (score <= 0) {
        scoreBox.innerText = "Your score is " + score + " out of 6  correct!" 
    }
    
    displayQuestion.style.display = "none";
    
   
    
}
    



/*
function hideRules(){
    start.style.display = "none"
    quiz-HTMLTextAreaElement.style.display = "block"
}

function gameOver() {
    alert("Game Over! You scored " + score + " points!");
    location.reload();
}

let rulesDisplay = document.getElementById("rules");


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

