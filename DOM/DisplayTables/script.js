let users = [
  { name: "venkatesh", age: 16 },
  { name: "Lakshmi seshasai", age: 30 },
  { name: "kushyanth", age: 16 },
  { name: "satish", age: 40 },
  { name: "akshay", age: 14 }
];

let trs = "";

users.forEach((user, index) => {
  trs += `
      <tr>
          <td>${index}</td>
          <td>${user.name}</td>
          <td>${user.age}</td>
      </tr>
  `;
});

let table = `
  <table border="1" class="abc">
      <tr>
          <th>Index</th>
          <th>Name</th>
          <th>Age</th>
      </tr>
      ${trs}
  </table>
`;

document.getElementById("ref").innerHTML = table;
