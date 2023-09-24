import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
    test('setUsername', () => {
        const state: DeepPartial<LoginSchema> = { username: '' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setUsername('user'),
            ),
        ).toEqual({ username: 'user' });
    });
    test('setPassword', () => {
        const state: DeepPartial<LoginSchema> = { password: '' };
        expect(
            loginReducer(
                state as LoginSchema,
                loginActions.setPassword('pass'),
            ),
        ).toEqual({ password: 'pass' });
    });
});
