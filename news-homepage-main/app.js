"use strict";

const hamburgerContainer = document.querySelector(
  ".header__hamburger-logo-box"
);
const hamburgerOpen = document.querySelector(".header__hamburger-logo");
const hamburgerClose = document.querySelector(".header__hamburger-logo-close");
const navigation = document.querySelector(".navigation");
const bodyEl = document.body;
hamburgerContainer.addEventListener("click", (e) => {
  hamburgerOpen.classList.toggle("d-none");
  hamburgerClose.classList.toggle("d-none");
  navigation.classList.toggle("drawer-animation");
  bodyEl.classList.toggle("overlay");
});
