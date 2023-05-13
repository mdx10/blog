import { User, userActions } from 'entities/User';
import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

const BASE_URL = 'http://localhost:8000';

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post(`${BASE_URL}/login`, authData);
            thunkAPI.dispatch(userActions.setAuthData(response.data));
            if (!response.data) throw new Error(response.statusText);
            return response.data;
        } catch (e) {
            console.error(e);
            return thunkAPI.rejectWithValue('error');
        }
    },
);
