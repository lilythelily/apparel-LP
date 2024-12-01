"use strict";

const deskBtn = document.querySelector("#deskBtn");
const mobileBtn = document.querySelector("#mobileBtn");
const msgDesk = document.querySelector("#msgDesk");
const msgMobile = document.querySelector("#msgMobile");
const inputDesk = document.querySelector("#inputDesk");
const inputMobile = document.querySelector("#inputMobile");
const arrow1 = document.querySelector("#arrow1");
const arrowMobile = document.querySelector("#arrowMobile");

const emailValidation = function (email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

arrow1.addEventListener("click", (e) => {
  if (emailValidation(inputDesk.value)) {
    deskBtn.style.border = "2px solid #6aa84f";
    msgDesk.classList.add("hide");
    inputDesk.style.backgroundBlendMode = "lighten";
  } else {
    msgDesk.classList.remove("hide");
    deskBtn.style.border = "2px solid hsl(0, 93%, 68%)";
    inputDesk.style.backgroundBlendMode = "normal";
  }
});

arrowMobile.addEventListener("click", (e) => {
  if (emailValidation(inputMobile.value)) {
    mobileBtn.style.border = "2px solid #6aa84f";
    msgMobile.classList.add("hide");
    inputMobile.style.backgroundBlendMode = "lighten";
  } else {
    msgMobile.classList.remove("hide");
    mobileBtn.style.border = "2px solid hsl(0, 93%, 68%)";
    inputMobile.style.backgroundBlendMode = "normal";
  }
});
