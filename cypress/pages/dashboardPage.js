class DashboardPage {

  selectorsList() {
    return {
      myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
      dashboardUrl: '/dashboard'
    }
  }

  checkDashboardUrl() {
    cy.url().should('include', this.selectorsList().dashboardUrl)
  }

  clickMyInfo() {
    cy.get(this.selectorsList().myInfoButton).click()
  }

}

export default DashboardPage
