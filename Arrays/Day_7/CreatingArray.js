// ways to create Array

// 1. literal way

let x = [10, 20, 30, 40, 50, ["js", "str"]];
console.log(x[5][1]);

// 2) using array constructor:

const arr = new Array(12, 20, 30, "str");
// arr[0] = 12;
// arr[1] = 20;l
console.log(arr);

// Array.of();

let ar = Array.of("str", true, 1n, undefined);
console.log(ar);

let c = new Array(5, 10);
console.log(c);

let v = Array.of(10);
console.log(v);
