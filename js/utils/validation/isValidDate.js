import isValidNumber from "./isValidNumber.js";

const isValidDate = (date) => {
  let isValid = [
    isValidNumber(date[0], "month"),
    isValidNumber(date[1], "day"),
    isValidNumber(date[2], "year"),
  ].every((val) => val);

  return isValid
    ? { isValid }
    : { isValid, errorMessage: "Please provide correct date information" };
};

export default isValidDate;
