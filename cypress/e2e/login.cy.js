import baseLogin from "../support/POM/loginPage.cy";
const loginData = require("../fixtures/Authentication.json");

describe("Login Page", () => {
  const BaseLogin = new baseLogin();

  it("Login Successfully", () => {
    cy.visit(BaseLogin.baseUrl);
    cy.get(BaseLogin.username).type(loginData.validUsername);
    cy.get(BaseLogin.password).type(loginData.validPassword);
    cy.get(BaseLogin.loginBtn).click();
    cy.get(BaseLogin.dasboardText).should("be.visible");
  });

  it("Login Failed", () => {
    cy.visit(BaseLogin.baseUrl);
    cy.get(BaseLogin.username).type("AdminCuy");
    cy.get(BaseLogin.password).type(loginData.validPassword);
    cy.get(BaseLogin.loginBtn).click();
    cy.get(".oxd-alert-content > .oxd-text");
  });
});
