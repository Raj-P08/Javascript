// let div = document.querySelector("div");
// let para = document.querySelector("p");
// let h2 = document.querySelector("h2");

// let h1 = document.createElement("h2");
// let anchor = document.createElement("a");
// let span = document.createElement("span");

// h1.innerText = "I am h1";
// anchor.innerHTML = "I am anchor tag";
// anchor.href = "www.google.com";
// span.innerHTML = " I am span tag";

div.prepend(h1);
div.insertBefore(anchor, para);

// // div.removeChild(para);
// div.removeChild(h1);
// // div.remove();

// * HTML collections are live collection
// * Nodelists are static
// * to iterate nodelist we use only forEach()
let head1 = document.getElementsByTagName("h1");
let head2 = document.querySelectorAll("h2");
let section = document.querySelector("section");
console.log(head1, head2);

let newh1 = document.createElement("h1");
let newh2 = document.createElement("h2");

section.append(newh1, newh2);
console.log(head1, head2);

head2.forEach((e) => {
  console.log(e);
});

// head1.forEach((e) => {
//   console.log(e);
// });

let convhead1 = Array.from(head1);
let convhead2 = Array.from(head2);
console.log(convhead1);
console.log(convhead2);
