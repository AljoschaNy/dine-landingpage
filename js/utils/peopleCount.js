import { formInputs } from "./formElements.js";

const addPersonBtn = document.getElementById("btn-add-people");
const removePersonBtn = document.getElementById("btn-reduce-people");
let peopleCountElem = formInputs.peopleCountElem;

const updatePeopleCount = (change) => {
  let peopleCount = parseInt(formInputs.peopleCountElem.innerText);
  peopleCount += change;
  peopleCount = Math.min(Math.max(peopleCount, 1), 20);
  peopleCountElem.innerText = peopleCount;
  document.getElementById("people-count-text").innerText =
    peopleCount > 1 ? "people" : "person";
};

const addPerson = () => {
  updatePeopleCount(1);
};

const removePerson = () => {
  updatePeopleCount(-1);
};

const handlePeopleCountChange = () => {
  addPersonBtn.addEventListener("click", addPerson);
  removePersonBtn.addEventListener("click", removePerson);
};

export default handlePeopleCountChange;
