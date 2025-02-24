// * ===============    Object    ================

// It is a non-primitive data type
// it stores the elements in the form of key and values pair i.e. entries
// Key should be unique
// if we pass the same key then it will override the previous value.
// in object key is store in the form of String.

// !    ---------- 1. Literal way ------------
let s1 = {
  name: `Sachin`,
  id: 123,
  degree: "BE",
  stream: "civil",
  skills: ["react", "node", "javascript", "java"],
  isMarried: false,
  children: null,
  percentage: 90.99,
  id: 300,
};

// for(let v of s1){
//     console.log(v);
// } // s1 is not iterable

// console.log(s1);
// * ----------> adding the elements <-------------
s1.address = {
  doorNo: 302,
  location: "Thane West",
  pincode: 400601,
};

// *  ----------> Updating the elements <-------------
s1["salary"] = undefined;
// s1.salary = 20000;

s1.children = 5;
s1["isMarried"] = true;

// *  -----------> Deleting the elements  <------------

delete s1.id;
delete s1[`degree`];

console.log(s1);
console.log(s1.skills);
s1["skills"].forEach((v, i) => {
  console.log(v);
});
console.log(s1.doorNo);

// let x = 100;

// function demo() {
//   var x = 300;
//   console.log(x);
//   console.log(this.x);
// }

// ! -------------- 2. Using class ------------------

let x = 100;

class Employee {
  constructor(name, id) {
    this.eName = name;
    this.eId = id;
  }
}

let e1 = new Employee("Raj", 123);
console.log(e1);
// ! -------------- 3. Using Constructor function ------------

function Student(name, id) {
  this.sName = name;
  this.sId = id;
}

let s2 = new Student("Aakash", 70);
console.log(s2);

// ! -------------- 4. Using Object constructor ---------------

let m = new Object();
m.name = "xyz";
m.id = 123;
console.log(m);

let y = {
  id: 400,
  skills: ["java", "js", "react"],
  fn: function () {
    console.log("anonymous function");
  },
  nested: {
    key: "value",
  },
};

y.fn();
console.log(y.nested["key"]);
