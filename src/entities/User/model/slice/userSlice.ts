import { createSlice } from '@reduxjs/toolkit';
import { USER_KEY } from 'shared/constants/localstorage';
import { UserScheme } from '../types/user';

const initialState: UserScheme = {
    _mounted: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action) => {
            state.authData = action.payload;
            localStorage.setItem(USER_KEY, JSON.stringify(action.payload));
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(USER_KEY);
            if (user) state.authData = JSON.parse(user);
            state._mounted = true;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
