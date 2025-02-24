let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  if (input.value != "") {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    ul.appendChild(li);

    input.value = "";
  }
});
