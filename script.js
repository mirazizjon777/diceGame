const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");

const imgDice = document.querySelector(".dice");
imgDice.style.display = "none";

let current = 0;
let activePlayer = 0;
let score = [0, 0];
let gameOver = true;

const activeFunc = function () {
  current = 0;
  document.querySelector(`#current--${activePlayer}`).textContent = current;
  activePlayer = activePlayer == 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
};

btnRoll.addEventListener("click", () => {
  if (gameOver) {
    imgDice.style.display = "block";

    let random = Math.ceil(Math.random() * 6);
    console.log(random);

    imgDice.setAttribute("src", `dice-${random}.png`);
    if (random != 1) {
      current += random;
      document.querySelector(`#current--${activePlayer}`).textContent = current;
    } else {
      activeFunc();
    }
  }
});

btnHold.addEventListener("click", () => {
  if (gameOver) {
    score[activePlayer] += current;

    if (score[activePlayer] < 20) {
      document.querySelector(`#score--${activePlayer}`).textContent =
        score[activePlayer];
      activeFunc();
    } else {
      document.querySelector(`#score--${activePlayer}`).textContent =
        score[activePlayer];
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document.querySelector(`#name--${activePlayer}`).textContent += " Wins";
      current = 0;
      document.querySelector(`#current--${activePlayer}`).textContent = current;
      imgDice.style.display = "none";
      gameOver = false;
    }
  }
});

btnNew.addEventListener("click", () => {
  current = 0;
  activePlayer = 0;
  score = [0, 0];
  gameOver = true;
  imgDice.style.display = "none";
  document.querySelector(`#score--0`).textContent = 0
  document.querySelector(`#score--1`).textContent = 0
  document
  .querySelector(`.player--0`)
  .classList.remove("player--winner");
  document.querySelector(`.player--1`)
  .classList.remove("player--winner");
});
