describe('Тестирование qa.studio', function () {

    it('Проверка на валидную авторизацию', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('Невалидный адрес');
        cy.get("#pass").type('Валидный пароль');
        cy.get("#loginButton").click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon'); 


        
    })
})
