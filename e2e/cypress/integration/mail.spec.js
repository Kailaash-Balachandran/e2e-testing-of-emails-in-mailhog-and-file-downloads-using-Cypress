context('User Onboarding Emails', () => {
  it('Verification email is sent', () => {
      cy.mhGetMailsBySubject('Your account is now confirmed')
      .should('have.length', 1);
  })

  it('Email should contain username info', () => {
    const mail = cy.mhGetMailsBySubject('Your account is now confirmed').mhFirst().mhGetBody();
    mail.should('contain', 'Your username is');
  })

  it('Email should contain two attachments', () => {
    cy.mhGetAllMails().then((mails) => {
        return mails.filter((mail) => {
            console.log('MAIL', mail);
            return mail.Content.Headers.Subject[0] === 'Email with Attachment'
        });
      });
    })
})
  