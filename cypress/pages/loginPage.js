export class LoginPage {
    constructor() {
        this.usernameInput = 'input[name="username"]';
        this.passwordInput = 'input[name="password"]';
        this.submitButton = 'input[value="Log In"]';
        this.errorMessage = '.error';
        this.welcomeMessage = '.smallText';
    }

    navigate() {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    }

    fillUsername(username) {
        cy.get(this.usernameInput).type(username);
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password);
    }   

    clickLoginBtn() {
        cy.get(this.submitButton).click();
    }
}

export default LoginPage;
