let arr = [10, 20, 30, 40, 50];

// for(let i =0; i<arr.length;i++){
//     console.log(arr[i]);
// }

// find();
// It is used to find the first element of the array based on the condition.
// it will take one function as an argument and this function takes 3 parameters v, i, array
// if the condition is satisfied then it returns that element
// and if the condition is not satisfied then it returns 'undefined'.
let arg1 = function (v, i, ar) {
  console.log(v, i, ar);
  return v > 25;
};

let res1 = arr.find(arg1);
console.log(res1); // 30

let res2 = arr.find((v, i, ar) => v > 60);
console.log(res2); // undefined

//* findIndex();
// It is used to find the index position of the satisfied condition
// It takes 1 callback function as an argument and that function takes 3 parameters i.e. v,i,array
// it returns that index position if the condition satisfied
// and if the condition is not satisfied then it returns -1.
let res3 = arr.findIndex((v, i, ar) => {
  return v > 30;
});

console.log(res3); // 3

let res4 = arr.findIndex((v) => v > 80);
console.log(res4);

// filter();
// it returns the array of the elements which satisfied the condition and if the condition is not satisfied then it returns empty array
// it takes 1 argument as callback function and that function takes 3 parameters i.e. v,i, array.
let a1 = [40, 50, 20, 34, 10];
let res5 = a1.filter((v, i, ar) => {
  return v > 20;
});
console.log(res5);
// console.log(a1);

// map();
// it takes 1 argument as callback function and that function takes 3 parameters i.e. v,i, array.

let res6 = a1.map((v, i, ar) => {
  return v + 10;
});
console.log(res6);
console.log(a1);

// some() and every();
// it iterates the array elements and returns boolean value
// it takes one argument as function and the function
let v = [50, 30, 20, 15, 79, 68];
let r1 = v.some((v, i) => {
  // console.log(v);
  return v > 100; // it returns true if any of the condition is true
});
console.log(r1);

let r2 = v.every((v, i) => {
  return v > 14; // it returns true if all the conditions are true
});
console.log(r2);

// forEach();
// It iterates the array elements and returns nothing means void
v.forEach((v, i, ar) => {
  // console.log(v);
  // console.log(i);
  // console.log(ar);
});

let i = 0;
// while(i <v.length){
//     console.log(v[i]);
//     i++;
// }

do {
  console.log(v[i]);
  i++;
} while (i < v.length);

//* reduce();
// ? it takes two arguments
// ? it will take one function as an argument and that function takes 2 parameters
// ? it will reduce the array and return single value
// ? it will not affect the original array

let arra = [10, 20, 30, 40, 50];
let r3 = arra.reduce((acc, cv) => {
  console.log(acc, cv);
  return acc + cv;
}, 5);
console.log(r3);
let r4 = arra.reduceRight((acc, cv) => {
  console.log(acc, cv);
  return acc + cv;
}, 5);
console.log(r4);

//! sort();

//? It sort the array based on ASCII value
//? It affects the original array
//? It takes a function as an argument and it will take 2 parameters
// * it will subtract the a-b(ascending order) and b-a(descending order)
// * +ve - a sorted after b
// * -ve - b sorted after a
// * 0 -   No changes

let a = ["mango", "apple", "banana", "Orange"];
a.sort();
console.log(a);

let numAr = [10, 9, 1000, 251, 68, 70];
numAr.sort((a, b) => {
  return a - b; // for ascending order
});
console.log(numAr);

// * reverse();

let c = [20, 30, 10, 60, 90];
c.reverse();
console.log(c);

//! flat();
// ? it is used to convert multi dimensional array into single dimensional array
// ? it takes 1 argument i.e. depth  (depth = array dimension - 1 e.g. depth = 3-1 , depth  = 2)

const d = [10, [30, ["str", "js"], 40], ["rect"]];
console.log("Flat methods");
let r5 = d.flat(); //[ 10, 30, [ 'str', 'js' ], 40, 'rect' ]
let r6 = r5.flat(); // [ 10, 30, 'str', 'js', 40, 'rect' ]
console.log(r5);
console.log(r6);

let r7 = d.flat(2);
console.log(r6);
console.log(r7); // [ 10, 30, 'str', 'js', 40, 'rect' ]

//! includes();
// ? it will return boolean value
let r8 = r7.includes(10, 2);
console.log(r8);

//! fill();
// ? it is used to fill the elements into an array
// ? it takes 3 parameters value, start , end
// ? it affects the original array

let ar = [
  20,
  "Hello world",
  90,
  true,
  undefined,
  null,
  100n,
  () => {},
  false,
  [10, 30],
];

ar.fill("str", 4, 7);
console.log(ar);
