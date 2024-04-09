const isValidNumber = (input, type) => {
  const inputAsNumber = parseInt(input.value);
  let min = 1;
  let max;

  switch (type) {
    case "month":
      max = 12;
      break;
    case "day":
      max = 31;
      break;
    default:
      const date = new Date();
      min = date.getFullYear();
      max = min + 1;
  }

  if (isNaN(inputAsNumber) || inputAsNumber < min || inputAsNumber > max) {
    input.classList.add("error");
    return false;
  }
  return true;
};

const isValidDate = (date) => {
  let isValid = [
    isValidNumber(date[0], "month"),
    isValidNumber(date[1], "day"),
    isValidNumber(date[2], "year"),
  ].every((val) => val);

  if (isValid) {
    return { isValid };
  } else {
    return { isValid, errorMessage: "Please provide correct date information" };
  }
};

export default isValidDate;
