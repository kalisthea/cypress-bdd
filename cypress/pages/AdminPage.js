class AdminPage {
  elements = {
    adminMenu: () => cy.get('.oxd-sidepanel-body').contains('Admin'),
    addButton: () => cy.get('button').contains('Add'),
    userRoleDropdown: () => cy.get('.oxd-select-text').eq(0),
    employeeNameInput: () => cy.get('.oxd-autocomplete-text-input > input'),
    statusDropdown: () => cy.get('.oxd-select-text').eq(1),
    usernameInput: () => cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'),
    passwordInput: () => cy.get('input[type="password"]').eq(0),
    confirmPasswordInput: () => cy.get('input[type="password"]').eq(1),
    saveButton: () => cy.get('button[type="submit"]'),
    searchUsernameInput: () => cy.get('.oxd-input').eq(1).should('be.visible'),
    searchButton: () => cy.get('button[type="submit"]').contains('Search'),
    userTable: () => cy.get('.oxd-table-body').should('be.visible')
  };

  navigateToAdminPage() {
    this.elements.adminMenu().click();
    cy.url().should('include', '/admin/viewSystemUsers');
  }

  addNewAdminUser(userData) {
    this.elements.addButton().click();
    
    // Select User Role
    this.elements.userRoleDropdown().click();
    cy.get('.oxd-select-dropdown').contains('Admin').click();
    
    // Type Employee Name
    this.elements.employeeNameInput().type(userData.employeeName);
    cy.get('.oxd-autocomplete-dropdown').contains(userData.employeeName).click();
    
    // Select Status
    this.elements.statusDropdown().click();
    cy.get('.oxd-select-dropdown').contains('Enabled').click();
    
    // Fill user details
    this.elements.usernameInput().type(userData.username);
    this.elements.passwordInput().type(userData.password);
    this.elements.confirmPasswordInput().type(userData.password);
    
    // Save
    this.elements.saveButton().click();
    cy.get('.oxd-toast-container').should('contain', 'Successfully Saved');
  }

  verifyUserExists(username) {
      // 1. Break the chain and use aliases for stability
  cy.get('.oxd-input').eq(1).as('searchInput');
  cy.get('button[type="submit"]').contains('Search').as('searchBtn');

  // 2. Clear and type with separate commands
  cy.get('@searchInput')
    .should('be.visible')
    .then(($input) => {
      if ($input.val().length > 0) {
        cy.wrap($input).clear({ force: true });
      }
    });
    
  cy.get('@searchInput')
    .type(username, { 
      delay: 50,
      waitForAnimations: true 
    });

  // 3. Click with retry logic
  cy.get('@searchBtn')
    .should('be.visible')
    .and('not.be.disabled')
    .click();

  // 4. Verify with dynamic waiting
  cy.get('.oxd-table-body', { timeout: 10000 })
    .should(($table) => {
      expect($table.text()).to.include(username);
    });
  }
}

export default AdminPage;