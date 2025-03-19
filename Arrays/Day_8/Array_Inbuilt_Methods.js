// "use strict";
// Array inbuilt Methods

let a = () => {
  console.log("arr function");
};

console.log(typeof a);
let ar = [10, 30, 20];
console.log(typeof ar);

let num = 30;
let x = Array.isArray(ar);
console.log(x);

// Non-static methods:

// 1. push() and unshift()

// this are the non- static methods
// it returns length of the modified array
// push():- it add the elements at the end of the array
// unshift():- it add the elements at the start of the array.
// this methods takes one or more arguments.

let arr = [10, "js", true, 100n, [90]];
console.log(arr.length);
// let res1 = arr.push(30,70,80);

let res2 = arr.unshift("str", "js");

// console.log(res1);
console.log(res2);
console.log(arr);

//! pop() and shift()
// this are non-static methods
// it returns removed element of the array
// pop()- it removes the only one element from the end
// shift() - it removes the only one element from the start.

let fruits = ["apple", "banana", "watermelon"];
var res3 = fruits.pop();
console.log(res3);

let res4 = fruits.shift();
console.log(res4);
console.log(fruits);

//! slice();
// it's a non-static method
// it extract the part of the array
// it takes two arguments starting index and ending index.
// it cannot change the original array.
let v = [10, 20, 30, 40, 50];
let res5 = v.slice(1, 3);
console.log(res5);
console.log(v);
console.log(v.slice(3));

//! splice();
// it is a non-static methods
// it takes mandatorily 2 arguments but it will take more than 2
// it takes 1st arg- as starting index, 2nd as delete count, 3rd as adding element..
//

let r = [50, 60, 70, 80, 90, 100];
// delete r[1];
console.log(r.length);
console.log("Splice method");

let res6 = r.splice(1, 3, "javascript", "java");
console.log(res6); // [ 60, 70, 80 ]
console.log(r); //  [ 50, 'javascript', 'java', 90, 100 ]

//! Adding array
//! concat();
// it will not affect an original array
let m = [10, 20];
let n = [30, 40];
let d = [50, 60];

let c = m.concat(n, d);
console.log(m);
console.log(c);

//! indexOf();

const arrr = [10, 20, 30, "js", "node", 20, 10, 30];
console.log(arrr.indexOf(60, 7));

//! lastIndexOf();

let ar1 = [100, "str", 20n, true, false, undefined, null];
let res1 = ar1.lastIndexOf("str", 0);
console.log(res1);
