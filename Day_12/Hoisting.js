//* Variable Hoisting
//  Moving variable declaration to the top of the scope is called as variable hoisting.

console.log(y);
// console.log(z);
// Cannot access 'z' before initialization

let x = 20;
var y = 30;
const z = 40;

console.log(x, y, z);

//* function Hoisting
// NOtE:  function hoisting only applicable for Named function
//Moving function declaration to the top of the scope is called as function hoisting.

demo();
function demo() {
  let x = 50;
  console.log("demo function");
  console.log(x);
  function f1() {
    var x = 90;
    console.log(x);
  }
  f1();
}

// let arr = ()=>{
//     console.log("hello world");
// }
// console.log(arr());

//* ----> Lexical scope or function chaining <-------
//  ability to access members from the function scope or local scope until the global scope.

// * -------- Window Object or Global object ----------
//  It is the supermost object in the javascript.
console.log(window);
// window.alert("alert message");
console.log(this);
console.log(window === this);

// ------- this keyword ---------
// to access the global variables in the local scope using this keyword
// let b = 80;
var b = 80;
function f2() {
  var b = 90;
  console.log(b);
  console.log(this.b);
}
f2();
