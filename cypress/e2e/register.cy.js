import RegisterPage from '../pages/registerPage.js'; 

const registerPage = new RegisterPage();

const newUser = {
    firstName: 'TestFirstName1',
    lastName: 'TestLastName1',
    address: 'TestAddress1',
    city: 'TestCity1',
    state: 'TestState1',
    zipCode: 'TestZipCode1',
    phone: 'TestPhone1',
    ssn: 'TestSSN1',
    username: 'TestUsername2',
    password: 'TestPassword1',
    confirmPassword: 'TestPassword1',
}

const errorMessages = [
    {
        field: registerPage.firstNameInput,
        message: 'First name is required'
    },
    {
        field: registerPage.lastNameInput,
        message: 'Last name is required'
    },
    {
        field: registerPage.addressInput,
        message: 'Address is required'
    },
    {
        field: registerPage.cityInput,
        message: 'City is required'
    },
    {
        field: registerPage.stateInput,
        message: 'State is required'
    },
    {
        field: registerPage.zipCodeInput,
        message: 'Zip Code is required'
    },
    {
        field: registerPage.ssnInput,
        message: 'Social Security Number is required'
    },
    {
        field: registerPage.usernameInput,
        message: 'Username is required'
    },
    {
        field: registerPage.passwordInput,
        message: 'Password is required'
    },
    {
        field: registerPage.confirmPasswordInput,
        message: 'Password confirmation is required'
    }
]

it('Register a new user', () => {
    registerPage.navigate();
    registerPage.fillInput(newUser);
    registerPage.clickRegisterButton();
    cy.get(registerPage.successMessage).should('contain', `Welcome ${newUser.username}`);
});


it('Verify registering an existing user', () => {
    registerPage.navigate();
    registerPage.fillInput(newUser);
    registerPage.clickRegisterButton();
    cy.get(registerPage.errorMessage).should('contain', 'This username already exists');
});

it('Verify required fields', () => {
    registerPage.navigate();
    registerPage.clickRegisterButton();
    errorMessages.forEach(error => {
        cy.get(error.field + "\\" + registerPage.errorMessages).should('contain', error.message);
    });
});