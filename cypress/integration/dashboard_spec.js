describe('sign in', () => {


  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('.login-button').click()
      .get('.login-email-input').type('tony@test.com')
      .get('.login-password-input').type('tonysword')
      .get('.submit-login-button').click()
  });

  it('should navigate to catalogue and back to the dashboard', () => {
    cy.get('.catalogue-button').click()
    cy.get('.account-button').click()
  })

  it('should be able to go back home', () => {
    cy.get('.logo-button').click()
      .get('.account-button')
  })

  it('should display user details on dashboard', () => {
    cy.get('.nickname-header').contains('Hello tony test')
      .get('.zipcode-detail').contains('80017')
      .get('.zone-detail').contains('5b')
      .get('.frost-detail').contains('05/11/2022')
  })

  it('should allow user to update account', () => {
    cy.get('.edit-button').click()
      .get('.update-user-email').type('tilly@test.com')
      .get('.update-user-nickname').type('tilly test')
      .get('.update-user-zipcode').type('60625')
      .get('.update-user-button').click()

    cy.get('.nickname-header').contains('Hello tilly test')
      .get('.zipcode-detail').contains('60625')
      .get('.zone-detail').contains('6a')
      .get('.frost-detail').contains('04/25/2022')

    cy.get('.logo-button').click()
      .get('.home-logout-button').click()
      .get('.login-button').click()
      .get('.login-email-input').type('tilly@test.com')
      .get('.login-password-input').type('tonysword')
      .get('.submit-login-button').click()

    cy.get('.edit-button').click()
      .get('.update-user-email').type('tony@test.com')
      .get('.update-user-nickname').type('tony test')
      .get('.update-user-zipcode').type('80017')
      .get('.update-user-button').click()
  })

  it('should show no seed schedule if catalogue is empty', () => {
    cy.get('.no-seeds').contains('No Seeds to Plant')
  })
})
