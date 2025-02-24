// ! ---------------- Destructuring -------------------
// Destructuring is used to give the unique identifiers to the elements of an array or object.

// * ---------------- 1. Array destructuring --------------------
// Array destructuring is used to give the unique identifiers to the elements of an array.
// Array destructuring gives the identifiers in sequence as the elements
// we can give the rest element.
//      i.e. if there are 5 elements in an array and we are giving only 2 identifiers and gives the ...c then
//              rest of the elements are store in that c identifier.

// * ---------------- 2. Object destructuring -------------------
// Array destructuring is used to give the unique identifiers to the elements of an Object.
// it not follow the sequence.
// we have to give the key as an identifiers.
// we can change the
let ar = [10, 20, 40, 30, 90, 70];
// console.log(ar[1]);

const [a, b, ...c] = ar;
console.log(a, b);
console.log(c);

let obj = {
  name: "rohan",
  id: 96,
  skills: ["java", "js", "SQL"],
  designation: null,
  isMarried: true,
  children: 5,
};

let id = 89;
var { designation, id: eid, ...x } = obj;
console.log(designation);
console.log(id);
console.log(eid);
console.log(x);
