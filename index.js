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

// Get screen dimensions
const findWidth = () => window.innerWidth;
const findHeight = () => window.innerHeight;

// Set the position and text of the button
resetButton();

// setTimeout variable
let t;

// Move button within 60ms of the user mousing over it
button.addEventListener("mouseenter", e => {
  t = setTimeout(moveButton, Math.floor(Math.random() * 60));
});

// On mousedown, user wins the game
button.addEventListener("mousedown", e => {
  clearTimeout(t);
  alert("You Win!");
  resetButton();
});

// Set new position and text for button
function moveButton() {
  setLeft();
  setTop();
  setText();
}

// Set button horizontal position
function setLeft() {
  let currentLeft = button.style.left;
  let newLeft = Math.floor(Math.random() * (findWidth() - 150));
  while (newLeft > (currentLeft - 150) && newLeft < (currentLeft + 150)) {
    setLeft();
  };
  button.style.left = `${newLeft}px`;
};

// Set button vertical position
function setTop() {
  let currentTop = button.style.top;
  let newTop = Math.floor(Math.random() * (findHeight() - 50));
  while (newTop > (currentTop - 100) && newTop < (currentTop + 100)) {
    setTop();
  };
  button.style.top = `${newTop}px`;
};

// Set button text
function setText() {
  let currentText = button.innerText;
  let newText = phrases[Math.floor(Math.random() * phrases.length)];
  if (newText === currentText) {
    setText();
  } else {
    button.innerText = newText;
  };
};

// Set button to initial settings
function resetButton() {
  resetLeft();
  resetTop();
  resetText();
};

// Set vertical and horizontal coordinates to center the button

function resetLeft() {
  button.style.left = `${Math.floor(findWidth()/2) - 50}px`;
};

function resetTop() {
  button.style.top = `${Math.floor(findHeight()/2) - 25}px`;
};

// Set the button text to "Click Me"
function resetText() {
  button.innerText = "Click Me";
};
