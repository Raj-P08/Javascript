// ES6 Module
// It is working only on the browser side
// make the extension as .mjs
// in html file and in script tag mention type module

// ! default export
// transfer only one data
// Syntax for export: export default (data name)
//
// Syntax for import: import (identifier) from (file path)

// import division from "./demo.mjs";

// console.log(division);
// division(100, 10);

// ! named export:
// we can transfer multiple data.
// Syntax for export: data will be prefixed with export keyword.

// Syntax for import: import {sum, sub, o as obj, multiply} from (file path);

export let multiply = function (a, b) {
  console.log(a * b);
};

export let div = function (a, b) {
  if (a > b) console.log(a / b);
  else console.log(b / a);
};

export let emp = {
  name: "anish",
  id: 68,
  skills: ["js", "java", "node"],
};
