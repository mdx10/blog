/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
import { USER_KEY } from '../../src/shared/constants/localstorage';
import { User } from '@/entities/User';
import { selectByTestid } from '../helpers/selectByTestid';

Cypress.Commands.add('login', (username: string = 'testuser', password: string = '123') => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/login',
        body: {
            username,
            password,
        },
    }).then(({ body }) => {
        window.localStorage.setItem(USER_KEY, JSON.stringify(body));
        return body;
    });
});

Cypress.Commands.add('updateProfile', (firstname: string, lastname: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditBtn').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstname);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastname);
    cy.getByTestId('EditableProfileCardHeader.SaveBtn').click();
});

Cypress.Commands.add('resetProfile', (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: `http://localhost:8000/profile/${profileId}`,
        headers: { Authorization: '123' },
        body: {
            id: '4',
            firstname: 'test',
            lastname: 'test',
            age: 26,
            username: 'testuser',
            city: 'Москва',
            country: 'Russia',
            currency: 'USD',
            avatar: 'https://i.pravatar.cc/300?img=4',
        },
    });
});

Cypress.Commands.add('getByTestId', (testId: string) => cy.get(selectByTestid(testId)));

declare global {
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      updateProfile(firstname: string, lastname: string): Chainable<void>;
      resetProfile(profileId: string): Chainable<void>
    }
  }
}

export {};
