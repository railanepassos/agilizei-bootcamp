# 🤖 Primeiro projeto desenvolvido durante o Bootcamp Agilizei

## Tecnologias utilizadas:
- node.js v14.17.0
- cypress v4.10.0
- chancejs
- cucumber html reporter v5.4.0
- faker v5.5.3

## Como instalar dependências:
1. No terminal Clone o repositório com o comando: `git clone <link de repositório>`
2. No terminald Acesse o repositório clonado com o comando: `cd <nome_do_projeto>`
3. No terminal Instale as dependências com o comando: `npm install`

## Como rodar os testes:
1. Abrir terminal;
2. Para rodar testes e gerar evidências: `npm run cypress:run`

    2.1 Para rodar testes ultilizando chrome no modo Headless: `npm run headless:run`

## Estrutura de pastas:
```
  ├── cypress
  |  ├── fixtures
  |  ├── integration
  |  ├── plugins  
  |  ├── reports
  |  ├── screenshots
  |  ├── support
  |  │   ├── elements
  |  │   ├── pageobjects
  |  │   ├── steps
  |  │   ├── commands.js
  |  │   ├── cucumber-html-report.js
  |  │   ├── index.js
  |  ├── videos
  |  ├── .gitignore
  |  ├── cypress.json
  |  ├── package-lock.json
  |  ├── package.json
  |  ├── README.md
```
- `integration:` teremos nossos cenários cenários utilizando o javascript;
- `support/elements:` aqui ficam os elementos mapeados do sistema testado;
- `support/pageobjects:` aqui ficam os os scripts feitos em Cypress;
- `support/steps:` aqui ficam os passos que fazem conexão entre o que escrevemos em Gherkin e os scripts feitos em Cypress.


### Specs:
- `cadastro.spec.js`

### Execução dos Testes: