// * 1. For an array of marks of students, find the average marks of the entire class.

let arr = [85, 90, 78, 92, 88, 76, 95, 89];
let sum = arr.reduce((acc, curr) => {
  return acc + curr;
});
let average = sum / arr.length;
console.log("Sum of marks:", sum);
console.log("Average marks of the class:", average);
