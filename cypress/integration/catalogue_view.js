describe('catalogue view', () => {


  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.login-button').click()
      .get('.login-email-input').type('plantlady@test.com')
      .get('.login-password-input').type('plantladyword')
      .get('.submit-login-button').click()
      .get('.catalogue-button').click()
  });

  it('be able to search and add seeds to users catalogue', () => {
    cy.get('.add-seed-input').type('cucumber')
      .get('.add-to-catalogue-button').eq(0).click()
      .get('.add-to-catalogue-button').eq(0).contains('HAS BEEN ADDED!')

      .get('.search-catalogue-input').type('strawberry')
      .get('.catalogue-list-button').click()
      .get('.catalogue-card-container')
      .get('.seed-view-button').click()
      .get('.clear-button').click()
  })

  it('should make a schedule for user based on catalogue', () => {
    cy.get('.account-button').click()
      .get('.schedule-card-container')
      .get('.plant-button-container')
      .get('.plant-button').eq(0).click()
      .get('.plant-button').eq(0).contains('Planted!')
  })

})
