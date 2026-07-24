const balloons = document.querySelectorAll(".balloon");
const result = document.getElementById("result");
const score = document.getElementById("score");

let points = 0;

// 今は3番目（「家」）を正解にしている
const correctIndex = 2;

balloons.forEach((balloon, index) => {
  balloon.addEventListener("click", () => {

    if (index === correctIndex) {
      points += 10;
      score.textContent = "Score: " + points;
      result.textContent = "🎉 Correct!";
    } else {
      result.textContent = "❌ Oops!";
    }

  });
});
