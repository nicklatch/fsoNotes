describe('Note app', function () {
  beforeEach(function () {
    cy.visit('http://localhost:5173');
  });

  it('front page can be opened', function () {
    cy.contains('Notes');
    cy.contains(
      'Note app, Department of Computer Science, University of Helsinki 2023'
    );
  });

  it('login form can be opened', function () {
    cy.contains('Login').click();
  });

  it('user can login', function () {
    cy.contains('Login').click();
    cy.get('#username').type('nick');
    cy.get('#password').type('nick');
    cy.get('#login-button').click();
    cy.contains('Nick Latcham');
  });
});
