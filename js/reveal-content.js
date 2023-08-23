function revealContent(contentName, moreName) {
  var content = document.getElementById(contentName);
  var moreButton = document.getElementById(moreName);

  if (content.classList.contains("showing-animation-div")) {
    content.classList.remove("showing-animation-div");
    moreButton.innerText = "En savoir plus";
  } else {
    content.classList.add("showing-animation-div");
    moreButton.innerText = "Afficher moins";
  }
}
