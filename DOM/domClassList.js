"use strict";

//! ------------------- classList -------------------
// 5 methods
// add()
// remove()
// replace()

// let h1 = document.querySelector("h1");

// console.log(h1.classList);
// h1.classList.add("hitman", "leader");
// // h1.classList.remove("rs");
// h1.classList.replace("leader", "mi");
// console.log(h1.classList.contains("hitman"));
// h1.classList.toggle("india");

// let btn = document.querySelector("button");

// btn.addEventListener("click", () => {
//   h1.classList.toggle("rs");
// });

// let btn2 = document.querySelectorAll("button")[1];
// let img = document.querySelector("img");

// btn2.addEventListener("click", () => {
//   img.classList.toggle("hide");

//   if (btn2.innerHTML == "show") {
//     btn2.innerHTML = "hide";
//   } else {
//     btn2.innerHTML = "show";
//   }
// });

let input = document.querySelector("input");
let eye = document.querySelector(".fa-eye");
let eyeslash = document.querySelector(".fa-eye-slash");

eyeslash.addEventListener("click", () => {
  input.type = "text";
  eye.classList.toggle("hide");
  eyeslash.classList.toggle("hide");
});

eye.addEventListener("click", () => {
  input.type = "password";
  eyeslash.classList.toggle("hide");
  eye.classList.toggle("hide");
});
