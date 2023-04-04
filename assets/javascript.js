const timeEl = document.getElementById("timer")
const startButton = document.getElementById("start")

const myQuestions = [
    {
        id: 1,
        question1: "String values must be enclosed within ______ when being assigned to variables",
        answers: {
            1.:"commas",
            2.:"curly brackets",
            3.:"quotes",
            4.:"parenthesis"
        },
        correctAnswer:"2."
    },
    {
        question2:"A very usefool tool used during development and debugging for printing content to the debugger is:",
        answers: {
            1.:"JavaScript",
            2.:"terminal/bash",
            3.:"for loops",
            4.:"console.log"
        },
        correctAnswer:"3."
    },
    {
        question3:"Commonly used data types DO NOT include:",
        answers: {
            1.:"strings",
            2.:"booleans",
            3.:"alerts",
            4.:"numbers"
        },
        correctAnswer:"2."
    },
    {
        question4:"The condition in an if / else statement is enclosed with ______",
        answers: {
            1.:"quotes",
            2.:"curly brackets",
            3.:"parenthesis",
            4.:"square brackets"
        },
        correctAnswer:"3."
    },
    {
        question5:"Arrays in JavaScript can be used to store ________",
        answers: {
            1.:"numbers and strings",
            2.:"other arrays",
            3.:"booleans",
            4.:"all of the above"
        },
        correctAnswer:"4."
    }
];



document.getElementById("start").onclick = function generateQuiz(){
    console.log("start");

    //removes start
    const element = document.getElementById("start");
    element.remove();

    //timer
    var count = 60;
    var timer = setInterval(function() {
    console.log(count);
    count--;
    timeEl.textContent = count + " seconds left";
    if(count === 0) {
    stopInterval()
    timeEl.textContent = "Out of TIME!";
    }
    }, 1000);

    var stopInterval = function() {
    console.log('time is up!');
    clearInterval(timer);
    }

    //QUESTION 1
    const question1 = document.createElement("p");
    question1.innerText = "String values must be enclosed within ______ when being assigned to variables";
    document.body.appendChild(question1);
    const answer1 = document.createElement("button");
    answer1.innerText = "commas";
    document.body.appendChild(answer1);
    const answer2 = document.createElement("button");
    answer2.innerText = "quotes";
    document.body.appendChild(answer2);
    const answer3 = document.createElement("button");
    answer3.innerText = "curly brackets";
    document.body.appendChild(answer3);
    const answer4 = document.createElement("button");
    answer4.innerText = "parenthesis";
    document.body.appendChild(answer4);
    
    
        
    
}