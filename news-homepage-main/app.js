"use strict";

const hamburger = document.querySelector(".header__hamburger-logo");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", (el) => {
  const target = el.target;
  navigation.classList.toggle("d-none");
});
