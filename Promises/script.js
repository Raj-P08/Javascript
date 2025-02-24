// HACK: PROMISE CHAINING

// sabse pahle ghar par aao
// gate kholo aur gate lagao
// khana pakao khana khao
// incognito mode chalao
// so jao kyunki tum thak gaye ho

// let ans = new Promise((res, rej) => {
//   return res("sabse pahle ghar par aao");
// });
// let p2 = ans.then((data) => {
//   console.log(data);
//   return new Promise((res, rej) => {
//     return res("gate kholo aur gate lagao");
//   });
// });

// let p3 = p2.then((data) => {
//   console.log(data);
//   return new Promise((res, rej) => {
//     return res("khana pakao khana khao");
//   });
// });

// let p4 = p3.then((data) => {
//   console.log(data);
//   return new Promise((res, rej) => {
//     return res("incognito mode chalao");
//   });
// });

// let p5 = p4.then((data) => {
//   console.log(data);
//   return new Promise((res, rej) => {
//     return res("so jao kyunki tum thak gaye ho");
//   });
// });

// p5.then((data) => {
//   console.log(data);
// });

// ! async await
// function abcd() {
//   fetch(`https://randomuser.me/api/`)
//     .then((raw) => {
//       return raw.json();
//     })
//     .then((data) => {
//       console.log(data);
//     });
// }
// abcd();

//dekho jab bhi code async he to aapko uske liye wait karna padta he
// kyoki humein nahi pata uska answer kab aayega
async function abcd() {
  let raw = await fetch(`https://randomuser.me/api/`);
  let data = await raw.json();
  console.log(data);
}
abcd();
