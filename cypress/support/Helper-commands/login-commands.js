const login = () => {
  cy.visit("https://www.saucedemo.com/v1/");
  cy.get("#user-name").type("standard_user");
  cy.get("#password").type("secret_sauce");
  cy.get("#login-button").click();
};

export default login;
