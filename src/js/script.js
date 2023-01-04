"use strict";

import { App } from "./app.js";
import { Walk } from "./activities.js";

/* -------------- QUERY SELECTORS ------------ */
const section = document.querySelector(".main");
const formReset = document.querySelector(".btn--close");

const credits = document.querySelector(".credits__link");
const creditPopup = document.querySelector(".credits__popup");
const btnCloseModal = document.querySelector(".btn--close-modal");

/* ----------- APP ARCHITECTURE ------------- */

const app = new App();

formReset.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  app._hideForm();
});

credits.addEventListener("click", function (e) {
  e.preventDefault();
  creditPopup.classList.remove("hidden");
});

btnCloseModal.addEventListener("click", function (e) {
  e.preventDefault();
  creditPopup.classList.add("hidden");
});

section.addEventListener("click", function (e) {
  e.preventDefault();
  if (!creditPopup.classList.contains("hidden")) {
    creditPopup.classList.add("hidden");
  }
});
