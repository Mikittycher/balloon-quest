// ==============================
// 英検5級 Balloon Quest
// 100語の単語データ
// ==============================

const questions = [
  // 学校・勉強
  { word: "book", answer: "本", type: "noun" },
  { word: "pen", answer: "ペン", type: "noun" },
  { word: "desk", answer: "机", type: "noun" },
  { word: "chair", answer: "椅子", type: "noun" },
  { word: "teacher", answer: "先生", type: "noun" },
  { word: "student", answer: "生徒", type: "noun" },
  { word: "school", answer: "学校", type: "noun" },
  { word: "class", answer: "授業", type: "noun" },
  { word: "bag", answer: "かばん", type: "noun" },
  { word: "computer", answer: "コンピュータ", type: "noun" },

  // 家族・人
  { word: "father", answer: "父親", type: "noun" },
  { word: "mother", answer: "母親", type: "noun" },
  { word: "brother", answer: "兄・弟", type: "noun" },
  { word: "sister", answer: "姉・妹", type: "noun" },
  { word: "friend", answer: "友達", type: "noun" },
  { word: "boy", answer: "男の子", type: "noun" },
  { word: "girl", answer: "女の子", type: "noun" },
  { word: "man", answer: "男性", type: "noun" },
  { word: "woman", answer: "女性", type: "noun" },
  { word: "family", answer: "家族", type: "noun" },

  // 食べ物・飲み物
  { word: "apple", answer: "りんご", type: "noun" },
  { word: "milk", answer: "牛乳", type: "noun" },
  { word: "water", answer: "水", type: "noun" },
  { word: "lunch", answer: "昼食", type: "noun" },
  { word: "dinner", answer: "夕食", type: "noun" },
  { word: "breakfast", answer: "朝食", type: "noun" },
  { word: "cake", answer: "ケーキ", type: "noun" },
  { word: "bread", answer: "パン", type: "noun" },
  { word: "egg", answer: "卵", type: "noun" },
  { word: "juice", answer: "ジュース", type: "noun" },

  // 曜日・時・場所
  { word: "Sunday", answer: "日曜日", type: "noun" },
  { word: "Monday", answer: "月曜日", type: "noun" },
  { word: "time", answer: "時間・時刻", type: "noun" },
  { word: "day", answer: "日", type: "noun" },
  { word: "today", answer: "今日", type: "noun" },
  { word: "house", answer: "家", type: "noun" },
  { word: "park", answer: "公園", type: "noun" },
  { word: "room", answer: "部屋", type: "noun" },
  { word: "station", answer: "駅", type: "noun" },
  { word: "store", answer: "店", type: "noun" },

  // 自然・生き物・その他
  { word: "dog", answer: "犬", type: "noun" },
  { word: "cat", answer: "猫", type: "noun" },
  { word: "bird", answer: "鳥", type: "noun" },
  { word: "sun", answer: "太陽", type: "noun" },
  { word: "weather", answer: "天気", type: "noun" },
  { word: "car", answer: "車", type: "noun" },
  { word: "bus", answer: "バス", type: "noun" },
  { word: "music", answer: "音楽", type: "noun" },
  { word: "sport", answer: "スポーツ", type: "noun" },
  { word: "picture", answer: "写真", type: "noun" },

  // 動作・行動
  { word: "play", answer: "遊ぶ", type: "verb" },
  { word: "run", answer: "走る", type: "verb" },
  { word: "walk", answer: "歩く", type: "verb" },
  { word: "swim", answer: "泳ぐ", type: "verb" },
  { word: "go", answer: "行く", type: "verb" },
  { word: "come", answer: "来る", type: "verb" },
  { word: "eat", answer: "食べる", type: "verb" },
  { word: "drink", answer: "飲む", type: "verb" },
  { word: "sleep", answer: "寝る", type: "verb" },
  { word: "cook", answer: "料理する", type: "verb" },

  // 学習・情報・コミュニケーション
  { word: "study", answer: "勉強する", type: "verb" },
  { word: "read", answer: "読む", type: "verb" },
  { word: "write", answer: "書く", type: "verb" },
  { word: "speak", answer: "話す", type: "verb" },
  { word: "listen", answer: "聴く", type: "verb" },
  { word: "hear", answer: "聞こえる", type: "verb" },
  { word: "know", answer: "知っている", type: "verb" },
  { word: "learn", answer: "学ぶ", type: "verb" },
  { word: "talk", answer: "話す", type: "verb" },
  { word: "ask", answer: "尋ねる", type: "verb" },

  // 気持ち・所有・その他
  { word: "like", answer: "好き", type: "verb" },
  { word: "want", answer: "欲しい", type: "verb" },
  { word: "have", answer: "持っている", type: "verb" },
  { word: "look", answer: "見る", type: "verb" },
  { word: "see", answer: "見る", type: "verb" },
  { word: "make", answer: "作る", type: "verb" },
  { word: "use", answer: "使う", type: "verb" },
  { word: "buy", answer: "買う", type: "verb" },
  { word: "live", answer: "住んでいる", type: "verb" },
  { word: "help", answer: "手伝う", type: "verb" },

  // 状態・性質
  { word: "good", answer: "良い", type: "adjective" },
  { word: "bad", answer: "悪い", type: "adjective" },
  { word: "big", answer: "大きい", type: "adjective" },
  { word: "small", answer: "小さい", type: "adjective" },
  { word: "hot", answer: "暑い", type: "adjective" },
  { word: "cold", answer: "寒い", type: "adjective" },
  { word: "new", answer: "新しい", type: "adjective" },
  { word: "old", answer: "古い", type: "adjective" },
  { word: "busy", answer: "忙しい", type: "adjective" },
  { word: "fine", answer: "元気な", type: "adjective" },

  // 感情・外見・色
  { word: "happy", answer: "幸せな", type: "adjective" },
  { word: "sad", answer: "悲しい", type: "adjective" },
  { word: "cute", answer: "かわいい", type: "adjective" },
  { word: "tall", answer: "背が高い", type: "adjective" },
  { word: "red", answer: "赤い", type: "adjective" },
  { word: "blue", answer: "青い", type: "adjective" },
  { word: "white", answer: "白い", type: "adjective" },
  { word: "black", answer: "黒い", type: "adjective" },
  { word: "favorite", answer: "お気に入りの", type: "adjective" },
  { word: "kind", answer: "親切な", type: "adjective" }
];

// ==============================
// ゲーム設定
// ==============================

let score = 0;
let lives = 3;
let currentQuestion = null;
let usedWords = [];
let gameFinished = false;

// HTMLの部品を見つける
const wordElement =
  document.querySelector("#word") ||
  document.querySelector("#english-word");

const scoreElement =
  document.querySelector("#score");

const livesElement =
  document.querySelector("#lives");

const resultElement =
  document.querySelector("#result") ||
  document.querySelector("#message");

const speakButton =
  document.querySelector("#speak-button") ||
  document.querySelector("#speak-btn") ||
  document.querySelector("#pronunciation-button") ||
  document.querySelector(".speak-button") ||
  document.querySelector(".speak-btn") ||
  [...document.querySelectorAll("button")].find(button =>
    button.textContent.includes("発音")
  );

let answerButtons = document.querySelectorAll(
  "button.balloon, .answer-btn, .choice"
);

// 上の方法で見つからなかった場合
if (answerButtons.length === 0) {
  answerButtons = document.querySelectorAll("#answers button");
}
function playPopSound() {
  const audio = new (window.AudioContext || window.webkitAudioContext)();

  const osc = audio.createOscillator();
  const gain = audio.createGain();

  osc.type = "triangle";
  osc.frequency.setValueAtTime(500, audio.currentTime);

  gain.gain.setValueAtTime(0.3, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(
    0.001,
    audio.currentTime + 0.15
  );

  osc.connect(gain);
  gain.connect(audio.destination);

  osc.start();
  osc.stop(audio.currentTime + 0.15);
}
// ==============================
// 配列をランダムに並べ替える
// ==============================

function shuffle(array) {
  const copiedArray = [...array];

  for (let i = copiedArray.length - 1; i > 0; i--) {
    const randomNumber = Math.floor(Math.random() * (i + 1));

    [copiedArray[i], copiedArray[randomNumber]] =
      [copiedArray[randomNumber], copiedArray[i]];
  }

  return copiedArray;
}

// ==============================
// 次の問題を選ぶ
// ==============================

function getNextQuestion() {
  let availableQuestions = questions.filter(
    question => !usedWords.includes(question.word)
  );

  // 100語すべて出題したら、最初から使えるようにする
  if (availableQuestions.length === 0) {
    usedWords = [];
    availableQuestions = [...questions];
  }

  const randomIndex = Math.floor(
    Math.random() * availableQuestions.length
  );

  const selectedQuestion = availableQuestions[randomIndex];

  usedWords.push(selectedQuestion.word);

  return selectedQuestion;
}

// ==============================
// 4つの選択肢を自動で作る
// ==============================

function makeChoices(question) {
  // 正解と同じ品詞の単語を使う
  const sameTypeQuestions = questions.filter(item =>
    item.type === question.type &&
    item.word !== question.word &&
    item.answer !== question.answer
  );

  const wrongAnswers = shuffle(sameTypeQuestions)
    .slice(0, 3)
    .map(item => item.answer);

  const choices = [question.answer, ...wrongAnswers];

  return shuffle(choices);
}

// ==============================
// 問題を表示する
// ==============================

function showQuestion() {
  if (gameFinished) {
    return;
  }

  currentQuestion = getNextQuestion();
  const choices = makeChoices(currentQuestion);

  wordElement.textContent = currentQuestion.word;
  resultElement.textContent = "";

  answerButtons.forEach((button, index) => {
    button.textContent = choices[index];
    button.disabled = false;

    // 前の問題の色を元に戻す
    button.classList.remove("correct-answer");
    button.classList.remove("wrong-answer");
  });

  updateDisplay();
}

// ==============================
// 答えを確認する
// ==============================

function checkAnswer(event) {
  if (gameFinished) {
    return;
  }

  const selectedButton = event.currentTarget;
  const selectedAnswer = selectedButton.textContent;

  if (selectedAnswer === currentQuestion.answer) {
    score++;
playPopSound();
    resultElement.textContent = "せいかい！🎉";
    selectedButton.classList.add("correct-answer");

    answerButtons.forEach(button => {
      button.disabled = true;
    });

    updateDisplay();

    // 10問正解でクリア
    if (score >= 10) {
      clearGame();
      return;
    }

    setTimeout(showQuestion, 800);
  } else {
    lives--;

    resultElement.textContent = "おしい！もう一度考えてみよう";
    selectedButton.classList.add("wrong-answer");
    selectedButton.disabled = true;

    updateDisplay();

    if (lives <= 0) {
      gameOver();
    }
  }
}

// ==============================
// 得点とライフを表示する
// ==============================

function updateDisplay() {
  if (scoreElement) {
    scoreElement.textContent = score;
  }

  if (livesElement) {
    livesElement.textContent = "❤️".repeat(lives);
  }
}

// ==============================
// 10問正解したとき
// ==============================

function clearGame() {
  gameFinished = true;

  wordElement.textContent = "CLEAR!";
  resultElement.textContent = "10問正解！おめでとう！🎈🎉";

  answerButtons.forEach(button => {
    button.disabled = true;
  });
}

// ==============================
// ライフがなくなったとき
// ==============================

function gameOver() {
  gameFinished = true;

  wordElement.textContent = "GAME OVER";
  resultElement.textContent = "もう一度挑戦してね！";

  answerButtons.forEach(button => {
    button.disabled = true;
  });

  // 少し待ってから自動で最初に戻る
  setTimeout(() => {
    score = 0;
    lives = 3;
    usedWords = [];
    gameFinished = false;
    showQuestion();
  }, 2000);
}

// ==============================
// 英単語を発音する
// ==============================

function speakWord() {
  if (!currentQuestion || gameFinished) {
    return;
  }

  if (!("speechSynthesis" in window)) {
    alert("このブラウザでは発音機能を利用できません。");
    return;
  }

  window.speechSynthesis.cancel();

  const speech = new SpeechSynthesisUtterance(currentQuestion.word);
  speech.lang = "en-US";
  speech.rate = 0.75;
  speech.pitch = 1;

  setTimeout(() => {
    window.speechSynthesis.speak(speech);
  }, 100);
}

// ==============================
// ボタンを動かす
// ==============================

answerButtons.forEach(button => {
  button.addEventListener("click", checkAnswer);
});

if (speakButton) {
  speakButton.addEventListener("click", speakWord);
}

// 最初の問題を表示
showQuestion();
