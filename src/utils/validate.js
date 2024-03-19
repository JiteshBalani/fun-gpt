export const checkValidation = (email, password, name) => {

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);

    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name); 

    if (!isEmailValid || !isPasswordValid) {
        return "* Email ID and/or Password is invalid";
    } 
    if (!isNameValid) {
        return "No numbers or special characters allowed in Name Field.";
    }

    return null;
}