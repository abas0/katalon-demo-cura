const elements = require('../Home/elements').ELEMENTS;

class Home {
    MarcarConsulta(){
        cy.get(elements.makeAppointment).click();
    }
}

export default new Home();