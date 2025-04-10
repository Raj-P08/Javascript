// ! Write a program to find first and second largest element in an array

let a = [10, 5, 2, 20, 15];
let res = a.sort((a, b) => {
  return a - b;
});

console.log(res);
console.log("Smallest No: " + res[0]);
let le = res.length - 1;
let largest2 = res.length - 2;
console.log("largest no.: " + res[le]);
console.log("Second largest: " + res[largest2]);

//* WAP to find first second occurance of element in the given array.

let b = [10, 20, 30, 40, 20, 10];
let newAr = [];
b.forEach((v, i) => {
  // let
});

// ! WAP to find how many times the element is occured in an array?

// ! WAP to find PALINDROME numbers in the given array.
// ! WAP to display common elements between two array.
let arr1 = [10, 2, 4, 8, 9, 5];
let arr2 = [5, 4, 20, 30, 1, 10];
let c = arr1.concat(arr2);
let r1 = c.forEach((v, i) => {
  return v == c[v];
});
console.log(r1);

// ! WAP to find the given string is palindrome or not?
// ! WAP to find the sum of numbers in alpha numeric string

//* Find vowels from the string

function findVowels(str) {
  let vowels = "aeiouAEIOU";

  return str
    .split("")
    .filter((char) => vowels.includes(char))
    .join("");
}

console.log(findVowels("javascript"));

//* remove the duplicate values from the array

function removeDuplicate(arr) {
  let a = new Set(arr);
  console.log([...a]);
}
removeDuplicate([1, 4, 5, 1, 4, 3]);
