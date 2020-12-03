/// <reference types="cypress" />

context('Email', () => {
    it('only one email', () => {
        cy
  .mhGetMailsBySubject('Email with Attachment')
  .should('have.length', 1);
    })



    it('Check', () => {

    cy.mhGetAllMails().then((mails) => {
        return mails.filter((mail) => {
            console.log('MAIL', mail);
            return mail.Content.Headers.Subject[0] === 'Email with Attachment'
        });
      });
    })
  })
  