describe('Тестирование qa.studio', function () {

    it('Проверка на валидную авторизацию', function () {
        cy.visit('https://staya.dog');
        cy.get('.header-bottom__right--link').click();



        cy.get('.auth-form > form > [type="email"]').type('malinovaya10@gmail.com');
        cy.get('.auth-form > form > [type="password"]').type('Natapowerty1010!');
        cy.get('.auth-form__submit > .s-button__content').click();

        cy.contains('Мои заказы');
        
    })
})