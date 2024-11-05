import LoginPage from '../pages/loginPage.js';

const loginPage = new LoginPage();

it('Login with valid credentials', () => {
    loginPage.navigate();
    loginPage.fillUsername('TestUsername2');
    loginPage.fillPassword('TestPassword1');
    loginPage.clickLoginBtn();
    cy.get('title').should('contain', 'ParaBank | Accounts Overview');
    cy.url().should('eq', 'https://parabank.parasoft.com/parabank/overview.htm');
    cy.get(loginPage.welcomeMessage).should('contain', 'Welcome TestFirstName1');
});

it('Login with invalid username', () => {
    loginPage.navigate();
    loginPage.fillUsername('Invalid');
    loginPage.fillPassword('TestPassword1');
    loginPage.clickLoginBtn();
    cy.get(loginPage.errorMessage).should('contain', 'The username and password could not be verified.');
});

it('Login with invalid password', () => {
    loginPage.navigate();
    loginPage.fillUsername('TestUsername1');
    loginPage.fillPassword('Invalid123');
    loginPage.clickLoginBtn();
    cy.get(loginPage.errorMessage).should('contain', 'The username and password could not be verified.');
});

it('Login with no credentials entered', () => {
    loginPage.navigate();
    loginPage.clickLoginBtn();
    cy.get(loginPage.errorMessage).should('contain', 'Please enter a username and password');
});