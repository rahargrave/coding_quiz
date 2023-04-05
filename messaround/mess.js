const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const timeEl = document.getElementById("timer");
console.log(choices);

var currentQuestion = {};
var acceptingAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

var questions = [
  {
    question: "String values must be enclosed within ______ when being assigned to variables",
        C1:"commas",
        C2:"curly brackets",
        C3:"quotes",
        C4:"parenthesis",
        correctAnswer: 2
  },
  {
    question:"A very usefool tool used during development and debugging for printing content to the debugger is:",
        C1:"JavaScript",
        C2:"terminal/bash",
        C3:"for loops",
        C4:"console.log",
        correctAnswer: 3
  },
  {
    question:"Commonly used data types DO NOT include:",
        C1:"strings",
        C2:"booleans",
        C3:"alerts",
        C4:"numbers",
        correctAnswer:2
  },
  {
    question:"The condition in an if / else statement is enclosed with ______",
        C1:"quotes",
        C2:"curly brackets",
        C3:"parenthesis",
        C4:"square brackets",
        correctAnswer: 3
  },
  {
    question:"Arrays in JavaScript can be used to store ________",
        C1:"numbers and strings",
        C2:"other arrays",
        C3:"booleans",
        C4:"all of the above",
        correctAnswer: 4
  }    
]

const maxQuestions = 5;

document.getElementById("start").onclick = function generateQuiz(){
  console.log("start");

  //removes start
  const element = document.getElementById("start");
  element.remove();
  var count = 10;
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

startGame = () => {
  
  questionCounter = 0;
  score = 0
  availableQuestions = [...questions];
  console.log(availableQuestions);
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
    return window.location.assign("highscores.html")
  }
  questionCounter++;
  const questionIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionIndex];
  question.innerText = currentQuestion.question;

  choices.forEach( choice => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["C" + number];
  })

  //takes out already used question
  availableQuestions.splice(questionIndex, 1);
  acceptingAnswers = true;
};

choices.forEach(choice => {
  choice.addEventListener("click", event => {
    console.log(event.targert);
    if(!acceptingAnswers) return;
    acceptingAnswers = false;
    const selectedChoice = event.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    console.log(selectedAnswer);
    getNewQuestion();

  })
})

startGame();
}