/// <reference types="cypress"/>
import CadastroPage from "../support/pages/cadastro-page"
import LoginPage from "../support/pages/login-page"

describe('Teste de ponta a ponta, validando Cadastro e Login', () => {

    it('Deve fazer Cadastro e depois validar o login', () => {
        let nome = 'Fábio Araujo'
        let email = `teste.${Date.now()}@gmail.com`
        let senha = 'Senha@123'

        CadastroPage.visitarPaginaCadastro()
        CadastroPage.preencherCadastro(nome, email, '11-987654321', senha, senha)
        
        LoginPage.visitarPaginaLogin()
        LoginPage.preencherLogin(email, senha)

        cy.get('#user-name').should('contain', nome)
    });
    
});