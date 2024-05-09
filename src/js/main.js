// Import our custom CSS
import "../styles/style.scss";
import Swal from "sweetalert2";

// Import all of Bootstrap's JS
import * as bootstrap from "bootstrap";
import { coders } from "../../public/database.js";
import { index } from "./operations.js";

let form = document.querySelector(".form");
// console.log(form);

let buttonSave = document.querySelector(".btn-save");
// console.log(buttonSave);

let buttonCancel = document.querySelector(".btn-cancel");
// console.log("buttonCancel");

const name = document.getElementById("name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");

form.addEventListener("submit", function (event) {
  console.log(name.value);
  console.log(lastName.value);
  console.log(email.value);

  const newCoder = {
    id: Date.now(),
    name: name.value,
    lastName: lastName.value,
    email: email.value,
  };

  coders.push(newCoder);
  form.reset();
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
  index(coders);
  event.preventDefault();
});
