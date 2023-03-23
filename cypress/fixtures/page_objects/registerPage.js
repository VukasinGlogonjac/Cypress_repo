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
      get registerBtn() {
        return cy.get ("a[href='/register']")
      }
      get registerTitle() {
        return cy.get (".title-style")
      }
      
  }
  export const registerPage = new RegisterPage()