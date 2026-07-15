/// <reference types="cypress"/>
import catalogo from "../fixtures/livros.json"

describe('Funcionalidade: Catálogo do Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve fazer uma busca de um livro com sucesso', () => {
        cy.get('#search-input').type('Dom Quixote')
        cy.get('.card-title').should('contain', 'Dom Quixote')
    });

    it('Deve validar livro por nome fixo usando contain', () => {
        let livro = 'Dom Quixote'
        cy.get('#search-input').type(livro)
        cy.contains(livro).should('exist')
    });

    it('Buscar um livro por nome fixo usando contain', () => {
        let livro = 'Dom Quixote'
        cy.contains(livro).click()
        cy.contains(livro).should('exist')
    });

    it('Deve buscar o primeiro livro da tela', () => {
        cy.get('[class="btn btn-outline-info btn-sm view-details"]').first().click()
        cy.get('#add-to-cart-btn').click()
        cy.contains('Livro adicionado à cesta com sucesso')

    });

    it.skip('Deve buscar o ultimo livro da tela', () => {
        cy.get('[class="btn btn-outline-info btn-sm view-details"]').last().click()
        cy.get('#add-to-cart-btn').click()
        cy.contains('Livro adicionado à cesta com sucesso')

    });

    it('Deve buscar o terceiro livro da tela', () => {
        cy.get('[class="btn btn-outline-info btn-sm view-details"]').eq(2).click()
        cy.get('#add-to-cart-btn').click()
        cy.contains('Livro adicionado à cesta com sucesso')
    });


});