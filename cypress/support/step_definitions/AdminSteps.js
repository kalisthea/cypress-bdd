import AdminPage from "../../pages/AdminPage";
const adminPage = new AdminPage();
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";


Given ('I am logged in to OrangeHRM as Admin', () => {
  cy.fixture('testData').then((data) => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    cy.get('input[name="username"]').type(data.validUsername);
    cy.get('input[name="password"]').type(data.validPassword);
    cy.get('button[type="submit"]').click();
  });
});

When ('I navigate to the admin page', () => {
  adminPage.navigateToAdminPage();
}); 

When ('I add a new admin user', () => {
  cy.fixture('testData').then((data) => {
    adminPage.addNewAdminUser(data.newAdminUser);
  });
});     

Then ('I should see the new user in the list', () => {
  cy.fixture('testData').then((data) => {
    adminPage.verifyUserExists(data.newAdminUser.username);
  });
});