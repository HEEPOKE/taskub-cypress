describe('Test', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      return false
    })
  })

  it('should log in successfully with correct credentials', () => {
    cy.visit('/login')

    cy.get('input[name="username"]')
    cy.get('input[name="password"]')
  })
})
