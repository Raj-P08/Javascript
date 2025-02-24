async function demo() {
  try {
    console.log("start");
    var a = 10;
    console.log(a);
    const c = 200;
    c = 800;
    console.log("end");
    return c;
  } catch (e) {
    //   console.log(e);
    console.log("error");
  }
}

let x = demo();
console.log(x);
x.then(
  (d) => console.log(d),
  (e) => console.log("error")
);
