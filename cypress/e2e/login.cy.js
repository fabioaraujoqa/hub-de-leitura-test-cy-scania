/// <reference types="cypress"/>
import user from "../fixtures/usuario.json"

describe('Funcionalidade: Login no Hub de Leitura', () => {

    it('Deve fazer o login com sucesso usando import', () => {
        cy.login(user.usuario, user.senha)
        cy.url().should('contain', 'dashboard')
    });

    it('Deve fazer o login com sucesso usando fixture', () => {
        cy.fixture('usuario').then(user => {
            cy.login(user.usuario, user.senha)
        })

        cy.url().should('contain', 'dashboard')
    });
});