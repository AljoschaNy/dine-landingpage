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
    case "year":
      const date = new Date();
      min = date.getFullYear();
      max = min + 1;
      break;
    case "hour":
      max = 12;
      break;
    default:
      max = 60;
  }

  if (isNaN(inputAsNumber) || inputAsNumber < min || inputAsNumber > max) {
    input.classList.add("error");
    return false;
  }
  return true;
};

export default isValidNumber;
