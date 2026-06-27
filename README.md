# Hub de Leitura - Testes E2E com Cypress

Projeto de automacao de testes E2E para o fluxo de cadastro do Hub de Leitura usando Cypress.

## Objetivo

Validar o comportamento da tela de cadastro, preenchendo os campos obrigatorios com dados dinamicos gerados via faker-br.

## Pre-requisitos

- Node.js 18 ou superior
- npm (instalado junto com Node.js)
- Aplicacao do Hub de Leitura em execucao local
- URL base da aplicacao respondendo em: http://localhost:3000
- Pagina de cadastro acessivel em: /register.html

## Instalacao

1. Clone o repositorio:

	git clone https://github.com/fabioaraujoqa/hub-de-leitura-test-cy-scania.git

2. Acesse a pasta do projeto:

	cd hub-de-leitura-test-cy-scania

3. Instale as dependencias:

	npm install

## Execucao dos testes

Antes de executar os testes, garanta que a aplicacao esteja rodando em http://localhost:3000.

### Modo interativo (Cypress UI)

npx cypress open

### Modo headless (terminal)

npx cypress run

### Executar apenas o teste de cadastro

npx cypress run --spec cypress/e2e/cadastro.cy.js

## Estrutura principal

- cypress/e2e/cadastro.cy.js: cenario de cadastro com validacao de sucesso
- cypress/support/: configuracoes e comandos globais do Cypress
- cypress.config.js: configuracao principal (inclui baseUrl)

## Tecnologias utilizadas

- Cypress 15
- faker-br
- JavaScript (CommonJS)

## Observacoes

- O teste utiliza dados aleatorios para nome, sobrenome e email.
- A configuracao atual do Cypress define baseUrl como http://localhost:3000.
- Se a aplicacao nao estiver ativa nessa URL, os testes falharao.