describe('Тестирование qa.studio', function () {

    it('Проверка на валидную авторизацию', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('Валидная почта');
        cy.get("#pass").type('Невалидный пароль');
        cy.get("#loginButton").click();

        cy.contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon'); 

    })
})


