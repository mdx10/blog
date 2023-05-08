import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';

export const StoreProvider: FC = ({ children }) => {
    const store = createReduxStore();
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
