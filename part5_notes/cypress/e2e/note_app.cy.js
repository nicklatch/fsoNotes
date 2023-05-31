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

  describe('when logged in', function () {
    beforeEach(function () {
      cy.contains(/Login/i).click();
      cy.get('input:first').type('nick');
      cy.get('input:last').type('nick');
      cy.get('#login-button').click();
    });

    it('a new note can be created', function () {
      cy.contains(/new note/i).click();
      cy.get('input').type('a note created by cypress');
      cy.contains(/save/i).click();
      cy.contains('a note created by cypress');
    });
  });
});
