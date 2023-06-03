describe('Note app', function () {
  beforeEach(function () {
    cy.visit('');
    cy.request('POST', `${Cypress.env('BACKEND')}/testing/reset`);
    const user = {
      name: 'Nick Latcham',
      username: 'nick',
      password: 'nick',
    };
    cy.request('POST', `${Cypress.env('BACKEND')}/users/`, user);
  });

  it('front page can be opened', function () {
    cy.contains('Notes');
    cy.contains(
      'Note app, Department of Computer Science, University of Helsinki 2023'
    );
  });

  it('login form can be opened', function () {
    cy.contains('Login').click();
    cy.get('#username').type('nick');
    cy.get('#password').type('nick');
    cy.get('#login-button').click();
    cy.contains('Nick Latcham');
  });

  describe('when logged in', function () {
    beforeEach(function () {
      cy.login({ username: 'nick', password: 'nick' });
    });

    it('a new note can be created', function () {
      cy.contains(/new note/i).click();
      cy.get('input').type('a note created by cypress');
      cy.contains(/save/i).click();
      cy.contains('a note created by cypress');
    });

    describe('and several notes exisit', function () {
      beforeEach(function () {
        cy.createNote({
          content: 'first note',
          important: false,
        });
        cy.createNote({
          content: 'second note',
          important: false,
        });
        cy.createNote({
          content: 'third note',
          important: false,
        });
      });

      it('one of those can be made important', function () {
        cy.contains(/second note/i)
          .parent()
          .find('button')
          .as('theButton');
        cy.get('@theButton').click();
        cy.get('@theButton').should('contain', 'make not important');
      });
    });
  });

  it('login fails with wrong password', function () {
    cy.contains(/login/i).click();
    cy.get('#username').type('nick');
    cy.get('#password').type('wrong');
    cy.get('#login-button').click();

    cy.get('.error')
      .should('contain', 'Invalid Username or Password')
      .and('have.css', 'color', 'rgb(255, 0, 0)')
      .and('have.css', 'border-style', 'solid');

    cy.get('html').should('not.contain', 'Nick Latcham');
  });
});
