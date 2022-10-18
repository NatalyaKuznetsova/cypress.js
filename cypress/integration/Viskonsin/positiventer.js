describe('Тестирование qa.studio', function () {

    it('Проверка на валидную авторизацию', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('Валидная почта');
        cy.get('#pass').type('Валидный пароль');
        cy.get('#loginButton').click();

        cy.contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon');
    })
})
