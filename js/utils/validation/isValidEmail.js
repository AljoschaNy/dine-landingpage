const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = pattern.test(email);

    return isValid ? {isValid} : {isValid, errorMessage: "Please provide a valid email"};
}

export default isValidEmail;