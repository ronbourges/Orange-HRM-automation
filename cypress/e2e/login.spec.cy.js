import userData from '../fixtures/userData.json'


describe('OrangeHRM', () => {

   const selecctorList = {
    usernameInput: "[name='username']",
    passwordInput: "[name='password']",
    submitButton: "button[type='submit']",
    errorMessage: '.oxd-alert-content-text'

   }
   
    it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selecctorList.usernameInput).type(userData.passes.usernameInput)
    cy.get(selecctorList.passwordInput).type(userData.passes.passwordInput)
    cy.get(selecctorList.submitButton).click()
    cy.url().should('include', '/dashboard')
  })

  it('fails', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    
    cy.get(selecctorList.usernameInput).type(userData.fails.usernameInput)
    cy.get(selecctorList.passwordInput).type(userData.fails.passwordInput)
    cy.get(selecctorList.submitButton).click()
    cy.get(selecctorList.errorMessage).should('contain', 'Invalid credentials')
})
})