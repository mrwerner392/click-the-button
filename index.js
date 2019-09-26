const button = document.querySelector("button");

const phrases = [
  "Nope!",
  "Faster!",
  "Over Here!",
  "Quit Yet?",
  "👻👻👻",
  "HAHAHA!",
  "Be Better.",
  "Too Slow!",
  "Come On",
  "Hello?",
  "Where Are You?",
  "Zzzzz....",
  "CLICK ME!!!"
];

const findWidth = () => window.innerWidth;
const findHeight = () => window.innerHeight;
resetButton();
let t; // setTimeout variable

button.addEventListener("mouseenter", e => {
  t = setTimeout(moveButton, Math.floor(Math.random() * 60));
});

button.addEventListener("mousedown", e => {
  clearTimeout(t);
  alert("You Win!");
  resetButton();
});

function moveButton() {
  setLeft();
  setTop();
  setText();
}

function setLeft() {
  let currentLeft = button.style.left;
  let newLeft = Math.floor(Math.random() * (findWidth() - 150));
  while (newLeft > (currentLeft - 150) && newLeft < (currentLeft + 150)) {
    setLeft();
  };
  button.style.left = `${newLeft}px`;
};

function setTop() {
  let currentTop = button.style.top;
  let newTop = Math.floor(Math.random() * (findHeight() - 50));
  while (newTop > (currentTop - 100) && newTop < (currentTop + 100)) {
    setTop();
  };
  button.style.top = `${newTop}px`;
};

function setText() {
  let currentText = button.innerText;
  let newText = phrases[Math.floor(Math.random() * phrases.length)];
  if (newText === currentText) {
    setText();
  } else {
    button.innerText = newText;
  };
};

function resetButton() {
  resetLeft();
  resetTop();
  resetText();
};

function resetLeft() {
  button.style.left = `${Math.floor(findWidth()/2) - 50}px`;
};

function resetTop() {
  button.style.top = `${Math.floor(findHeight()/2) - 25}px`;
};

function resetText() {
  button.innerText = "Click Me";
};
