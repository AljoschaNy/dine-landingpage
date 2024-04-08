const isEmptyCheck = (element) => {
  if (element instanceof NodeList) {
    const result = [];
    let isError = false;

    element.forEach((el) => {
      if (!el.value) {
        isError = true;
        el.classList.add("error");
      } else {
        el.classList.remove("error");
        result.push(el);
      }
    });

    return isError ? { isError, result: [] } : { isError, result };
  } else {
    if (!element.value) {
      element.classList.add("error");
      return { isError: true };
    } else {
      element.classList.remove("error");
      return { isError: false, result: element.value };
    }
  }
};

export default isEmptyCheck;
