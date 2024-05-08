export function whitForEach(coders) {
  const tbody = document.querySelector("tbody");
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
