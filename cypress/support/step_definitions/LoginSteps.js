import LoginPage from '../../pages/loginPage';
const loginPage = new LoginPage();
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('I am on the login page', () => {
  loginPage.visit();
});

When('I enter valid credentials', () => {
  cy.fixture('testData').then((data) => {
    loginPage.typeUsername(data.validUsername);
    loginPage.typePassword(data.validPassword);
  });
  loginPage.clickLogin();
});

When('I enter invalid credentials', () => {
  cy.fixture('testData').then((data) => {
    loginPage.typeUsername(data.invalidUsername);
    loginPage.typePassword(data.invalidPassword);
  });
  loginPage.clickLogin();
});

Then('I should be redirected to the dashboard', () => {
  cy.url().should('include', '/dashboard');
});

Then('I should see an error message', () => {
  loginPage.elements.errorMessage().should('be.visible');
});