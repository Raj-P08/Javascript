// Datatypes
// primitive datatypes 
//  - Number, boolean, String, bigint, null, undefined, NaN(not a number)


// Number
let num = 50;
console.log(num);
console.log(typeof num);
let d = 29.76;
console.log(typeof d);

// boolean

var a = true;
console.log(typeof a);
let b = false;
console.log(typeof b);

// String
// we can use string in 3 ways 
// 1. double quotes ""
// 2. single quotes ''
// 3. Backticks ``  alternate name of backticks is template literals
let s1 = "javascript";
console.log(s1);
console.log(typeof s1);

let s2 = '"Hello world"';
console.log(s2);
console.log(typeof s2);

let s3 = `python`;
console.log(typeof s3);

let s4 = "Hello 'world'";
console.log(s4);

console.log(2+2);
console.log("2+2");

console.log(`sum of 2 and 5 is ${2+5}`);
console.log("sum of 2 and 5 is ${2+5}");


let num1 = 200;
console.log(`hello ${num1} world`);

// bigint

let c = 10n;
console.log(typeof c);

// Null

let o = new Object();
console.log(o);
o = null;
console.log(o);
console.log(typeof o);

// undefined
var v;
console.log(v);
console.log(typeof v);

// NaN - not a number

let sum = 10 + "40";
console.log(1000 - "200");
let str = "str" - 200;
console.log(str);
console.log(typeof str);
console.log(typeof sum);
console.log(sum);