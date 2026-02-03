describe('OrangeHRM', () => {
  it('passes', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Admin')
    cy.get("[name='password']").type('admin123')
    cy.get("button[type='submit']").click()
    cy.url().should('include', '/dashboard')
  })
  it('fails', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("[name='username']").type('Test')
    cy.get("[name='password']").type('test')
    cy.get("button[type='submit']").click()
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
})
})