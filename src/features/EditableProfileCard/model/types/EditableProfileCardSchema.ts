import { Profile } from '@/entities/Profile';
import { ValidateProfileError } from '../consts/editableProfileCardConsts';

export interface ProfileScheme {
    data?: Profile;
    form?: Profile;
    error?: string;
    readonly: boolean;
    isLoading: boolean;
    validateErrors?: ValidateProfileError[];
}
