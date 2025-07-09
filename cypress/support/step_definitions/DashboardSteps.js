import DashboardPage from '../../pages/DashboardPage';
const dashboardPage = new DashboardPage();
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given('I am logged in to OrangeHRM', () => {
    cy.fixture('testData').then((data) => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('input[name="username"]').type(data.validUsername);
        cy.get('input[name="password"]').type(data.validPassword);
        cy.get('button[type="submit"]').click();
    });
});

When('I view the dashboard', () => {
    dashboardPage.visit();
});

Then('I should see all dashboard elements', () => {
    dashboardPage.verifyDashboardLoaded();
});