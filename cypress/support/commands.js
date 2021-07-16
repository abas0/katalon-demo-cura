// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import Home from "../support/Pages/Home"
import Login from "../support/Pages/Login"

Cypress.Commands.add("login", ()=> {
    cy.visit('/');
    Home.MarcarConsulta();
    Login.inserirUsuarioCorreto();
    Login.inserirSenhaCorreta();
    Login.clicarLogin();
    let titulo = 'Make Appointment'
    Login.verificarLoginSucesso(titulo);
}) 