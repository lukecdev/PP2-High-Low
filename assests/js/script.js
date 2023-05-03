
/** Game is to generate two seperate mountain ranges and is asking two is the first mounatin
 * higher or lower than the second mountain. The user presses the higher button or lower button. 

 */

//All declared variables that are used in the JS file

let questionText = document.getElementById("question-text");
let answerButtons = document.getElementsByClassName("btn-answer");
let questionDisplay = document.getElementById("quiz-area");

let buttonRules = document.getElementById("rules-button");

let quizStartNA = document.getElementById("north-america");


let homeDisplay = document.getElementById("start-page");
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
        
        incrementScore();
    } else {
        
        incrementWrongAnswer();
    }
    currentQuestion++;
    displayQuestion();
}

function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;

}

function incrementWrongAnswer() {

    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
}

/* Click the rules button for the rules section to appear
 * hide start and question section */
function rulesDisplay() {
    var rhide = document.getElementById("rules");

    if(rhide.style.display === "none") {
        rhide.style.display = "block";
        
        homeDisplay.style.display = "none";
        questionDisplay.style.display = "none";
        buttonRules.innerHTML = "Home";
    }
    else {
        rhide.style.display = "none";
        homeDisplay.style.display = "block";
        
        buttonRules.innerHTML = "Rules";
    }
}

function rulesHide() {
    var rulebtn = document.getElementByClassName("btn-rules");

    if(rulebtn.style.display = "block") {
        rulebtn.style.display = "none";
    }
}

function homeHide() {
    

    if(homeDisplay.style.display === "block") {
        homeDisplay.style.display = "none";
        questionDisplay.style.display = "block";
        buttonRules.style.display ="none";
        
    }
   
}

function darkMode() {
    var element = document.getElementById("start","quiz-area");
    element.classList.toggle("dark-mode");
}



function gameOver() {
    var finalshow = document.getElementById("final-page");
    
    if(finalshow.style.display === "none") {
        finalshow.style.display = "block";
        
        homeDisplay.style.display = "none";
        questionDisplay.style.display = "none";
        document.getElementById("final-score").innerHTML ="Game Over! You scored " + score + " points!";
    }
    else {
        location.reload();
    }
}

function reload() {
    location.reload();
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

let rulesButton = document.getElementsByClassName("btn-rules");
*/



