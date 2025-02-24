"use strict";

// ! Date and Math classes

let x = new Date();
console.log(x);

let year = x.getFullYear();
console.log(year);

console.log(x.getMonth());
console.log(x.getDay());
console.log(x.getDate());
console.log(x.getHours());
console.log(x.getMinutes());
console.log(x.getSeconds());
console.log(x.getMilliseconds());

let y = new Date();
console.log(y.setFullYear(2000, 11, 20));
y.setFullYear(1999);
y.setMonth(7);
y.setDate(22);
y.setHours(13);
y.setMinutes(58);
y.setSeconds(22);

// ! Math
console.log(Math.round(5.5));
console.log(Math.round(4.4));
console.log(Math.round(-1.5));
console.log(Math.round(-1.6));

console.log(Math.ceil(5.01));
console.log(Math.ceil(-3.7));
console.log(Math.ceil(-5.5));

console.log(Math.floor(-3.9));
console.log(Math.floor(8.9));
console.log(Math.floor(-3.4));

console.log(Math.trunc(-10.6));
console.log(Math.trunc(8.75));

let random = Math.random();
console.log(random);

let r = Math.random() * (9999 - 1000);
let otp = Math.trunc(r);
console.log(otp);

console.log(Math.sqrt(100));
console.log(Math.sqrt(69));

console.log(Math.cbrt(125));
console.log(Math.cbrt(27));

console.log(Math.max(30, 20, 60, 40));
console.log(Math.max()); // -Infinity
console.log(Math.min(90, 40, 35, 89));
console.log(Math.min());

let numAr = [30, 45, 50, 80];
console.log(Math.max(...numAr));
