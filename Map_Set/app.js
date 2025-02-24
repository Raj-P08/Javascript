let ar = () => "arr";
let y = new Map([
  [100, "number"],
  [true, "boolean"],
  [ar, "function data"],
  [[10, 20], "array data"],
  [
    { name: "abc" },
    {
      demo() {
        console.log("demo function");
      },
    },
  ],
  [100, "number 100"],
]);

// y.set(100, "number")
//   .set(true, "boolean")
//   .set(ar, "function data")
//   .set([10, 20], "array data")
//   .set(
//     { name: "abc" },
//     {
//       demo() {
//         console.log("demo function");
//       },
//     }
//   )
//   .set(100, "number 100")
//   .set(ar, "arrow fn");

// ? Get the data
console.log(y.get(true));
console.log(y.get([10, 20]));

// ? Delete data
console.log(y.delete([10, 20]));
console.log(y.delete(100));

// y.clear();
console.log(y.size);
console.log(y);

y.forEach((value, key, map) => {
  console.log(value);
  console.log(key);
  console.log(map);
});

console.log(y.has("100"));
console.log(y.has(true));
console.log(y.has([10, 20]));

// ! SET
