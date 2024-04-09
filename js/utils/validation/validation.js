import isEmptyCheck from "./isEmptyCheck.js";
import isValidDate from "./isValidDate.js";
import isValidEmail from "./isValidEmail.js";
import isValidTime from "./isValidTime.js";

const validateInput = (element, errorMessage, type = "text") => {
  const parent =
    element instanceof NodeList
      ? element[0].parentElement
      : element.parentElement;
  const error = parent.querySelector(".error-message");
  const emptyCheckResult = isEmptyCheck(element);

  if (emptyCheckResult.isError) {
    error.innerText = errorMessage;
    return null;
  } else {
    if (element instanceof NodeList) {
      let checkedInput = {};

      switch (type) {
        case "date":
          checkedInput = isValidDate(element);
          break;
        case "time":
          checkedInput = isValidTime(element);
      }

      if (!checkedInput.isValid) {
        error.innerText = checkedInput.errorMessage;
        return null;
      }

      element.forEach((el) => {
        el.classList.remove("error");
      });
    } else {
      if (type === "email" && element.value) {
        const emailCheck = isValidEmail(element.value);
        if (!emailCheck.isValid) {
          element.classList.add("error");
          error.innerText = emailCheck.errorMessage;
          return null;
        }
        error.innerText = "";
      } else {
        element.classList.remove("error");
      }
    }
    error.innerText = "";
    // return emptyCheckResult.result;
  }
};

export { validateInput };
