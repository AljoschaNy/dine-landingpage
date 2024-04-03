document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.getElementById("reservation-form");
    const username = document.getElementById("username");
    const email = document.getElementById("email")
    const reservationDate = document.querySelectorAll("date-input");
    const test = document.getElementById("date-month");


    const checkInput = (element, errorMessage) => {
        const parent = element.parentElement;
        const error = parent.querySelector(".error-message");

        console.log(element.value)
        if(!element.value) {
            element.classList.add("error");
            error.innerText = errorMessage;
        } else {
            element.classList.remove("error")
            error.innerText = "";
        }
    }

    reservationForm.addEventListener("submit", e => {
        e.preventDefault();

        checkInput(username, "no name");
        checkInput(email, "no email");
        checkInput(test, "test")

    })


})