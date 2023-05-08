import { configureStore } from '@reduxjs/toolkit';

export const createReduxStore = () => configureStore({
    reducer: {},
    devTools: __IS_DEV__,
});
