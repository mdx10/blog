import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>('login/loginByUsername', async (authData, thunkAPI) => {
    const { dispatch, rejectWithValue, extra } = thunkAPI;
    try {
        const response = await extra.api.post('/login', authData);
        if (!response.data) throw new Error(response.statusText);
        dispatch(userActions.setAuthData(response.data));
        return response.data;
    } catch (e) {
        return rejectWithValue('error');
    }
});
