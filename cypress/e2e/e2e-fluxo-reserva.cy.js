/// <reference types="cypress"/>
import CadastroPage from "../support/pages/cadastro-page"
import LoginPage from "../support/pages/login-page"

describe('Teste de ponta a ponta de Reserva de 3 livros', () => {

    beforeEach(() => {
        cy.visit('index.html')
    });

    it('Deve fazer a Reserva de 3 livros com sucessor', () => {
        cy.contains('CESTA DE LIVROS').click()
        cy.contains('Explorar Catálogo').click()

        cy.fixture('livros.json').then((livros) => {
            const selecionados = Cypress._.sampleSize(livros, 3)
            selecionados.forEach((livro) => {
                cy.get('#search-input').clear().type(livro.livro)
                cy.get('.add-to-cart').first().click()
                cy.wait(300) 
            })
        })

        cy.contains('CESTA DE LIVROS').click()
        cy.contains('Finalizar Reserva').click()
        cy.wait(10000)

    
        let nome = 'Fábio Araujo'
        let email = `teste.${Date.now()}@gmail.com`
        let senha = 'Senha@123'


        CadastroPage.visitarPaginaCadastro()
        CadastroPage.preencherCadastro(nome, email, '11-987654321', senha, senha)
        
        LoginPage.visitarPaginaLogin()
        LoginPage.preencherLogin(email, senha)

        //cy.get('#user-name').should('contain', nome)
    });
    
});