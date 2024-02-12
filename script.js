document.addEventListener("DOMContentLoaded", function () {
  // You can choose how to trigger the hiding of the intro screen
  // For example, here it's set to hide after 3 seconds (3000 milliseconds)
  setTimeout(function () {
    document.getElementById("intro-screen").style.display = "none";
  }, 5000);
});
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 2 + 3 + "s";

  heart.innerText = "💗";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);
