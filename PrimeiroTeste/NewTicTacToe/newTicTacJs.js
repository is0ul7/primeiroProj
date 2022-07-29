const CONTROLS = [
    butn1 = document.getElementById("b1"),
    butn2 = document.getElementById("b2"),
    butn3 = document.getElementById("b3"),
    butn4 = document.getElementById("b4"),
    butn5 = document.getElementById("b5"),
    butn6 = document.getElementById("b6"),
    butn7 = document.getElementById("b7"),
    butn8 = document.getElementById("b8"),
    butn9 = document.getElementById("b9"),
];

const sbmButton1 = document.getElementById("sbmButton1");
const sbmButton2 = document.getElementById("sbmButton2");
const scoreP1 = document.getElementById("scoreP1");
const scoreP2 = document.getElementById("scoreP2");
const nextRoundBtn = document.getElementById("nextRoundBtn")
const restartButton = document.getElementById("restartBtn");
let result = document.getElementById("result");
const PLAYER1 = "x";
const PLAYER2 = "o";
let checkTurn;
let currentPlayer;
let currentPlayerName;
let player1Name = "";
let player2Name = "";
let p1score = 0;
let p2score = 0;

nextRoundBtn.addEventListener("click", nextRound);
restartButton.addEventListener("click", gameStart);

gameStart();
sbmButton1.onclick = function () {
    player1Name = document.getElementById("player1Name").value;
    document.getElementById("output1").innerHTML = player1Name;
    document.getElementById("player1Name").value = "";
};
sbmButton2.onclick = function () {
    player2Name = document.getElementById("player2Name").value;
    document.getElementById("output2").innerHTML = player2Name;
    document.getElementById("player2Name").value = "";
};

function gameStart() {
    checkTurn = true;
    currentPlayerName = true;
    CONTROLS.forEach(butn => {

        butn.addEventListener("click", toggleOnClick, { once: true })
        butn.textContent = "";
        result.innerHTML = "Result: ";
        freeSpace = 9;
        document.getElementById("output1").innerHTML = "";
        document.getElementById("output2").innerHTML = "";
        resScore(p1score = 0, p2score = 0);
    });
};

function nextRound() {
    checkTurn = true;
    currentPlayerName = true;
    CONTROLS.forEach(butn => {
        butn.addEventListener("click", toggleOnClick, { once: true })
        butn.textContent = "";
        result.innerHTML = "Result: ";
        freeSpace = 9;
    });
    
};

function toggleOnClick(event) {
    butn = event.target;
    currentPlayer = checkTurn ? PLAYER1 : PLAYER2;
    currentPlayerName = checkTurn ? player1Name : player2Name;
    butn.textContent = currentPlayer;
    checkTurn = !checkTurn;
    freeSpace--;
    checkWin();
};

function gameEnd() {
    CONTROLS.forEach(butn => {
        butn.removeEventListener("click", toggleOnClick);
    });
};

function checkWin() {
    if (butn1.innerHTML, butn4.innerHTML, butn3.innerHTML !== "" &&
        butn1.innerHTML === butn2.innerHTML &&
        butn1.innerHTML === butn3.innerHTML &&
        butn2.innerHTML === butn3.innerHTML) {
            Result();
            gameEnd();
    } else if (
        butn4.innerHTML, butn5.innerHTML, butn6.innerHTML !== "" &&
        butn4.innerHTML === butn5.innerHTML &&
        butn4.innerHTML === butn6.innerHTML &&
        butn5.innerHTML === butn6.innerHTML) {
            Result();
            gameEnd();
    } else if (
        butn7.innerHTML, butn8.innerHTML, butn9.innerHTML !== "" &&
        butn7.innerHTML === butn8.innerHTML &&
        butn7.innerHTML === butn9.innerHTML &&
        butn8.innerHTML === butn9.innerHTML) {
            Result();
            gameEnd();
    } else if (
        butn1.innerHTML, butn4.innerHTML, butn7.innerHTML !== "" &&
        butn1.innerHTML === butn4.innerHTML &&
        butn1.innerHTML === butn7.innerHTML &&
        butn4.innerHTML === butn7.innerHTML) {
            Result();
            gameEnd();
    } else if (
        butn2.innerHTML, butn5.innerHTML, butn8.innerHTML !== "" &&
        butn2.innerHTML === butn5.innerHTML &&
        butn2.innerHTML === butn8.innerHTML &&
        butn5.innerHTML === butn8.innerHTML) {
            Result();
            gameEnd();
    } else if (
        butn3.innerHTML, butn6.innerHTML, butn9.innerHTML !== "" &&
        butn3.innerHTML === butn6.innerHTML &&
        butn3.innerHTML === butn9.innerHTML &&
        butn6.innerHTML === butn9.innerHTML) {
            Result();
            gameEnd();
    } else if (
        butn3.innerHTML, butn5.innerHTML, butn7.innerHTML !== "" &&
        butn3.innerHTML === butn5.innerHTML &&
        butn3.innerHTML === butn7.innerHTML &&
        butn5.innerHTML === butn7.innerHTML) {
            Result();
            gameEnd();
    } else if (
        butn1.innerHTML, butn5.innerHTML, butn9.innerHTML !== "" &&
        butn1.innerHTML === butn5.innerHTML &&
        butn1.innerHTML === butn9.innerHTML &&
        butn5.innerHTML === butn9.innerHTML) {
            Result();
            gameEnd();
    } else {
        itsDraw()
        
    };
};

function itsDraw() {
    if (freeSpace === 0) {
        result.innerHTML = "Result: Draw!!!";
        gameEnd();
    };
};

function Result() {
    score()
    result.innerHTML = "Result: " + currentPlayerName + " WINS!!!";
};


function score() {
    if (currentPlayer === PLAYER1) {
        p1score++;
        scoreP1.innerHTML = p1score;
    } else  
    p2score++;
    scoreP2.innerHTML = p2score;
};

function resScore() {
    scoreP1.innerHTML = 0
    scoreP2.innerHTML = 0
};
