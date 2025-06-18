// ! 1. For an array of marks of students, find the average marks of the entire class.

// let arr = [85, 90, 78, 92, 88, 76, 95, 89];
// let sum = arr.reduce((acc, curr) => {
//   return acc + curr;
// });
// let average = sum / arr.length;
// console.log("Sum of marks:", sum);
// console.log("Average marks of the class:", average);

// ! 2. create an array with the given length(n) and fill with 0.

// let n = 5; // Length of the array
// let zeroArray = new Array(n).fill(0);
// console.log("Array filled with 0:", zeroArray);

// ! 3. create an array with the given length(n) and store natural numbers from 1 to n.

let nNatural = 5; // Length of the array
let naturalArray = new Array(nNatural).fill(0);

naturalArray.forEach((item, index) => {
  naturalArray[index] = index + 1;
});

console.log(naturalArray);

// ! 4. Consider an array of MCU heroes(["ironman", "hulk", "wanda", 'black panther', "captain america", "black widow"]).
// a. Add spiderman at the end and thor at the start.
// b. Remove black widow and add howkeye in its place.
// c. Check if captain america is present in the array.

let mcuHeroes = [
  "ironman",
  "hulk",
  "wanda",
  "black panther",
  "captain america",
  "black widow",
];

mcuHeroes.push("spiderman"); // Add spiderman at the end
mcuHeroes.unshift("thor"); // Add thor at the start

mcuHeroes.splice(5, 1, "howkeye"); // Remove black widow and add howkeye in its place
console.log(mcuHeroes);

console.log(mcuHeroes.includes("captain america")); // Check if captain america is present in the array
