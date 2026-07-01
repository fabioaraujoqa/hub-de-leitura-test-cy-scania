Cypress.Commands.add('preencherCadastro', (nome, email, senha, confirmarSenha) => { 
   cy.visit('register.html')  
   cy.get('#name').clear().type(nome)
    cy.get('#email').clear().type(email)
    cy.get('#password').clear().type(senha)
    cy.get('#confirm-password').clear().type(confirmarSenha)
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()
 })

Cypress.Commands.add('login', (email, senha) => { 
    cy.visit('login.html')    
    cy.get('#email').clear().type(email)
    cy.get('#password').clear().type(senha)
    cy.get('#login-btn').click()
 })