"use strict";

console.log(Number(false));
console.log(Number(""));
console.log(Number("100"));
console.log(Number(null));
console.log(Number(undefined));
console.log(Number([10, 20]));

//? ------------- isNan() ------------

console.log(isNaN(true));
console.log(isNaN("100"));
console.log(isNaN("str"));

// ? ------------ Number.isNan(); ------------
console.log(Number.isNaN(true));
console.log(Number.isNaN("str"));
console.log(Number.isNaN(NaN));
