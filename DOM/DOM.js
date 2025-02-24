// ! ------------------- DOM - Document Object Model ------------------
// it is a programming interface
// it is used to accessing the HTML content in javascript

let h1 = document.getElementsByTagName("h1");
let p = document.getElementsByTagName("p");
let a = document.getElementsByTagName("a")[1];

console.log(h1[0]);
console.log(p[1]);
console.log(a);

// let ind = document.getElementsByClassName("ind");
// console.log(ind);

// let mum = document.getElementsByClassName("mum");
// console.log(mum);

// let head = document.querySelectorAll("h1");
// let cClass = document.querySelectorAll(".ind")[1];
// // return type - Nodelist

// console.log(head[0], cClass);

// let hii = document.getElementById("hii");
// // return type  - that element
// console.log(hii);

let anyElement = document.querySelector(".ind");
console.log(anyElement);

anyElement.innerHTML = "Bye sheela";

let head1 = document.querySelector("h1");
head1.innerHTML = "Hello This is Js";

let para = document.querySelectorAll("p")[1];
para.innerHTML = "So much love from Raj";

let head2 = document.querySelector("h1");
head2.innerHTML = "I am header from <span>js</span>";

let head4 = document.querySelectorAll("h1")[1];
head4.innerText = "<p> I am also from js</p>";

// let anc = document.querySelector("#hii");

let anchor = document.querySelector("a");
anchor.href = "https://github.com/";

let input = document.getElementsByTagName("input")[0];
input.type = "password";

let img = document.querySelector("img");
img.alt = "this image is not there";
