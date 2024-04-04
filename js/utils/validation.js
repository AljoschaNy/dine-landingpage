const checkInput = (element, errorMessage) => {
    if (element instanceof NodeList) {
      const parent = element[0].parentElement;
      const error = parent.querySelector(".error-message");
      let isError = false;

      element.forEach((el) => {
        if (!el.value) {
          isError = true;
          el.classList.add("error");
        } else {
          el.classList.remove("error");
        }
      });

      if (isError) {
        error.innerText = errorMessage;
      } else {
        element.forEach((el) => el.classList.remove("error"));
        error.innerText = "";
        return true;
      }
    } else {
      const parent = element.parentElement;
      const error = parent.querySelector(".error-message");

      if (!element.value) {
        element.classList.add("error");
        error.innerText = errorMessage;
      } else {
        element.classList.remove("error");
        error.innerText = "";
        return true
      }
    }
  };

  export { checkInput };