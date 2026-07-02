const faker = require('faker-br');
import CadastroPage from '../support/pages/cadastro-page'

describe('Funcionalidade: Cadastro no Hub de Leitura', () => {

  beforeEach(() => {
    //cy.visit("register.html")
    CadastroPage.visitarPaginaCadastro()
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

  it('Deve bloquear cadastro quando o email estiver repetido', () => {
    let email = `scania${Date.now()}@gmail.com`
    cy.preencherCadastro('Fabio Araujo', email, 'teste@123', 'teste@123') //Cadastrando com um email válido
    cy.preencherCadastro('Fabio Araujo', email, 'teste@123', 'teste@123') //Tentando cadastrar novamente com o mesmo email
    cy.get('#alert-container').should('contain', 'Erro ao criar conta.')
    
  });

  it('Deve fazer cadastro com sucesso - Usando Page Objects', () => {
    let email = `scania${Date.now()}@gmail.com`
    let nome = 'Fábio Araújo'
    CadastroPage.preencherCadastro(nome, email, '11-987654321', 'Senha@123', 'Senha@123')
    cy.url().should('include', 'dashboard')
    cy.get('.fw-bold').should('contain', nome)
  });

    it.only('Deve validar fluxo com senhas diferentes', () => {
    let email = `scania${Date.now()}@gmail.com`
    let nome = 'Fábio Araújo'
    CadastroPage.preencherCadastro(nome, email, '11-987654321', 'Senha@123', 'Senha@321')
    cy.contains('Senhas não coincidem').should('exist')
  });

});

