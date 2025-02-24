// let p1 = Promise.resolve("resolved promise");

// let demo = async () => {
//   console.log("start");
//   await p1;
//   let a = 10;
//   console.log(a);
//   console.log("str");
//   console.log("end");
// };
// demo();
// console.log("hi");
// console.log("hi");
// console.log("hi");
// console.log("hi");

let fetchData = async () => {
  try {
    let data = await window.fetch("https://fakestoreapi.com/products");
    let finalData = await data.json();
    console.log(finalData);
  } catch (error) {
    console.log("error");
  }
};

fetchData();
