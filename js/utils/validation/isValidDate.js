import isValidNumber from "./isValidNumber.js";

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
