describe('Verify autocomplete dropdown list via driverUni', () => {
  const serverId = 's8qpa7hf';
  const testEmail = `course-rocket@${serverId}.mailosaur.net`;
  let passwordResetLink;

  it('first mail test', () => {
    cy.visit('https://example.mailosaur.com/password-reset');
    cy.get('button').should('contain', 'Reset my password');
    cy.get('#email').type(testEmail);
    cy.get('form').submit();
  });

  it('Get a Password Reset email', () => {
    cy.mailosaurGetMessage(serverId, {
      sentTo: testEmail,
    }).then((email) => {
      cy.log(email.subject);
      passwordResetLink = email.html.links[0].href;
    });
  });

  it('Follows the link from the email', () => {
    const validPassword = 'test1';
    cy.visit(passwordResetLink);
    cy.get('#password').type(validPassword);
    cy.get('#confirmPassword').type(validPassword);
    cy.get('form').submit();
  });
});
