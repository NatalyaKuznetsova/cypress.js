describe('Тестирование qa.studio', function () {

    it('Проверка на валидную авторизацию', function () {
        cy.visit('https://login.qa.studio/');
        cy.get("#mail").type('g112,nf@klflf.ru');
        cy.get("#pass").type('iLoveqastudio1');
        cy.get("#loginButton").click();
        cy.contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon'); 


        
    })
})