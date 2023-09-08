import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';

export interface Profile {
    id?: string;
    firstname?: string;
    lastname?: string;
    age?: number;
    username?: string;
    city?: string;
    country?: Country;
    currency?: Currency;
    avatar?: string;
}
