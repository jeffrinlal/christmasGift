/* Typing animation */
const text = "To my Danu (bebe)… even miles apart, you are my home 🤍";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 70);
  }
}
typeEffect();

/* Gift open */
function openGift() {
  document.querySelector(".gift-box").style.display = "none";
  document.getElementById("surprise").classList.remove("hidden");
}
