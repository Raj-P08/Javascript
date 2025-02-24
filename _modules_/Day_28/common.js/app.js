// ~ Modules
// Transfer the data from one js file to another js file
// ! common js
// only working on server side.

// Syntax for export:- module.exports={
//              name of data which we want to export
// }

// syntax for import:- require(file path);

let sum = (a, b) => {
  console.log(a + b);
};

let sub = (a, b) => {
  if (a > b) console.log(a - b);
  else console.log(b - a);
};

let ar = [10, true, null, { name: "xyz" }];

let o = { name: "Raj", id: 124 };

module.exports = {
  sum,
  sub,
  ar,
  o,
};
