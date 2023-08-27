import { Profile } from 'entities/Profile';

export enum ValidateProfileError {
    INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
    INCORRECT_AGE = 'INCORRECT_AGE',
    INCORRECT_CITY = 'INCORRECT_CITY',
    NO_DATA = 'NO_DATA',
    SERVER_ERROR = 'SERVER_ERROR',
}

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    error?: string;
    readonly: boolean;
    isLoading: boolean;
    validateErrors?: ValidateProfileError[];
}
