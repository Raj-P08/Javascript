// ! Static methods in Object

// ? ------------ 1. Object.freeze();
// it will freeze the keys and values of the Object.
// it takes 1 argument as a obj ref.
// this method restrict the adding, updating and deleting the data i.e. we cannot update, add,delete.

// ? -------------2. Object.isFrozen();  --------------
// It returns boolean value.
// it takes 1 argument as an obj ref.
// it returns true if the object is freeze and returns false if the obj is not freeze.

// ? ------------ 3. Object.seal(); ------------------
// it will only update the values.
// it cannot add , delete the key and values of the object
// it takes only 1 argument

// ? ------------ 4. Object.isSealed(); ----------------
// It returns boolean value.
// it takes 1 argument as a obj ref.
// it returns true if the object is seal and returns false if the obj is not seal.

// ? ----------- 5. Object.key,values,entries(); -----------------
// it returns the data in the form of array.
// it takes 1 argument as an object.

// ? ----------- 6. Object.assign(); -----------------
// it used to merge the two or more objects and return the object
// it take 2 arguments 1 is target object and 2 is source object
// Target Object :- The target object to copy to
// Source Object :- The source object from which to copy properties
// it returns target object
// we can copy the object with the help of creating empty string

let obj = {
  name: "aman",
  id: 6969,
  skills: null,
  children: 2,
  isMarried: false,
};

Object.freeze(obj); // Object.freeze();

console.log(Object.isFrozen(obj)); // * Object.isFrozen();

Object.seal(obj); // Object.seal();
console.log(Object.isSealed(obj)); // *Object.isSealed();

obj.salary = 10000;
delete obj.id; // adding , deleting and updating
obj.name = "aman Ansari";
console.log(obj);

let key = Object.keys(obj); // * Object.keys();
console.log(key);

let values = Object.values(obj); // * Object.values();
console.log(values);

let e = Object.entries(obj); //* Object.entries();
console.log(e);

let x = {
  name: "xyz",
  id: 900,
  skills: ["java", "react"],
};

let address = {
  doorNo: 90,
  pincode: 400601,
  location: "jspiders, Thane",
};

let y = {
  key: "value",
};

let newObj = Object.assign(x, address, y); //* Object.assign();
console.log(newObj);
console.log(x);
console.log(address);
console.log(y);

let o = Object.assign({}, x); //* Copy the object
console.log(o);
