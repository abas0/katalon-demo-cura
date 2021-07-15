const elements = require('../Agendamento/elements').ELEMENTS;

class Agendamento{
    clicarNoCheckbox(){
        cy.get(elements.checkbox).click();
    }
    clicarNoCalendario(){
        cy.get(elements.calendar).click();
    }
    escolharData(){
        cy.get(elements.td).contains(elements.date).click();
    }
    comentar(comentario){
        cy.get(elements.comment).type(comentario, {force: true});
    }
    marcarConsulta(){
        cy.get(elements.bookAppointment).click();
    }
    verificarConsultaMarcada(agendamentoSucesso){
        cy.get(elements.appointmentConfirmation).should('have.text', agendamentoSucesso);
    }
}

export default new Agendamento();