let gameGuess = [];
let usGuess = [];

let level = 0;
let started = false;

let btns = ["red", "yellow", "green", "blue"];

let h3 = document.querySelector("h3");

document.addEventListener("keypress", function () {
  if (started === false) {
    console.log("Game started");
    started = true;
    levelUp();
  }
});

function gameFlash(btn) {
  let btns = btn;
  btns.classList.add("gmFlash");
  setTimeout(function () {
    btns.classList.remove("gmFlash");
  }, 250);
}

function userFlash(btn) {
  let btns = btn;
  btns.classList.add("usFlash");
  setTimeout(function () {
    btns.classList.remove("usFlash");
  }, 250);
}

let idx = 0;

function levelUp() {
  usGuess = [];
  idx = 0;

  h3.innerText = `Level = ${level}`;
  level++;
  let ranNum = Math.floor(Math.random() * 3);
  let ranColor = document.querySelector(`#${btns[ranNum]}`);
  let indx = ranColor.id;
  gameFlash(ranColor);
  gameGuess.push(indx);
  console.log(gameGuess);
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  usGuess.push(btn.id);
  //console.log(usGuess);
  checkAns(idx++);
}

let alBtns = document.querySelectorAll(".btn");

for (btn of alBtns) {
  btn.addEventListener("click", btnPress);
}

function checkAns(idx) {
  if (gameGuess[idx] === usGuess[idx]) {
    if (gameGuess.length == usGuess.length) {
        setTimeout(levelUp , 1000);
      ;
    }
  } else {
    h3.innerText = `you loose and Score is ${level - 1} and press any key to start the game again`;
    document.querySelectorAll(".btn").disabled = true;
    for (btn of alBtns) {
        btn.addEventListener("click", function () {
            btn.disabled = true;
            console.log(btn.disabled)

        });
      }
      
    reset ();
  }
}

function reset() {

    started = false;
    level = 0;
    gameGuess = [];
    idx = 0;
    document.querySelectorAll("btn").disabled = false;

}
