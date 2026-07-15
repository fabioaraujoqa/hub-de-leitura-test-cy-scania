# Hub de Leitura - Testes E2E com Cypress

Projeto de automacao de testes E2E para o Hub de Leitura usando Cypress com geracao de relatorios via Allure.

![CI](https://github.com/fabioaraujoqa/hub-de-leitura-test-cy-scania/actions/workflows/main.yml/badge.svg)

## Objetivo

Validar o comportamento das telas de cadastro, login, catalogo, cesta e fluxo completo de reserva, com dados dinamicos gerados via faker-br.

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

Para subir a aplicacao localmente:

	git clone https://github.com/fabioaraujoqa/hub-de-leitura.git
	cd hub-de-leitura
	npm install
	npm start

### Modo interativo (Cypress UI)

	npx cypress open

### Modo headless (terminal)

	npx cypress run

### Executar apenas o teste de cadastro

	npx cypress run --spec cypress/e2e/cadastro.cy.js

## Relatorio Allure

Apos a execucao, os resultados ficam em `allure-results/`. Para visualizar o relatorio localmente:

	npm run report

Para gerar o relatorio estatico:

	npm run report:generate

## CI/CD com GitHub Actions

O workflow `.github/workflows/main.yml` e acionado a cada push na branch `main` e realiza automaticamente:

1. Clona e sobe a aplicacao hub-de-leitura em http://localhost:3000
2. Aguarda o servidor estar disponivel com `wait-on`
3. Executa todos os testes Cypress com Chrome
4. Gera o relatorio Allure
5. Publica o relatorio no GitHub Pages

O relatorio de cada execucao fica disponivel em:
https://fabioaraujoqa.github.io/hub-de-leitura-test-cy-scania

## Estrutura principal

- cypress/e2e/: cenarios de teste (cadastro, login, catalogo, cesta, fluxo E2E)
- cypress/support/pages/: Page Objects das telas
- cypress/support/commands.js: comandos customizados do Cypress
- cypress.config.js: configuracao principal com Allure reporter
- .github/workflows/main.yml: pipeline de CI/CD

## Tecnologias utilizadas

- Cypress 15
- Allure Cypress 3
- faker-br
- JavaScript (CommonJS)
- GitHub Actions

## Observacoes

- O teste utiliza dados aleatorios para nome, sobrenome e email.
- A configuracao atual do Cypress define baseUrl como http://localhost:3000.
- Se a aplicacao nao estiver ativa nessa URL, os testes falharao.