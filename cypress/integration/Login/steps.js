Given(/^que eu tenho uma tela de Login$/, () => {
	cy.visit('/');
    //return true;
});

Then(/^desejo marcar um atendimento$/, () => {
	return true;
});

When(/^o usuário informar o usuário "([^"]*)" e a senha "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

Then(/^acessar a tela de marcar o atendimento$/, () => {
	return true;
});
