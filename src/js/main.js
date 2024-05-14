// Import our custom CSS
import "../styles/style.scss";
import Swal from "sweetalert2";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { coders } from "../../public/database.js";
import { index, deleteCoder } from "./operations.js";
import { alertSave } from "./alert.js";

let form = document.querySelector(".form");
// console.log(form);

let buttonSave = document.querySelector(".btn-save");
// console.log(buttonSave);

let buttonCancel = document.querySelector(".btn-cancel");
// console.log("buttonCancel");

const table = document.querySelector("table");
const name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const tbody = document.querySelector("tbody")

form.addEventListener("submit", function (event) {
  const newCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value,
  };

  coders.push(newCoder);
  form.reset();
  alertSave();
  index(coders);
  event.preventDefault();
});

//evento de dar clik al botón pero accediendo al botton.
table.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-danger")) {
    alertSave("le diste clcik al button");
    const idParaEliminar = event.target.getAttribute("data-id");
    console.log(idParaEliminar);

    deleteCoder(coders,idParaEliminar)

 
    alertSave("coder deleted");
    index(coders, tbody);
  }
});
