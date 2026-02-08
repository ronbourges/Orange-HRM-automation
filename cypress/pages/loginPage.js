class LoginPage {
    selectorsList() {
        return {
          usernameInput: "[name='username']",
          passwordInput: "[name='password']",
          submitButton: "button[type='submit']",  
          errorMessage: '.oxd-alert-content-text'
        }
    }
    accessLoginPage() {
        cy.visit('/auth/login')
    }
    loginWithUser (username, password) {
        cy.get(this.selectorsList().usernameInput).type(username)
        cy.get(this.selectorsList().passwordInput).type(password)
        cy.get(this.selectorsList().submitButton).click()
    }
}
export default LoginPage