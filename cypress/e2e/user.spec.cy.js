import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
 const dashboardPage = new DashboardPage() 

describe('OrangeHRM', () => {

  it('passes', () => {
  loginPage.accessLoginPage()
  loginPage.loginWithUser(userData.passes.usernameInput, userData.passes.passwordInput)
     cy.url().should('include', '/dashboard')
  dashboardPage.checkDashboardUrl()
  dashboardPage.clickMyInfo()
  })

  it('fails', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.fails.usernameInput, userData.fails.passwordInput)
    cy.get(loginPage.selectorsList().errorMessage)
  .should('contain', 'Invalid credentials')
  })
})