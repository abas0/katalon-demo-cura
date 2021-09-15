Feature: Login

    Como usuário, gostaria de fazer Login
    Para que possa realizar agendamento de consulta

Scenario: Inserir e-mail e senha corretos: 
    Given que eu tenho uma tela de Login
    And desejo marcar um atendimento
    When o usuário informar o usuário "John Doe" e a senha "ThisIsNotAPassword"
    Then acessar a tela de marcar o atendimento
