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
       <td class="d-flex">
       <button type="button" class="btn btn-danger" data-id=${coder.id}>delete</button>
       <button type="button" class="btn btn-warning" data-id=${coder.id}>edit</button>
       <button type="button" class="btn btn-primary" data-id=${coder.id}>details</button>
       <td>
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

export function deleteCoder(coders,idParaEliminar) {
  coders.forEach((coder,index) => {
    if (coder.id == idParaEliminar) {
      coders.splice(index, 1);
    }
  });
  
}