/// <reference types="cypress"/>

import Login from "../support/Pages/Login";
import Home from "../support/Pages/Home"

context('Login', () => {
    it.only('Realizar login com sucesso', () => {
        cy.visit('/');
        Home.MarcarConsulta();
        Login.inserirUsuarioCorreto();
        Login.inserirSenhaCorreta();
        Login.clicarLogin();
        let titulo = 'Make Appointment'
        Login.verificarLoginSucesso(titulo);
    })
    it.only('Login inválido: Login sem user e nem password', () => {
        cy.visit('/');
        Home.MarcarConsulta();
        Login.clicarLogin();
        let loginInvalido = 'Login failed! Please ensure the username and password are valid.';
        Login.verificarLoginFalha(loginInvalido);
    })
    it.only('Login inválido: Login sem user e apenas com senha', () => {
        cy.visit('/');
        Home.MarcarConsulta();
        Login.inserirSenhaCorreta();
        Login.clicarLogin();
        let loginInvalido = 'Login failed! Please ensure the username and password are valid.';
        Login.verificarLoginFalha(loginInvalido);
    })
    it.only('Login inválido: Login apenas com user e sem senha', () => {
        cy.visit('/');
        Home.MarcarConsulta();
        Login.inserirUsuarioCorreto();
        Login.clicarLogin();
        let loginInvalido = 'Login failed! Please ensure the username and password are valid.';
        Login.verificarLoginFalha(loginInvalido);
    })

    it.only('Login inválido: usuário inválido', () =>{
        let usuario = 'a'
        cy.visit('/');
        Home.MarcarConsulta();
        Login.inserirUsuarioIncorreto(usuario);
        Login.inserirSenhaCorreta();
        Login.clicarLogin();
        let loginInvalido = 'Login failed! Please ensure the username and password are valid.';
        Login.verificarLoginFalha(loginInvalido);
    })

    it.only('Login inválido: senha inválidaa', () =>{
        let senha = 'a'
        cy.visit('/');
        Home.MarcarConsulta();
        Login.inserirUsuarioCorreto();
        Login.inserirSenhaIncorreta(senha);
        Login.clicarLogin();
        let loginInvalido = 'Login failed! Please ensure the username and password are valid.';
        Login.verificarLoginFalha(loginInvalido);
    })

    it.only('Login inválido: usuário inválido', () =>{
        let usuario = 'a'
        let senha = 'a'
        cy.visit('/');
        Home.MarcarConsulta();
        Login.inserirUsuarioIncorreto(usuario);
        Login.inserirSenhaIncorreta(senha);
        Login.clicarLogin();
        let loginInvalido = 'Login failed! Please ensure the username and password are valid.';
        Login.verificarLoginFalha(loginInvalido);
    })
}) 