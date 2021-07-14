/// <reference types="cypress"/>

import Login from "../support/Pages/Login";
import Home from "../support/Pages/Home"

context('Login', () => {
    it('Realizar login', () => {
        cy.visit('/');
        Home.MarcarConsulta();
        Login.inserirUsuario();
        Login.inserirSenha();
        Login.clicarLogin();
        let titulo = 'Make Appointment'
        Login.verificarLogin(titulo);
    })
}) 