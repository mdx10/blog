import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginState', () => {
    test('test getLoginState', () => {
        const loginState = {
            username: '123',
            password: '123',
            isLoading: true,
        };
        const state: DeepPartial<StateSchema> = {
            login: loginState,
        };
        expect(getLoginState(state as StateSchema)).toEqual(loginState);
    });

    test('test empty getLoginState', () => {
        const loginState = {
            username: '',
            password: '',
            isLoading: false,
        };
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginState(state as StateSchema)).toEqual(loginState);
    });
});
