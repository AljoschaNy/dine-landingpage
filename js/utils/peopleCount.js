import { formInputs } from "./formElements.js";

const addPersonBtn = document.getElementById("btn-add-people");
const removePersonBtn = document.getElementById("btn-reduce-people");
let peopleCountElem = formInputs.peopleCountElem;
let peopleCountInt = parseInt(formInputs.peopleCountElem.innerText);

const addPerson = () => {
  if (peopleCountInt < 20) peopleCountInt++;
  peopleCountElem.innerText = peopleCountInt;
  document.getElementById("people-count-text").innerText =
    peopleCountInt > 1 ? "people" : "person";
};

const removePerson = () => {
  if (peopleCountInt > 1) peopleCountInt--;
  peopleCountElem.innerText = peopleCountInt;
  document.getElementById("people-count-text").innerText =
    peopleCountInt > 1 ? "people" : "person";
};

const handlePeopleCountChange = () => {
  addPersonBtn.addEventListener("click", addPerson);
  removePersonBtn.addEventListener("click", removePerson);
};

export default handlePeopleCountChange;
