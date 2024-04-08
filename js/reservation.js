import { checkInput } from "./utils/validation/validation.js";
import { reservationForm, formInputs } from "./utils/formElements.js";
import handlePeopleCountChange from "./utils/peopleCount.js";

document.addEventListener("DOMContentLoaded", function () {
  handlePeopleCountChange();
  reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let isValid = true;

    const inputs = [
      checkInput(formInputs.usernameElem, "no name"),
      checkInput(formInputs.emailElem, "no email"),
      checkInput(formInputs.reservationDateElem, "This field is incomplete"),
      checkInput(formInputs.reservationTimeElem, "This field is incomplete"),
      formInputs.peopleCountElem.innerText,
    ];

    if (inputs.includes(null)) isValid = false;

    isValid ? console.log("valid form") : console.log("invalid form ");
  });
});
