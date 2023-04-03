const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const startButton = document.getElementById("start")
const submitButton = document.getElementById("submit");

function quiz(){

}

function results(){

}

quiz();

submitButton.addEventListener("click", showHighScores);

const questions = [
    {
        question: "String values must be enclosed within ______ when being assigned to variables",
        answers: {
            1.:"commas",
            2.:"curly brackets",
            3.:"quotes",
            4.:"parenthesis"
        },
        correctAnswer:"2."
    },
    {
        question:"A very usefool tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1.:"JavaScript",
            2.:"terminal/bash",
            3.:"for loops",
            4.:"console.log"
        },
        correctAnswer:"3."
    },
    {
        question:"Commonly used data types DO NOT include:",
        answers: {
            1.:"strings",
            2.:"booleans",
            3.:"alerts",
            4.:"numbers"
        },
        correctAnswer:"2."
    },
    {
        question:"The condition in an if / else statement is enclosed with ______",
        answers: {
            1.:"quotes",
            2.:"curly brackets",
            3.:"parenthesis",
            4.:"square brackets"
        },
        correctAnswer:"3."
    },
    {
        question:"Arrays in JavaScript can be used to store ________",
        answers: {
            1.:"numbers and strings",
            2.:"other arrays",
            3.:"booleans",
            4.:"all of the above"
        },
        correctAnswer:"4."
    }
];