const reservationForm = document.getElementById("reservation-form");

const formInputs = {
  usernameElem: document.getElementById("username"),
  emailElem: document.getElementById("email"),
  reservationDateElem: document.querySelectorAll(".date-input"),
  reservationTimeElem: document.querySelectorAll(".time-input"),
  peopleCountElem: document.getElementById("people-count"),
};

export { reservationForm, formInputs };