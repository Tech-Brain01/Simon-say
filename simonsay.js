let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

// start the game

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;

    levelup();
  }
});

// flash button & level up

function gameflash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function levelup() {
  userseq = []; // empty the user seq
  level++;
  h2.innerText = `Level : ${level}`;

  let randIdx = Math.floor(Math.random() * 3);
  let randcolor = btns[randIdx];
  let randBtn = document.querySelector(`.${randcolor}`);
  // console.log(randIdx);
  // console.log(randcolor);
  // console.log(randBtn);
  gameseq.push(randcolor);
  gameflash(randBtn);
}

// Button event listener

function userflash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function btnpress() {
  let btn = this;
  userflash(btn);

  usercolor = btn.getAttribute("id");
  userseq.push(usercolor);

  checkAns(userseq.length - 1);
}

let allbtns = document.querySelectorAll(".btn");
for (allbtn of allbtns) {
  allbtn.addEventListener("click", btnpress);
}

// MATCHING SEQUENCE

function checkAns(idx) {
  if (userseq[idx] == gameseq[idx]) {
    if (userseq.length == gameseq.length) {
      setTimeout(levelup(), 1000); //delay the level up time
    }
  } else {
    h2.innerHTML = `Game Over!! Your score was <b>${level}</b> <br> Press any key to start again.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

// Reset the game

function reset() {
  started = false;
  gameseq = [];
  userseq = [];
  level = 0;
}

// highest score

