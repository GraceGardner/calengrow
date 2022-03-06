describe('sign in', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

    it('should allow user to sign up and logout', () => {
      cy.intercept('POST','https://planty-api.herokuapp.com/api/v1/users',
        {
            "id": '11223',
            "email": "tony@test.com",
            "nickname": "tony test",
            "zipcode": "80017",
            "zone": "5a",
            "last_frost": "05/05/2022",
            "last_frost_short": "May 5",
            "token": "aboin130h13oginasgrtfyg3fghhjkj"
        })

      cy.get('.sign-up-button').click()
        .get('.signup-name-input').type('tony test')
        .get('.signup-zipcode-input').type('80017')
        .get('.signup-email-input').type('tony@test.com')
        .get('.signup-password-input').type('tonysword')
        .get('.signup-confirm-password-input').type('tonysword')
        .get('.submit-signup-button').click()
        .get('.home-logout-button').click()
        .get('.sign-up-button')
        .get('.login-button')
    })

    it('should not allow user to sign up with existing email', () => {

      cy.get('.sign-up-button').click()
        .get('.signup-name-input').type('tony test')
        .get('.signup-zipcode-input').type('80017')
        .get('.signup-email-input').type('pieisforeveryone@gmail.com')
        .get('.signup-password-input').type('tonysword')
        .get('.signup-confirm-password-input').type('tonysword')
        .get('.submit-signup-button').click()
        .get('.error-message').contains('422 Unprocessable Entity')
        .get('.error-button').click()
    })

    it('should allow user to login', () => {
      cy.get('.login-button').click()
        .get('.login-email-input').type('tony@test.com')
        .get('.login-password-input').type('tonysword')
        .get('.submit-login-button').click()
    })
})
