/// <reference types="cypress"/>

import Agendamento from "../support/Pages/Agendamento";
import Home from "../support/Pages/Home"
import Login from "../support/Pages/Login"

beforeEach(() => {
    cy.visit('/');
    Home.MarcarConsulta();
    Login.inserirUsuarioCorreto();
    Login.inserirSenhaCorreta();
    Login.clicarLogin();
    let titulo = 'Make Appointment'
    Login.verificarLoginSucesso(titulo);
})
context('Agendamento', () => {
    it('Realizar agendamento com sucesso', () => {
        Agendamento.clicarNoCheckbox();
        Agendamento.clicarNoCalendario();
        Agendamento.escolharData();
        let comentario = 'Isso é um comentario';
        Agendamento.comentar(comentario);
        Agendamento.marcarConsulta();
        let agendamentoSucesso = 'Appointment Confirmation';
        Agendamento.verificarConsultaMarcada(agendamentoSucesso);
    })
}) 