describe('Error handling', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('should handle 500 errors', () => {
    cy.intercept('POST','https://planty-api.herokuapp.com/api/v1/users/login', {
      statusCode: 500
    })
    .get('.login-button').click()
    .get('.submit-login-button').click()
    .get('p').contains('500 Internal Server Error')
    .get('.error-button').click()
  })

  it('should handle 404 errors', () => {
    cy.intercept('POST','https://planty-api.herokuapp.com/api/v1/users/login', {
      statusCode: 404
    })
    .get('.login-button').click()
    .get('.submit-login-button').click()
    .get('p').contains('404 Not Found')
    .get('.error-button').click()
  })

  it('should handle 404 errors', () => {
    cy.intercept('POST','https://planty-api.herokuapp.com/api/v1/users/login', {
      statusCode: 401
    })
    .get('.login-button').click()
    .get('.submit-login-button').click()
    .get('p').contains('401 Unauthorized')
    .get('.error-button').click()
  })
})
