export function index(coders) {
  const tbody = document.querySelector("tbody");
  tbody.innerHTML = "";
  coders.forEach((coder) => {
    tbody.innerHTML += `
        <tr>
     <th scope="row">${coder.id}</th>
       <td>${coder.name}</td>
       <td>${coder.lastName}</td>
       <td class="tolowercase">
         ${coder.email}
       </td>
     </tr>`;
  });
}

export function create(name, lastName, email, coders) {
  const newCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value,
  };

  coders.push(newCoder);
}
