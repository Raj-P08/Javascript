// Operators

console.log(10 == 10);
console.log(10 != 10);
console.log(200 == "200"); // it will check only data
console.log(200 === "200"); // it will check data and data-type also

console.log(20 > 30);
console.log(20 > 10);

console.log(20 >= 20);

let sum = 10;
sum = sum + 30;
sum += 30;
sum -= 5;
sum *= 3;
sum /= 2;
console.log(sum);

let i = 1;
console.log(++i);

let num = 10;
num % 2 === 0 ? console.log("even") : console.log("odd"); // ternary operator

// Array
// it is a non- primitive data type
// it is index data structure
// length is not fixed
//
// Heterogenous array:
const ar = [10, 20, true, () => 10, ["str", "js"]];
console.log(ar.length);

//Homogenous array:
let fruits = ["apple", "jackfruit", "banana", "mango"];

let a = [
  10,
  "js",
  true,
  () => "arr",
  { name: "Rohit" },
  [10, 20, 30],
  undefined,
  null,
  10n,
];

console.log(a.length);
a[9] = "react";
(a[15] = "node"), (a[10] = fruits); // adding another array
a[11] = fruits[2]; //adding another array's element
console.log(a[4]);
console.log(a[3]());

a[2] = false;

delete a[7];
console.log(a);
console.log(a[7]);
