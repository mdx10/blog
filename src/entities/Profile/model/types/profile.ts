import { Country, Currency } from 'shared/constants/common';

export interface Profile {
    firstname: string;
    lastname: string;
    age: number;
    username: string;
    city: string;
    country: Country;
    currency: Currency;
    avatar: string;
}

export interface ProfileScheme {
    data?: Profile;
    error?: string;
    readonly: boolean;
    isLoading: boolean;
}
