// ! Why primitive data-types are immutable and no-primitive data-types are mutable

// when we pass value to the variable of primitive data-types it will allocate the memory in heap area
// and when we redeclare the variable then it will allocate the different memory to that variable
// because of that it will store the new value to the new memory address that's why primitive data types are im-mutable

// for example-
// const a = 10;
// a = 15;
// above code will give an error

// And when we create no-primitive data types it also stores in heap area
// but when we change the values of that array or object , then it can not allocate the new memory again
// instead of that it change the existing values with new values of in same memory address.

// for example -
// const arr = [10,20];
// arr[1] = 400;
// it will change the existing value 20 with 4000.

// const a = 10;

//! =============== ** Shallow copy  ** ==============
// if we make any changes in original object then it wil reflect it in copied object also
// and viceverca

// * 1) ----------- by copying the object reference

let address = {
  location: "jspiders Thane",
  pincode: 400601,
};

let obj = {
  name: "sound sathya",
  id: 80,
  skills: ["js", "java", "react"],
  salary: 69000,
  isMarried: false,
  kids: 2,
  add: address,
};

obj.id = 68;

// address.location = "Qspiders Thane";
// console.log(obj);

// let copiedObj = obj;
// console.log(copiedObj);
// console.log(copiedObj === obj);

// * 2) --------- Object.assign(); --------------

// let copiedObj2 = Object.assign({}, obj);
// obj.skills[4] = ["sql"];
// address.location = "Qspiders Thane";
// console.log(copiedObj2);
// console.log(copiedObj2 == obj);

// * 3) -------------- Object Destructuring --------------

// let copiedObj3 = { ...obj };
// obj.skills = ["sql"];
// console.log(copiedObj3);

// * 4)------------- using for in loop --------------

// let copiedObj4 = {};
// for (let key in obj) {
//   copiedObj4[key] = obj[key];
// }

// obj.skills = ["sql"];
// console.log(copiedObj4);

// ! ==================== deep copy  ==================

// * 1) ------------------- JSON.stringify() and JSON.parse() -----

let ad = {
  pinCode: 400601,
  location: "jspiders Thane",
};

let obj = {
  name: "xyz",
  id: 124,
  skills: ["js", "java"],
  salary: 5000,
  address: ad,
};

let str = JSON.stringify(obj);
let copiedObj5 = JSON.parse(str);
console.log(copiedObj5 === obj);
console.log(copiedObj5);

// * 2) ------------------ structuredClone -------------

// let copiedObj6 = structuredClone(obj);
// console.log(copiedObj6 == obj);
// obj.id = 500;
// ad.location = "QSpiders Thane";
// console.log(copiedObj6);
