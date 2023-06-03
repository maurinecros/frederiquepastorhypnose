var buttonLeft = document.getElementById("slideshow-left");
var buttonRight = document.getElementById("slideshow-right");
var slider = document.getElementById("slider");
var bullets = document.getElementsByClassName("bullet");
var slides = document.getElementsByClassName("slide");
var images = document.querySelectorAll(".slide img");
var sectionBackground = document.getElementById("section-pour-quoi");
var currentIndex = 0;

selectSlide(currentIndex);

function selectSlide(targetIndex) {
  if (targetIndex < 0) {
    targetIndex = slides.length - 1;
  } else if (targetIndex >= slides.length) {
    targetIndex = 0;
  }
  var xDestination = -100 * targetIndex;
  slider.style.transform = "translateX(" + xDestination + "%)";
  currentIndex = targetIndex;
  for (var i = 0; i < bullets.length; i++) {
    bullets[i].classList.remove("active");
  }
  bullets[currentIndex].classList.add("active");
  sectionBackground.style.background =
    "linear-gradient(0deg, rgba(248, 248, 246, 0.8), rgba(248, 248, 246, 0.8)), url( '" +
    images[targetIndex].src +
    "')";
  sectionBackground.style.backgroundSize = "cover";
}

buttonLeft.addEventListener("click", () => {
  selectSlide(currentIndex - 1);
});
buttonRight.addEventListener("click", () => {
  selectSlide(currentIndex + 1);
});
