describe('Bug Tracker E2E', ()=>{
  it('can create and delete a bug', ()=>{
    cy.visit('/');
    cy.get('input[placeholder="Title"]').type('Cypress Bug');
    cy.get('button').contains('Add Bug').click();
    cy.contains('Cypress Bug').should('exist');
    cy.contains('Delete').click();
    cy.contains('Cypress Bug').should('not.exist');
  });
});
