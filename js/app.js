"use strict"

import { quizData } from "./data.js";

const player = document.getElementById("player");
const playerName = document.getElementById("playerName");
const addButton = document.getElementById("addButton");
const questionText = document.getElementById("questionText");
const questionA = document.getElementById("questionA");
const questionB = document.getElementById("questionB");
const questionC = document.getElementById("questionC");
const submitButton = document.getElementById("submitButton");

let currentQuizData = 0;
let score = 0;

addButton.addEventListener("click", () => {
    player.innerText += ` ${playerName.value}`;
    playerName.value = "";
})

questionText.innerText = quizData[currentQuizData].question;
questionA.innerText = quizData[currentQuizData].a;
questionB.innerText = quizData[currentQuizData].b;
questionC.innerText = quizData[currentQuizData].c;

submitButton.addEventListener("click", () => {
    const checkedInput = document.querySelector('input[name="answer"]:checked');

    if(checkedInput.value === quizData[currentQuizData].correct) {
        score += 1;
    }

    if(currentQuizData === (quizData.length - 1)) {
        alert("Quiz game has finished!");
        alert(`Score: ${score}`);
        if(score < 7) {
            alert("Ohhhhhh... Puntuación insuficiente. Repite para rescatar a Octocat!")
        }
        if(score >= 7) {
            alert("Enhorabuena! Has rescatado a Octocat!");
        }
        location.reload();
        return;
    }

    currentQuizData += 1;

    questionText.innerText = quizData[currentQuizData].question;
    questionA.innerText = quizData[currentQuizData].a;
    questionB.innerText = quizData[currentQuizData].b;
    questionC.innerText = quizData[currentQuizData].c;

    checkedInput.checked = false;
})

