// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Comando customizado para adicionar um contato
Cypress.Commands.add('adicionarContato', (nome, email, telefone) => {
  cy.get('input[type="text"]').first().type(nome)
  cy.get('input[type="email"]').type(email)
  cy.get('input[type="tel"]').type(telefone)
  cy.get('button[type="submit"]').click()
})

// Comando customizado para limpar a lista de contatos
Cypress.Commands.add('limparContatos', () => {
  cy.get('body').then(($body) => {
    if ($body.find('.delete').length > 0) {
      cy.get('.delete').each(($el) => {
        cy.wrap($el).click()
      })
    }
  })
})
