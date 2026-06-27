const faker = require('faker-br');

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

  beforeEach(() => {
    cy.visit("register.html")
  });

  it('Deve fazer o cadastro com campos obrigatórios', () => {
    let nome = faker.name.firstName()
    let sobrenome = faker.name.lastName()
    let email = faker.internet.email(nome)
    //let email2 = `scania${Date.now()}@gmail.com`

    cy.get('#name').type(`${nome} ${sobrenome}`)
    cy.get('#email').type(email)
    cy.get('#password').type('teste@123')
    cy.get('#confirm-password').type('teste@123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()

    //Resultado esperado
    cy.get('#user-name').should('contain', nome)
  });

  it('Deve bloquear cadastro quando o email estiver repetido', () => {
    //TO DO
    //Usando comando customizado
    
  });

});

