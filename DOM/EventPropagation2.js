console.log(document);
console.dir(document);

let gp = document.querySelector(".gp");
let p = document.querySelector(".p");
let c = document.querySelector(".c");

document.addEventListener(
  "click",
  (e) => {
    console.log(e.eventPhase);

    console.log("document clicked");
  },
  false
);

gp.addEventListener(
  "click",
  (e) => {
    console.log(e.eventPhase);
    e.stopPropagation();
    console.log("gp clicked");
  },
  true
);

p.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log(e.eventPhase);
    console.log("parent clicked");
  },
  false
);

c.addEventListener(
  "click",
  (e) => {
    // e.stopPropagation();
    console.log(e.eventPhase);
    console.log("child clicked");
  },
  { capture: false }
);
