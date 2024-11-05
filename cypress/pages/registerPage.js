export class RegisterPage {
    constructor() {
        this.firstNameInput = '#customer\\.firstName';
        this.lastNameInput = '#customer\\.lastName';
        this.addressInput = '#customer\\.address\\.street';
        this.cityInput = '#customer\\.address\\.city';
        this.stateInput = '#customer\\.address\\.state';
        this.zipCodeInput = '#customer\\.address\\.zipCode';
        this.phoneInput = '#customer\\.phoneNumber';
        this.ssnInput = '#customer\\.ssn';
        this.usernameInput = '#customer\\.username';
        this.passwordInput = '#customer\\.password';
        this.confirmPasswordInput = '#repeatedPassword';
        this.registerButton = 'input[value="Register"]';
        this.errorMessage = '.error';
        this.successMessage = '.title';
        this.errorMessages = '.errors';
    }

    navigate() {
        cy.visit('https://parabank.parasoft.com/parabank/register.htm');
    }

    fillInput(value){
        cy.get(this.firstNameInput).type(value.firstName);
        cy.get(this.lastNameInput).type(value.lastName);
        cy.get(this.addressInput).type(value.address);
        cy.get(this.cityInput).type(value.city);
        cy.get(this.stateInput).type(value.state);
        cy.get(this.zipCodeInput).type(value.zipCode);
        cy.get(this.phoneInput).type(value.phone);
        cy.get(this.ssnInput).type(value.ssn);
        cy.get(this.usernameInput).type(value.username);
        cy.get(this.passwordInput).type(value.password);
        cy.get(this.confirmPasswordInput).type(value.confirmPassword);
    }

    clickRegisterButton() {
        cy.get(this.registerButton).click();
    }
}

export default RegisterPage;