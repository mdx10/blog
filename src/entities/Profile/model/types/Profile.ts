import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface Profile {
    firstname?: string;
    lastname?: string;
    age?: number;
    username?: string;
    city?: string;
    country?: Country;
    currency?: Currency;
    avatar?: string;
}

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    error?: string;
    readonly: boolean;
    isLoading: boolean;
    validateErrors?: ValidateProfileError[];
}
