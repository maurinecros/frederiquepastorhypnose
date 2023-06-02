function revealContent(contentName, moreName) {
  var content = document.getElementById(contentName);
  var moreButton = document.getElementById(moreName);

  if (content.style.display === "none") {
    content.style.display = "block";
    moreButton.style.display = "none";
  } else {
    content.style.display = "none";
    moreButton.style.display = "block";
  }
}
