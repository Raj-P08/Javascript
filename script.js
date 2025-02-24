let p = "python";
let res = window.setInterval(() => {
  console.log(p);
}, 2000);

console.log(res);

setTimeout(() => {
  clearInterval(res);
}, 10000);
