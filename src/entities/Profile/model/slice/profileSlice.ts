import { createSlice } from '@reduxjs/toolkit';
import { ProfileScheme } from '../types/profile';

const initialState: ProfileScheme = {
    data: undefined,
    error: undefined,
    readonly: true,
    isLoading: false,
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
