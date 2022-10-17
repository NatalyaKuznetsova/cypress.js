describe('Тестирование qa.studio', function () {

    it('Проверка на валидную авторизацию', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('german@dolnikov.ru');
        cy.get("#pass").type('germaNdol5');
        cy.get("#loginButton").click();

        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon'); 

    })
})


