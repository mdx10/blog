import { Action, Reducer } from '@reduxjs/toolkit';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import { Profile } from '@/entities/Profile';
import { Country } from '@/entities/Country';
import { Currency } from '@/entities/Currency';
import { $api } from '@/shared/api/api';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCard } from '../EditableProfileCard/EditableProfileCard';
import { ProfileScheme } from '../../model/types/EditableProfileCardSchema';

const profile: Profile = {
    id: '1',
    firstname: 'firstname',
    lastname: 'lastname',
    age: 28,
    username: 'username',
    city: 'city',
    country: Country.Russia,
    currency: Currency.EUR,
    avatar: 'https://i.pravatar.cc/300?img=1',
};

const options = {
    initialState: {
        profile: {
            readonly: true,
            data: profile,
            form: profile,
            isLoading: false,
            error: undefined,
        },
        user: {
            authData: {
                id: '1',
                username: 'admin',
            },
        },
    },
    asyncReducers: {
        profile: profileReducer as Reducer<
            ProfileScheme | undefined,
            Action<any>
        >,
    },
};

beforeEach(() => {
    jest.spyOn($api, 'get').mockReturnValue(
        Promise.resolve({
            data: profile,
        }),
    );
});

describe('EditableProfileCard', () => {
    test('changed readonly mod', async () => {
        const mockGetReq = jest.spyOn($api, 'get');
        componentRender(<EditableProfileCard id="1" />, options);
        expect(mockGetReq).toHaveBeenCalled();
        await waitFor(() => {
            expect(
                screen.getByTestId('EditableProfileCardHeader.EditBtn'),
            ).toBeInTheDocument();
        });
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );
        expect(
            screen.getByTestId('EditableProfileCardHeader.CancelBtn'),
        ).toBeInTheDocument();
    });
    test('test cancel changes', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await waitFor(() => {
            expect(
                screen.getByTestId('EditableProfileCardHeader.EditBtn'),
            ).toBeInTheDocument();
        });
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.username'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.type(
            screen.getByTestId('ProfileCard.username'),
            'user',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'user',
        );

        expect(screen.getByTestId('ProfileCard.username')).toHaveValue('user');
        expect(screen.getByTestId('ProfileCard.firstname')).toHaveValue('user');

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.CancelBtn'),
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.username'),
            'username',
        );
        await userEvent.type(
            screen.getByTestId('ProfileCard.firstname'),
            'firstname',
        );
    });
    test('test validation error', async () => {
        componentRender(<EditableProfileCard id="1" />, options);
        await waitFor(() => {
            expect(
                screen.getByTestId('EditableProfileCardHeader.EditBtn'),
            ).toBeInTheDocument();
        });
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );

        await userEvent.clear(screen.getByTestId('ProfileCard.username'));
        await userEvent.clear(screen.getByTestId('ProfileCard.firstname'));

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn'),
        );

        expect(
            screen.getByTestId('EditableProfileCard.Error'),
        ).toBeInTheDocument();
    });
    test('test save form', async () => {
        const mockPutReq = jest.spyOn($api, 'put');
        componentRender(<EditableProfileCard id="1" />, options);
        await waitFor(() => {
            expect(
                screen.getByTestId('EditableProfileCardHeader.EditBtn'),
            ).toBeInTheDocument();
        });
        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.EditBtn'),
        );

        await userEvent.type(
            screen.getByTestId('ProfileCard.username'),
            'user',
        );

        await userEvent.click(
            screen.getByTestId('EditableProfileCardHeader.SaveBtn'),
        );
        expect(mockPutReq).toHaveBeenCalled();
    });
});
