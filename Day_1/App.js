console.log("JAvaScript");

// ** Variables **

var a = 10;
console.log(a);
var a = 20;
console.log(a);

var x;
x = true;
console.log(x);

let b = 400;
// let b ;     Cannot redeclare block-scoped variable 'b'
b = 4000;
console.log(b);

let y;
y = 2;
console.log(y);

const c = false;
// const c;

// c = "javascript";

// const z ;

// let s1 = Symbol("key1");
// let s2 = Symbol("key1");
// let s4 = Symbol("key1");

// let obj = {};
// obj[s1] = "value1";
// obj[s2] = "value2";
// obj[s4] = "value4";
// console.log(obj);

let obj = {
  name: "Shweta",
  id: 124,
};
let obj1 = {};

let res = Object.assign(obj, obj1);
console.log(res);
