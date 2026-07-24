const balloons = document.querySelectorAll(".balloon");
const result = document.getElementById("result");
const score = document.getElementById("score");
const choices = document.getElementById("choices");
const questionBox = document.querySelector(".question-box");

let points = 0;
let correctAnswers = 0;
let gameFinished = false;

// 現在は3番目の「家」が正解
const correctIndex = 2;

balloons.forEach((balloon, index) => {
  balloon.addEventListener("click", () => {
    // クリア後はボタンを押せないようにする
    if (gameFinished) {
      return;
    }

    if (index === correctIndex) {
      points += 10;
      correctAnswers += 1;

      score.textContent = "Score： " + points;
      result.textContent =
        "🎉 正解！ あと " + (10 - correctAnswers) + " 問";

      // 10問正解したらクリア
      if (correctAnswers === 10) {
        gameFinished = true;

        questionBox.innerHTML = `
          <p>🎊 おめでとう！ 🎊</p>
          <h1 id="english-word">CLEAR!</h1>
          <p>10問正解しました！</p>
        `;

        choices.style.display = "none";
        result.textContent = "🏆 Score：100";
      }
    } else {
      result.textContent = "❌ ちがうよ。もう一度！";
    }
  });
});
