/// <reference types="cypress" />
import 'cypress-file-upload';
let Chance = require('chance');
let chance = new Chance();

context('Cadastro', () => {
  it('Cadastro de usuário no site', () => {
    // Rotas
    // POST 200 /api/1/databases/userdetails/collections/newtable?apiKey= 
    // POST 200 /api/1/databases/userdetails/collections/usertable?apiKey= 
    // GET 200 /api/1/databases/userdetails/collections/newtable?apiKey= 

    cy.server()
    cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('postNewTable');
    cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**').as('postUserTable');
    cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('getNewTable');

    cy.visit('/Register.html');

    /**
     * Mapeando e definindo estratégia de interação com Elementos
     * Campos de Texto: Primeiro nome, Ultimo Nome, Endereço, Email, Telefone
     * input[ng-model="FirstName"]
     * input[ng-model="LastName"]
     *  input[ng-model^=First"]
     *  input[ng-model$=Name]
     * textarea[ng-model="Adress"]
     * input[type="email"]
     *  input[ng-model="EmailAdress"]
     * input[ng-model="Phone"]
     *  input[type="tel"]
     * 
     * Campos Genero, Hobbies (radio and checkboxß)
     * input[value="Male"]
     * input[value="FeMale"]
     * input[value="Cricket"]
     * input[value="Movies"]
     * input[value="Hockey"]
     * input[id="checkbox1"]
     * input[id="checkbox2"]
     * input[id="checkbox3"]
     * 
     * Campos Idioma (Select)
     * input[id="msdd"]
     * select[id="Skills"]
     * select[id="countries"]
     * span[id="select2-country-container"]
     * select[id="yearbox"]
     * select[ng-model="monthbox"]
     * select[id="daybox"]
     * 
     * Campos de Senha e botão prosseguir
     * input[id="firstpassword"]
     * input[id="secondpassword"]
     * button[id="submitbtn"]
     * button[id="Button1"]
     * 
     */

    // Escrevendo em Campos
    cy.get('input[ng-model^="First"]').type(chance.first());
    cy.get('input[ng-model="LastName"]').type(chance.last());
    cy.get('textarea[ng-model="Adress"]').type(chance.address());
    cy.get('input[type="email"]').type(chance.email());
    cy.get('input[ng-model="Phone"]').type(chance.phone({ formatted: false, mobile: true }));

    // Interagindo com campos de seleção unica e multipla (radio and checkbox)
    cy.get('input[value="FeMale"]').check();
    cy.get('input[type="checkbox"]').check('Cricket');
    cy.get('input[type="checkbox"]').check('Hockey');

    // Campos de seleção (combos)
    //cy.get('select#msdd').click();
    cy.get('select#Skills').select('Engineering');
    cy.get('select#countries').select('Japan'); // 🚨 Isn't work
    cy.get('select#country').select('Japan', { force: true });
    cy.get('select#yearbox').select('2000');
    cy.get('select[ng-model="monthbox"]').select('July');
    cy.get('select#daybox').select('10');

    // Envio de Imagem
    cy.get('input#imagesrc').attachFile('image-photo.jpeg');

    // Senhas e Prosseguir
    cy.get('input#firstpassword').type('Password999');
    cy.get('input#secondpassword').type('Password999');
    cy.get('button#submitbtn').click();
    // cy.get('button#Button1');

    // Interagindo com Rotas
    cy.wait('@postNewTable').then((resNewTable) => {
      cy.log(resNewTable.status);

      // Usando Chai
      expect(resNewTable.status).to.eq(200);
      
    })
    cy.wait('@postUserTable').then((resUserTable) => {
      expect(resUserTable.status).to.eq(200);
      
    })
    cy.wait('@getNewTable').then((resNewTable) => {
      expect(resNewTable.status).to.eq(200);
      
    })

    cy.url().should('contain', 'WebTable')

  });
});