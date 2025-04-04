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
//       console.log(raw);
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
  try {
    // let raw = await fetch(`https://randomuser.me/api/`);
    let raw = await fetch(`https://dummyjson.com/products`);
    let data = await raw.json();
    let allData = data.products;
    console.log(allData);

    let div = document.querySelector(".container");
    allData.map((v, i) => {
      let { id, title, description, price } = allData[i];
      div.innerHTML += `<h2>ID : ${id}</h2>
      <p>TITLE : ${title}</p>
      <h4>Description : ${description}</h4`;
    });
  } catch (e) {
    console.log(e);
  }
}
abcd();
