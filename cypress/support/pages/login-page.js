class LoginPage {
    //seletores
    campoEmail() { return  cy.get('#email')}
    campoSenha() { return  cy.get('#password')}
    botaoLogin() { return  cy.get('#login-btn')}

    //Métodos - Ações
    visitarPaginaLogin() {
        cy.visit('login.html')
    }

    preencherLogin(email, senha) {
        this.campoEmail().clear().type(email, { log: false })
        this.campoSenha().clear().type(senha, { log: false })
        this.botaoLogin().click()
    }


}

export default new LoginPage()