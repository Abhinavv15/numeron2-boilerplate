// Iteration 8: Making scoreboard functional
let score=localStorage.getItem("scoreValue");
document.getElementById("score-board").innerText=score;


function startGame(){
    location.href="./game.html";
}