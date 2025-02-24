let $ = 200;

var _ = 900;
console.log($);
console.log(_);

// An identifier or keyword cannot 
// immediately follow a numeric literals

// let 1a = 100; // Error

// let typeof = 100; // Error

// Output methods in js

console.log("Javascript");

document.write("web technology" + "<br/>");
document.writeln("React Js");   // It gives space between the two words
document.write("javascript");


// alert();
// return type is void and accepts only one argument
alert("Alert popup");

// confirm();
// return type is boolean and accepts String as argument
let res  = confirm("Are you sure to continue..?");
console.log(res);

// prompt();
// return type is string and null

let age = prompt("Enter your age:");
console.log(age);
console.log(typeof age);

