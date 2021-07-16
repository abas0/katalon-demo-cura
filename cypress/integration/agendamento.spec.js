/// <reference types="cypress"/>

import Agendamento from "../support/Pages/Agendamento";

//beforeEach(() => {
    
//})
context('Agendamento', () => {
    it('Realizar agendamento com sucesso', () => {
        cy.login();
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