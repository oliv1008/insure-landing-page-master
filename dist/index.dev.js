"use strict";

var eltBody = document.getElementsByTagName("body")[0];
var eltHamburgerButton = document.getElementById("hamburgerButton");
eltHamburgerButton.addEventListener("click", toggleScroll);

function toggleScroll() {
  if (eltBody.classList.contains("noScroll")) {
    eltBody.classList.remove("noScroll");
  } else {
    eltBody.classList.add("noScroll");
  }
}