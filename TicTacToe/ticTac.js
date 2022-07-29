const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WIN_COMBO = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]


const cellElements = document.querySelectorAll("[data-cell]");
const gameBoard = document.getElementById("gameBoard");
const winningMssgElement = document.getElementById("winning-mssg");
const winningMssgTextElement = document.querySelector("[data-winning-mssg-text]");
const restartBtn = document.getElementById("restartButton");
const nextRoundBtn = document.getElementById("nextRound");
const sbmButton1 = document.getElementById("sbmButton1");
const sbmButton2 = document.getElementById("sbmButton2");
const scoreP1 = document.getElementById("scoreP1");
const scoreP2 = document.getElementById("scoreP2");
let circleTurn;
let p1score = 0;
let p2score = 0;
let player1List = [];
let player2List = [];

gameStart()
sbmButton1.onclick = function () {
    let player1Name = document.getElementById("player1Name").value;
    document.getElementById("output1").innerHTML = player1Name;
    player1List.push(player1Name);
    document.getElementById("player1Name").value = "";
};
sbmButton2.onclick = function () {
    let player2Name = document.getElementById("player2Name").value;
    document.getElementById("output2").innerHTML = player2Name;
    player2List.push(player2Name);
    document.getElementById("player2Name").value = "";
};


nextRoundBtn.addEventListener("click", nextRound)
restartBtn.addEventListener("click", gameStart);

function gameStart() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, { once: true });
        resScore1();
        resScore2();
        document.getElementById("output1").innerHTML = "";
        document.getElementById("output2").innerHTML = "";
    });
    setGameBoardHoverClass();
    winningMssgElement.classList.remove("show");
};

function nextRound() {
    circleTurn = false;
    cellElements.forEach(cell => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(CIRCLE_CLASS);
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, { once: true });
    });
    setGameBoardHoverClass();
    winningMssgElement.classList.remove("show");
};


function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;
    placeMark(cell, currentClass);
    if (checkWin(currentClass)) {
        gameEnd(false);
    } else if (isDraw()) {
        gameEnd(true);
    } else {
        swapTurns();
        setGameBoardHoverClass();
    }
};

function gameEnd(draw) {
    if (draw) {
        winningMssgTextElement.innerText = "Draw!";
    } else {
        winningMssgTextElement.innerText = `${circleTurn ?  player2List.slice(-1) : player1List.slice(-1)} Wins!`;
        circleTurn ?  score2() : score1();
    }
    winningMssgElement.classList.add("show");
};
function isDraw() {
    return [...cellElements].every(cell => {
        return cell.classList.contains(X_CLASS) ||
            cell.classList.contains(CIRCLE_CLASS);
    });
    ;
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
};

function swapTurns() {
    circleTurn = !circleTurn;
};

function setGameBoardHoverClass() {
    gameBoard.classList.remove(X_CLASS);
    gameBoard.classList.remove(CIRCLE_CLASS);
    if (circleTurn) {
        gameBoard.classList.add(CIRCLE_CLASS);
    } else
        gameBoard.classList.add(X_CLASS);
};

function checkWin(currentClass) {
    return WIN_COMBO.some(combinations => {
        return combinations.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
};

function score1() {
    p1score++;
    scoreP1.innerHTML = p1score;
};
function score2() {
    p2score++;
    scoreP2.innerHTML = p1score;
};
function resScore1() {
    scoreP1.innerHTML = 0
};
function resScore2() {
    scoreP2.innerHTML = 0
};