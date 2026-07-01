/// <reference types="cypress"/>

describe('Funcionalidade: Catálogo do Hub de Leitura', () => {

    beforeEach(() => {
        cy.visit('catalog.html')
    });

    it('Deve fazer uma busca de um livro com sucesso', () => {
        cy.get('#search-input').type('Dom Quixote')
        cy.get('.card-title').should('contain', 'Dom Quixote')
        
        
    });
    
});