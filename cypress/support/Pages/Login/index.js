const elements = require('../Login/elements').ELEMENTS;

class Login{
    inserirUsuario(){
        cy.get(elements.user).invoke('attr', 'value').then(($value) => {
            cy.get(elements.typeUser).type($value)
          });
        //cy.type($value)
    }
    inserirSenha(){
        cy.get(elements.password).invoke('attr', 'value').then(($value) => {
            cy.get(elements.typePassword).type($value)
          });
    }
    clicarLogin(){
        cy.get(elements.buttonLogin).click();
    }
    verificarLogin(titulo){
        cy.get(elements.loginSuccess).should('have.text', titulo);
    }
}

export default new Login();