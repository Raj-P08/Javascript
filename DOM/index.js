class student {
  constructor(name, mobile) {
    this.name = name;
    this.mobile = mobile;
  }
}

let e1 = new student("raj", 9284140139);
console.log(e1);

let e2 = new student("Ayesha", 8010831854);

let e3 = new student("Akash", 7083101530);
let e4 = new student("Amruta", 9167262014);

let details = [e1, e2, e3, e4];
console.log(details);

let table = document.querySelector("table");

details.map((e) => {
  //   let row = document.createElement("tr");
  //   table.appendChild(row);
  //   let data = document.createElement("td");
  //   row.appendChild(data);
  //   let data2 = document.createElement("td");
  //   row.appendChild(data2);
  //   data.innerHTML = e.name;
  //   data2.innerHTML = e.mobile;

  table.innerHTML += `<tr><td>${e.name}</td> <td>${e.mobile}</td></tr>`;
});
