"use strict";

let h1 = document.getElementsByTagName("h1")[0];
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (h1.innerHTML == "Rohit Sharma") {
    h1.innerHTML = "Hitman";
  } else {
    h1.innerHTML = "Rohit Sharma";
  }
});

// dblclick
// mouseover
// mouseout

let input = document.querySelector("input");
let h2 = document.querySelector("h2");

// input.addEventListener("keydown", () => {
//   h2.innerHTML = input.value;
// });
//* drawback - last key is not printing

// input.addEventListener("keyup", () => {
//   h2.innerHTML = input.value;
// });
//* drawback - when we press long and release the key then it will print

input.addEventListener("input", () => {
  h2.innerHTML = input.value;
});
