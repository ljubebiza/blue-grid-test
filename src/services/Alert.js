import Swal from "sweetalert2";

export const Alert = (position, icon, message, timer) => {
  Swal.fire({
    position: position,
    icon: icon,
    title: message,
    showConfirmButton: false,
    timer: timer,
  });
};
