//! Type Casting

//* implicit:

let x = "10";
let y = 20;
let z = x + y;
// number datatype is converted into string datatype
console.log(z);

// String datatype is converted into number datatype
console.log(100 - "40");

console.log(true + false);

//* Explicit:

// let a = 200.6887";
let b = "str";
let num = parseInt(a);
console.log(num);

console.log(typeof num);
console.log(parseInt(b));

console.log(parseFloat(a));
