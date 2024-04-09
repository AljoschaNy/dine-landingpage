import { validateInput } from "./utils/validation/validation.js";
import { reservationForm, formInputs } from "./utils/formElements.js";
import handlePeopleCountChange from "./utils/peopleCount.js";

document.addEventListener("DOMContentLoaded", function () {
  handlePeopleCountChange();
  reservationForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const inputs = [
      validateInput(formInputs.usernameElem, "no name"),
      validateInput(formInputs.emailElem, "no email", "email"),
      validateInput(
        formInputs.reservationDateElem,
        "This field is incomplete",
        "date"
      ),
      validateInput(
        formInputs.reservationTimeElem,
        "This field is incomplete",
        "time"
      ),
      formInputs.peopleCountElem.innerText,
    ];
    !inputs.includes(null) && e.target.submit();
  });
});
