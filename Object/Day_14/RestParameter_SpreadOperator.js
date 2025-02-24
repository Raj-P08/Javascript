// ! rest parameter and spread operator

// * A rest parameter must be the last in a parameter list
//

function demo(a, b, ...c) {
  console.log(a);
  console.log(b);
  console.log(c);
}
demo(10, 20, 30, 40, 50);

let str = "Javascript";
console.log(...str);

let ar = [90, 40, 30, 10];
console.log(...ar);

let a1 = [80, 30];
let a2 = [70, 50];
console.log(...a1, ...a2);
console.log([...str]);

// spread syntax requires ...iterable

// let n = 900;
// console.log(...n);
