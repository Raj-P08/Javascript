// let head = document.getElementsByTagName("h1")[0];
// let title = document.getElementsByTagName("title")[0];

// console.log(title.innerHTML);

// console.log(head.innerHTML);

// setInterval(() => {
//   if (head.innerHTML == "Rohit") {
//     head.innerHTML = "Hitman";
//   } else {
//     head.innerHTML = "Rohit";
//   }
// }, 1000);

// let time = setInterval(() => {
//   if (title.innerHTML == "Document") {
//     title.innerHTML = "Cricket";
//   } else {
//     title.innerHTML = "Document";
//   }
// }, 1000);

// setTimeout(() => {
//   clearInterval(time);
// }, 10000);

//! Creating the elements in HTML

let div = document.getElementsByClassName("demo")[0];
// let p = document.getElementsByTagName("p")[0];

console.log(div);

let head = document.createElement("h1");
div.appendChild(head);
head.innerHTML = " I created from JS";

let para = document.querySelectorAll("p")[0];

let span = document.createElement("span");
span.innerHTML = " I am span";
head.appendChild(span);

// creating h2 in div
let head2 = document.createElement("h2");
head2.innerHTML = "I am H2 ";
div.appendChild(head2);

// creating br tag h2
let break1 = document.createElement("br");
head2.appendChild(break1);

// creating anchor tag in H2
let anchor = document.createElement("a");
anchor.innerHTML = "github";
anchor.href = "https://github.com/";
anchor.target = "blank";
head2.appendChild(anchor);

let div2 = document.getElementById("div2");

let img = document.createElement("img");
img.alt = "This is an image tag";

let para2 = document.createElement("p");
para2.innerText = "I am paragraph2";

div2.append(img, para2, "Hello i am string");
