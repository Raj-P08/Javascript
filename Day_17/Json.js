// ! ----------------- JSON - Javascript Object Notation -------------

// it stores the data in the form of object format
// it stores the javascript object and json object
// json has two inbuilt classes
//          1. JSON.stringify
//          2. JSON.parse

let o = {
  name: "xyz",
  id: 300,
  skills: ["java", "js"],
};

let str = JSON.stringify(o);
console.log(str);
console.log(typeof str);

let p = JSON.parse(str);
console.log(p);
