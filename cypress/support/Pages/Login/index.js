const elements = require('../Login/elements').ELEMENTS;

class Login{
    inserirUsuarioCorreto(){
        cy.get(elements.user).invoke('attr', 'value').then(($value) => {
            cy.get(elements.typeUser).type($value)
            var value = $value
          });
        console.log(value)
    }
    inserirSenhaCorreta(){
       cy.get(elements.password).invoke('attr', 'value').then(($value) => {  
        cy.get(elements.typePassword).type($value)
          });
    }
    inserirUsuarioIncorreto(usuario){
        cy.get(elements.typeUser).type(usuario)
    }
    inserirSenhaIncorreta(senha){
        cy.get(elements.typePassword).type(senha)
    }
    clicarLogin(){
        cy.get(elements.buttonLogin).click();
    }
    verificarLoginSucesso(titulo){
        cy.get(elements.loginSuccess).should('have.text', titulo);
    }
    verificarLoginFalha(falha){
        cy.get(elements.loginFail).should('have.text', falha);
    }
}

export default new Login();