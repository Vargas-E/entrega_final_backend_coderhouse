const usersSettingsContainer = document.getElementById(
  "usersSettingsContainer"
);

console.log("users:", users);

{
  /* <table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table> */
}

const builtUserSetttingsView = () => {
  let tableContainer = document.createElement("div");
  tableContainer.classList.add("usersTableContainer");
  let table = document.createElement("table");
  table.classList.add("usersTable");
  let tableInner = `
    <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Email</th>
        <th>Rol</th>
    </tr>
    `;
  users.forEach((user) => {
    const row = `
    <tr>
        <th>
            ${user.first_name}
        </th>
        <th>
            ${user.last_name}
        </th>
        <th>
            ${user.email}
        </th>
        <th>
            ${user.rol}
        </th>
    </tr>
    `;
    tableInner += row;
  });
  table.innerHTML = tableInner;
  console.log("table:", table);
  tableContainer.appendChild(table);
  usersSettingsContainer.appendChild(tableContainer);
};

builtUserSetttingsView();
