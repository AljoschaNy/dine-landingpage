import { checkInput } from "./utils/validation.js";

document.addEventListener("DOMContentLoaded", function () {
  const reservationForm = document.getElementById("reservation-form");
  const formInputs = {
    username: document.getElementById("username"),
    email: document.getElementById("email"),
    reservationDate: document.querySelectorAll(".date-input"),
    reservationTime: document.querySelectorAll(".time-input"),
    peopleCount: document.getElementById("people-count"),
  };

  reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input1 = checkInput(formInputs.username, "no name");
    const input2 = checkInput(formInputs.email, "no email");
    const input3 = checkInput(
      formInputs.reservationDate,
      "This field is incomplete"
    );
    const input4 = checkInput(
      formInputs.reservationTime,
      "This field is incomplete"
    );

    if (input1 && input2 && input3 && input4) alert("form success");
  });
});
