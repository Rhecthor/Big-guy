function ValidateAndstoredata(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmpassword = document.getElementById('confirmpassword').value;

    // Simple Validation
    if (name === '' || email === '' || password === '' || confirmpassword === '') {
        alert('Please fill in all fields');
        return;
    }

    // Username validation (example: only letters and numbers allowed)
    const usernameRegex = /^[a-zA-Z0-9]+$/;
    if (!usernameRegex.test(name)) {
        alert('Invalid username. Only letters and numbers are allowed.');
        return;
    }

    // Store data in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('confirmpassword', confirmpassword);
}

function login() {
    const email = document.getElementById('loginEmailField').value;
    const password = document.getElementById('loginPasswordField');

    //Add your login logic here 
    alert('Login Successful');
}

function signup(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('signupNameField').value;
    const email = document.getElementById('signupEmailField').value;
    const phone = document.getElementById('signupPhoneField').value;
    const password = document.getElementById('signupPasswordField').value;
    const recaptchaResponse = grecaptcha.getResponse();

    // Simple Validation
    if (!recaptchaResponse) {
        displayErrorMessage('Please complete the reCAPTCHA');
        return;
    }

    // Additional signup logic here
}

function validatePassword(password) {
    return password.lenght >= 6;
}

function dispalyerrormessage(message) {
    const errormessage = document.getElementById('errorMessage');
    errormessage.textContent = message;
    errormessage.style.display = 'block';

    alert('invalid password');
}

function clearErrorMessage() {
    const errorMessage = document.getElementById('error Message');
    errorMessage.textContent = '';
    errorMessage.style.display = 'none';

}

function displayErrorMessage(message) {
    const errorMessageElement = document.getElementById('error-message');
    errorMessageElement.textContent = message;
    errorMessageElement.style.display = 'block';
}