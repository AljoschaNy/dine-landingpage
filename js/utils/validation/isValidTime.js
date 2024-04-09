import isValidNumber from "./isValidNumber.js";

const isValidTime = (time) => {
  let isValid = [
    isValidNumber(time[0], "month"),
    isValidNumber(time[1], "day"),
  ].every((val) => val);

  if (isValid) {
    return { isValid };
  } else {
    return { isValid, errorMessage: "Please provide correct time" };
  }
};

export default isValidTime;
