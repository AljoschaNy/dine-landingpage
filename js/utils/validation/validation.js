import isEmptyCheck from "./isEmptyCheck";

const checkInput2 = (element, errorMessage) => {
  const parent =
    element instanceof NodeList
      ? element[0].parentElement
      : element.parentElement;
  const error = parent.querySelector(".error-message");
  const emptyCheckResult = isEmptyCheck(element);

  if (emptyCheckResult.isError) {
    error.innerText = errorMessage;
  } else {
    if (element instanceof NodeList) {
      element.forEach((el) => el.classList.remove("error"));
    } else {
      element.classList.remove("error");
    }
    error.innerText = "";
    return emptyCheckResult.result;
  }
};

export { checkInput };
