describe('Тестирование qa.studio', function () {

    it('Проверка логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.contains('Забыли пароль').click();
        cy.get('#mailForgot').type('Валидная почта');
        cy.get('#restoreEmailButton').click();
        
        cy.contains('Успешно отправили пароль на e-mail');
        cy.get('#exitRestoreButton > .exitIcon'); 

        
    })
})


