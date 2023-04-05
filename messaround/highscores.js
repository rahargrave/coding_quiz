const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keydown", () =>{
    console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

saveHighScore = (event) => {
    console.log("SAVE BUTTON");
    event.preventDefault();
    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highScores.push(score);
    console.log(highScores);
};