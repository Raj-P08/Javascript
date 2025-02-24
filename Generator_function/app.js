function* demo() {
  console.log("start");
  console.log("first");
  let x = 100;
  yield x;
  console.log("second");
  let v = null;
  yield v;
  console.log("third");
  let z = 100n;
  yield z;
  return "end";
}

let res = demo();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());

console.log(...res);
console.log(res);
