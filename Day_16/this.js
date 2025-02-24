//! ==================  "this" keyword ====================

// if  we write or use the "use script"; stmt then,-
// 1) in global scope if we try to log "this" then it will give window object.
// 2) in local scope - undefined
// 3) in arrow function - it takes parent scope, i.e. window object
//                     if we take arrow function in other function then it's parent scope becomes local scope
//                     and gives undefined.
// 4) in class constructor - it takes the assign values when we pass the value during creating constructor.
// 5) in object (by literal way) - it takes current object.

// And without "use strict"; stmt  then it gives window object.

"use strict";
// console.log(this);

function demo() {
  console.log(this);
}
demo();

class Employee {
  constructor(name, id) {
    this.ename = name;
    this.eid = id;
  }
}
let e1 = new Employee("Raj", 1);

let obj = {
  name: "xyz",
  demo: function () {
    console.log(this.name);
  },

  ar: () => {
    console.log(this);
  },
};

obj.demo();
obj.ar();

let d1 = function () {
  console.log(this);
  let arr = () => {
    console.log(this);
  };
  arr();
};
d1();
