let data = window.fetch("https://api.github.com/users");

data.then(
  function (d) {
    let res = d.json();
    res.then(
      (v) => {
        let tbody = document.querySelector("tbody");
        v.map((val) => {
          let { login, id, avatar_url, html_url } = val;
          tbody.innerHTML += `
                <tr>
                <td>${id}</td>
                <td><img src = ${avatar_url} alt = ${id}/></td>
                <td>${login}</td>
                <td><a href = ${html_url}>More Details</a></td>
                </tr>`;
        });
      },
      (e) => e
    );
  },
  function (e) {
    console.log(e);
  }
);
