// ! ============== ** localStorage ** ============

console.log(window.localStorage);
console.log(window.sessionStorage);

localStorage.setItem("name", "Sachin");
localStorage.setItem("id", 10);
localStorage.setItem("skills", ["js", "java", "node"]);
let n = localStorage.getItem("name");

console.log(n);

console.log(parseInt(localStorage.getItem("id")));
let skills = localStorage.getItem("skills");
console.log(skills.split(","));

// localStorage.removeItem("id");
// localStorage.clear();

// ! sessionStorage:
sessionStorage.setItem("name", "Sachin");
sessionStorage.setItem("id", 10);
sessionStorage.setItem("skills", ["js", "java", "node"]);
let n1 = sessionStorage.getItem("name");

console.log(n);

console.log(parseInt(sessionStorage.getItem("id")));
let skills1 = sessionStorage.getItem("skills");
console.log(skills.split(","));

// sessionStorage.removeItem("id");
// sessionStorage.clear();
