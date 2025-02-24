const s = new Set([
  100,
  "100",
  true,
  "true",
  [10, 20],
  [10, 20],
  () => "arr",
  100,
  true,
]);

// s.add(100);
// s.add("100");
// s.add(true);
// s.add("true");
// s.add([10, 20]);
// s.add([10, 20]);
// s.add(() => "arr");

// ? Has()

console.log(s.has([10, 20]));
console.log(s.has(100));

// ? Delete

console.log(s.delete(() => "arr"));
console.log(s.delete(100));

// ? clear()
// s.clear();
console.log(s.size);
console.log(s);

// ? for each method
// s.forEach((value, index) => {
//   console.log(value);
//   console.log(index);
// });

// ? for of loop
for (const value of s) {
  console.log(value);
}

// ? for in loop
// for (let i in s) {
//   console.log(i);
// }
