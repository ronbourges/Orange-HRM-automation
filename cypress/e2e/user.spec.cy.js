import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()
  

describe('OrangeHRM', () => {

   const selecctorList = {
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']"
   }

    it('passes', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.passes.usernameInput, userData.passes.passwordInput)
       cy.url().should('include', '/dashboard')
    cy.get(selecctorList.myInfoButton).click()
  })

  it('fails', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.fails.usernameInput, userData.fails.passwordInput)
    cy.get(loginPage.selectorsList().errorMessage)
  .should('contain', 'Invalid credentials')
  })
})