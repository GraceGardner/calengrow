describe('sign in', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
      .get('.account-button').click()
  });

  it('should navigate to catalogue', () => {
    cy.get('.catalogue-button').click()
  })

  it('should be able to go back home', () => {
    cy.get(logo).click()
  })

  
})
