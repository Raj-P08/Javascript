let emp = {
  name: "sachin",
  id: 400,
  designation: "Manager",
  salary: 200,
};

function demo(a, b) {
  console.log("start");
  console.log(this);
  console.log(a, b);
}

// demo.call(emp,20,40);
// demo.apply(emp,[20,40]);

let fn = demo.bind(emp);
// console.log(fn);
fn(20, 40);

let newObj = {
  name: "xyz",
  getName() {
    console.log(this.name);
  },
};

let res = newObj.getName.bind(emp);
res();
