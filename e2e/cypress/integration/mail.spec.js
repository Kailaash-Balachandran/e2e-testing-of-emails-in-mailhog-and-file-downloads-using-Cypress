context('User Onboarding Emails', () => {
  it('Verification email is sent', () => {
      cy.mhGetMailsBySubject('Your account is now confirmed')
      .should('have.length', 1);
  })

  it('Email should contain username info', () => {
    const mail = cy.mhGetMailsBySubject('Your account is now confirmed').mhFirst().mhGetBody();
    mail.should('contain', 'Your username is');
  })

  it('Email should contain an image attachment', () => {
    const attachmentContentType = 'image/jpeg; name=unsplash.jpg';
    cy.mhGetMailsBySubject('Email sent with an image attachment').mhFirst().then(mail => {
      const imageAttachment = mail.MIME.Parts.filter(mime => {
        const contentType = mime.Headers['Content-Type'] || null;
        if (contentType) {
          return contentType.includes(attachmentContentType);
        }
      })
      expect(imageAttachment).to.have.lengthOf(1)
    });
  })
})
  