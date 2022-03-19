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
    cy.intercept('POST','https://planty-api.herokuapp.com/api/v1/seed_catalogs',
      {
        "id": 1,
        "seed_id": 123,
        "name": "cosmo",
        "planting_date": "1 to 2 weeks before",
        "planted": false
      })
    cy.get('.add-seed-input').type('cosmo')
      .get('.add-to-catalogue-button').eq(0).click()
      // 
      // .get('.search-catalogue-input').type('cucumber')
      // .get('.catalogue-list-button').eq(0).click()
      // .get('.catalogue-card-container')
      // .get('.seed-view-button').click()
      // .get('.clear-button').click()
  })

  it('should make a schedule for user based on catalogue', () => {
    cy.intercept('PATCH','https://planty-api.herokuapp.com/api/v1/seed_catalogs/*',
      {
        "id": 1,
        "seed_id": 123,
        "name": "Super Max Hybrid Pickling Cucumber",
        "planting_date": "1 to 2 weeks before",
        "planted": true
      })
    cy.get('.account-button').click()
      .get('.schedule-card-container')
      .get('.plant-button-container')
      .get('.plant-button').eq(5).click()
      .get('.plant-button').eq(5).contains('Planted!')
  })

})
