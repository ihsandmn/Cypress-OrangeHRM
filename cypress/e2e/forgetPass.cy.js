import forgetPassword from "../support/POM/forgetpassPage.cy";
const forgetpassData = require("../fixtures/Authentication.json");

describe("Forgot Password Page", () => {
  const ForgetPassword = new forgetPassword();

  it("Change Password Successfully", () => {
    cy.visit(ForgetPassword.baseUrl);
    cy.get(ForgetPassword.FYPbutton).click();
    cy.get(ForgetPassword.userName).type(forgetpassData.validUsername);
    cy.get(ForgetPassword.restPassBtn).click();
    cy.get(ForgetPassword.textAnnouncement).should("be.visible");
  });
});
