"use strict";
// ! Synchronous and Asynchronous

// ? ------------ 1. setTimeout(); -------------
// it use to execute the some set of code after the some time delay
// it takes 2 or more parameters i) callback function, ii) time delay(in milliseconds.)
// and others are use to give the arguments to the callback function
// it will execute the code at once
// it returns the unique interval ID this value can be passed to clearTimeout() to cancel the setTimeout.

// ? ------------ 2. setInterval(); ------------
// it execute the code in repeatedly with fixed time delay
// it will take 2 or more parameters i)function, ii)time delay and other
// it returns the unique interval ID this value can be passed to clearInterval() to cancel the interval.
let fn = (a, b, c) => {
  console.log(a, b, c);
  console.log("setTimeout function");
};

let st1 = window.setTimeout(fn, 4000, 100, "str", true);
console.log(st1);

let isUserLoggedIn = true;
if (isUserLoggedIn == false) {
  clearTimeout(st1);
}

console.log("hello");
let b = 400;
console.log(b + 100);

let st2 = window.setInterval(function () {
  // console.log("setInterval function");
  document.write("setInterval " + "<br/>");
}, 2000);
console.log(st2);

setTimeout(() => {
  clearInterval(st2);
}, 10000);

let obj = {
  fn: () => {
    console.log("arr fn");
  },

  nf: function () {
    console.log("anonymous function");
  },

  named: function demo() {
    console.log("demo fn");
  },
  f1() {
    console.log("direct function");
  },
};
obj.fn();
obj.nf();
obj.named();
obj.f1();
