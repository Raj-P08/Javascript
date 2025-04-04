"use strict";

// ! ========= Promises =============
// It is a inbuilt class
// it used to perform asynchronous operation
// it has Three states : -
// *    1) Resolved/fulfilled
// *    2) Rejected
// *    3) pending

// when we creating rejected  promise then it will throws an error
// to handle that error we have Three methods
// *    1) then()
// *    2) catch()
// *    3) finally()
//  this methods takes 1 argument as a callback function and that function takes one argument as promiseResult.

// let p = new Promise(function (res, rej) {
//   let proposeRes = true;
//   if (proposeRes) res("resolved promise 1");
//   else rej("rejected promise 1");
// });

// p.then((d) => {
//   // promise result one parameter
//   console.log(d);
//   console.log("resolved");
// })
//   .catch((rej) => {
//     console.log(rej);
//     console.log("rejected");
//   })
//   .finally(() => {
//     console.log("It will execute if promise is resolved or rejected");
//   });

//   ! --------------- window.fetch(); -------------

// it will used to fetch the data from API or json file
// it takes one argument as API url or json file path
//

// let p1 = Promise.resolve("resolves promise 1");
// console.log(p1);
// let p2 = Promise.reject("rejected promise 1");
// console.log(p2);
// p2.then(function (d) {
//   console.log(d);
// }).catch(function (e) {
//   console.log(e);
// });

let data = window.fetch("./data.json");
// console.log(data);

data.then((d) => {
  console.log(d); //? Response
  let res = d.json();
  console.log(res); //? Promise
  res.then((v) => {
    console.log(v);
    let div = document.querySelector(".cont");
    v.map((val) => {
      let { name, id, isMarried } = val;
      div.innerHTML += `<h2>Name : ${name}</h2>
                <p>id : ${id}</p>
                <h4>Marital status : ${
                  isMarried ? "Married" : "Unmarried"
                }</h4`;
    });
  });
});
