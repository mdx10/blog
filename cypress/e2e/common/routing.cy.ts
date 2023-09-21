import { selectByTestid } from '../../helpers/selectByTestid';

describe('Роутинг', () => {
    describe('Пользователь НЕ авторизован', () => {
        it('Переход на главную', () => {
            cy.visit('/');
            cy.get(selectByTestid('MainPage')).should('exist');
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestid('MainPage')).should('exist');
        });
        it('Переход на страницу 404', () => {
            cy.visit('/test');
            cy.get(selectByTestid('NotFoundPage')).should('exist');
        });
    });
    describe('Пользователь авторизован', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        });
        it('Переход на страницу профиля', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestid('ProfilePage')).should('exist');
        });
        it('Переход на страницу со списком статей', () => {
            cy.visit('/articles');
            cy.get(selectByTestid('ArticlesPage')).should('exist');
        });
    });
});
