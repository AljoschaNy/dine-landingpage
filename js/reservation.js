import { checkInput } from "./utils/validation/validation.js";
import { reservationForm, formInputs } from "./utils/formElements.js";

document.addEventListener("DOMContentLoaded", function () {
  reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const input1 = checkInput(formInputs.usernameElem, "no name");
    const input2 = checkInput(formInputs.emailElem, "no email");
    const date = checkInput(
      formInputs.reservationDateElem,
      "This field is incomplete"
    );
    const time = checkInput(
      formInputs.reservationTimeElem,
      "This field is incomplete"
    );
    console.log(input1);
    console.log(input2);
    console.log(date);
    console.log(time);

    if (input1 && input2 && input3 && input4) alert("form success");
  });
});
