"use strict";

// let div = document.querySelector("div");
// let btn = document.querySelector("button");
// let anchor = document.querySelector("a");
// let body = document.querySelector("body");

// div.addEventListener(
//   "click",
//   () => {
//     // div.style.backgroundColor = "blue";
//     div.classList.toggle("bg");
//     console.log("div");
//   },
//   false
// );

// btn.addEventListener(
//   "click",
//   (e) => {
//     console.log("button");
//     console.log(e);
//     e.stopPropagation();
//   },
//   false
// );

// body.addEventListener(
//   "click",
//   (e) => {
//     console.log("body");
//     e.stopPropagation();
//   },
//   true
// );

let div = document.querySelector("div");
let h1 = document.querySelector("h1");
let youName = document.querySelectorAll("input")[0];
let partnerName = document.querySelectorAll("input")[1];
let btn = document.querySelector("button");
let p = document.querySelector("p");

div.addEventListener("click", () => {
  div.classList.toggle("bg");
});

btn.addEventListener("click", (e) => {
  if (youName.value != "" && partnerName.value != "") {
    let randomNumber = Math.ceil(Math.random() * 100);

    p.innerHTML = `${youName.value} and ${partnerName.value} love percentage is ${randomNumber}`;
    console.log(randomNumber);
  }
  e.stopPropagation();
});
