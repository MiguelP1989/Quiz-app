const saveHighScore = document.getElementById("saveScoreBtn");
const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");

const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

const highscores = JSON.parse(localStorage.getItem("highscores")) || [];
console.log(highscores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  console.log(username.value);
  saveScoreBtn.disabled = !username.value;
});

saveHighScore.addEventListener("click", e => {
  e.preventDefault();

  const score = {
    score: Math.floor(Math.random() * 100),
    name: username.value
  };

  highscores.push(score);
  highscores.sort((a, b) => {
    return b.score - a.score;
  });
  highscores.splice(5);

  localStorage.setItem("highscores", JSON.stringify(highscores));
  window.location.assign("app.html");

  console.log("score", score);
  console.log("highscores", highscores);
});
