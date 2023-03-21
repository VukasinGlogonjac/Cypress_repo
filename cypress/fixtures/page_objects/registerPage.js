class RegisterPage {

    get firstNameInputField() {
   return cy.get("#first-name")
    }
    get lastNameInputField() {
      return cy.get ('#last-name')
    }
    get emailInputField() {
        return cy.get ('#email')
      }
      get passwordInputField() {
        return cy.get ('#password')
      }
      get passwordConfInputField() {
        return cy.get ('#password-confirmation')
      }
      get formCheckInput() {
        return cy.get ('.form-check-input')
      }
      get submitBtn() {
        return cy.get ('.btn')
      }
  }
  export const registerPage = new RegisterPage()