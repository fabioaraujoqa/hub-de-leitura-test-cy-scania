const faker = require('faker-br');

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

  beforeEach(() => {
    cy.visit("register.html")
  });

  it('Deve fazer o cadastro com campos obrigatórios', () => {
    let nome = faker.name.firstName()
    let sobrenome = faker.name.lastName()
    let email = faker.internet.email(nome)

    cy.get('#name').type(`${nome} ${sobrenome}`)
    cy.get('#email').type(email)
    cy.get('#password').type('teste@123')
    cy.get('#confirm-password').type('teste@123')
    cy.get('#terms-agreement').check()
    cy.get('#register-btn').click()

    //Resultado esperado
    cy.get('#user-name').should('contain', nome)
  });

  it.only('Deve bloquear cadastro quando o email estiver repetido', () => {
    let email = `scania${Date.now()}@gmail.com`
    cy.preencherCadastro('Fabio Araujo', email, 'teste@123', 'teste@123') //Cadastrando com um email válido
    cy.preencherCadastro('Fabio Araujo', email, 'teste@123', 'teste@123') //Tentando cadastrar novamente com o mesmo email
    cy.get('#alert-container').should('contain', 'Erro ao criar conta.')
    
  });

});

