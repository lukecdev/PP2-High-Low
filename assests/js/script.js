/* JS for quiz area */

//variables

let questionText = document.getElementById("question-text");
let answerButtons = document.getElementsByClassName("btn-answer");
let questionDisplay = document.getElementById("quiz-area");
let buttonRules = document.getElementById("rules-button");
let homeDisplay = document.getElementById("start-page");
let score;
let currentQuestion; // index for current question
let questionSet; // index for selected question set

// Starts Quiz on click of topic
function startGame(questions) {
    score = 0;
    currentQuestion = 0;
    questionSet = questions;
    displayQuestion();   
}

// Displays questions of selected topic 
/** hides the start page and rules button */
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

  /**checks answer and increments score if correct
   * increments incorrect score if wrong
   */
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
        rhide.style.display = "inline-block";       
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

/*Hides start section */
function homeHide() {

    if(homeDisplay.style.display === "block") {
        homeDisplay.style.display = "none";
        questionDisplay.style.display = "block";
        buttonRules.style.display ="none";    
    }  
}

/* final page and final score */
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