let profileId = '';
describe('Пользователь заходит на страницу пользователя', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            profileId = data.id;
            cy.visit(`profile/${data.id}`);
        });
    });
    afterEach(() => {
        cy.resetProfile(profileId);
    });
    it('Профиль успешно загружается', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'test');
    });
    it('Профиль успешно редактируется', () => {
        const newFirstname = 'firstname';
        const newLastname = 'lastname';
        cy.updateProfile(newFirstname, newLastname);
        cy.getByTestId('ProfileCard.firstname').should('have.value', newFirstname);
        cy.getByTestId('ProfileCard.lastname').should('have.value', newLastname);
    });
});
