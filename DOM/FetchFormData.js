// let form = document.getElementsByClassName("form-control");
// let username = document.getElementById("username");
// let password = document.getElementById("password");

// form.addEventListener(
//   "submit",
//   (e) => {
//     e.preventDefault();
//     const userRes = username.value;
//     const passRes = password.value;
//     console.log(userRes, passRes);
//   },
//   { capture: false }
// );

let form = document.querySelector(".form-control");
// let percentage = document.getElementById("percentage");

// percentage.addEventListener("change", (e) => {
//   let display_perc = document.querySelector(".display_perc");
//   display_perc.innerHTML = percentage.value;
// });

let skills = document.getElementsByName("Courses");
let skillsRes = [];
percentage.addEventListener("input", (e) => {
  let display_perc = document.querySelector(".display_perc");
  display_perc.innerHTML = percentage.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let finalData = Object.fromEntries(data);

  Array.from(skills).map((v) => {
    if (v.checked && skillsRes.includes(v.value) == false) {
      skillsRes.push(v.value);
    }
  });

  // data.Courses = skillsRes;
  // console.log(data);

  finalData.Courses = skillsRes;
  console.log(finalData);
});
