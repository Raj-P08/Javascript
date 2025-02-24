let emp = { name: "Rohit", id: 45 };

function f1(a, b, c) {
  console.log(this);
  console.log(a, b, c);
}

demo.call(emp, 10, 20, 30);
demo.apply(emp, [10, 20, 30]);
dem.bind(emp)(10, 20, 30);

const classroom = "z5tow5y";
