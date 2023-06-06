import { Currency } from 'entities/Currency';
import { Country } from 'entities/Country';

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
}
