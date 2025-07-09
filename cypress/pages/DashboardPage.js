export default class DashboardPage {
  visit() {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  }

  verifyDashboardLoaded() {
    cy.url().should('include', '/dashboard');
  }
}