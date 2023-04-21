
/** Game is to generate two seperate mountain ranges and is asking two is the first mounatin
 * higher or lower than the second mountain. The user presses the higher button or lower button. 
 * If the answer is correct the game continues and if incorrect the game ends.
 */

// Scope Function Start //

const enter = document.getElementById("enter");
const homedisplay = document.getElementById("home-display");

/* Display and hiding sections of screen as the game moves forward*/
enter.addEventListener("click", () => {

    homedisplay = e.target.id
    gamedisplay.style.display = "block";
    showgame();
});

function showgame(){
    homedisplay.style.display = "none"
}