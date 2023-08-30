import { Profile } from 'entities/Profile';
import { ValidateProfileError } from '../../consts/editableProfileCardConsts';

export function validateProfileData(profile?: Profile) {
    if (!profile) return [ValidateProfileError.NO_DATA];

    const {
        firstname,
        lastname,
        username,
        age,
        city,
    } = profile;

    const errors: ValidateProfileError[] = [];

    if (!firstname || !lastname || !username) errors.push(ValidateProfileError.INCORRECT_USER_DATA);
    if (!city) errors.push(ValidateProfileError.INCORRECT_CITY);
    if (!age || !Number.isInteger(age)) errors.push(ValidateProfileError.INCORRECT_AGE);

    return errors;
}
