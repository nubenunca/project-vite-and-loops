import Swal from "sweetalert2";

export function alertSave(text) {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: text,
    showConfirmButton: false,
    timer: 1500,
  });
}
