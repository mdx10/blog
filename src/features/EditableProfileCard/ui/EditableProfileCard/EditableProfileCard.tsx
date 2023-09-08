import { memo, useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Currency } from '@/entities/Currency';
import { Country } from '@/entities/Country';
import { ProfileCard } from '@/entities/Profile';
import { DynamicModuleLoader, ReducersList } from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ValidateProfileError } from '../../model/consts/editableProfileCardConsts';
import { EditableProfileCardHeader } from '../EditableProfileCardHeader/EditableProfileCardHeader';
import { fetchProfileData } from '../../model/services/fetchProfileData/fetchProfileData';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileValidateErrors } from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import { profileActions, profileReducer } from '../../model/slice/profileSlice';
import { getProfileForm } from '../../model/selectors/getProfileForm/getProfileForm';

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    profile: profileReducer,
};

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const { className, id } = props;
    const { t } = useTranslation('profilePage');
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (id) dispatch(fetchProfileData(id));
    }, [dispatch, id]);

    const formData = useSelector(getProfileForm);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('form.validateErrors.serverError'),
        [ValidateProfileError.NO_DATA]: t('form.validateErrors.noData'),
        [ValidateProfileError.INCORRECT_AGE]: t('form.validateErrors.incorrectAge'),
        [ValidateProfileError.INCORRECT_CITY]: t('form.validateErrors.incorrectCity'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('form.validateErrors.incorrectUserData'),
    };

    const onChangeFirstname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ firstname: value || '' }));
    }, [dispatch]);

    const onChangeLastname = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ lastname: value || '' }));
    }, [dispatch]);

    const onChangeCity = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ city: value || '' }));
    }, [dispatch]);

    const onChangeUsername = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ username: value || '' }));
    }, [dispatch]);

    const onChangeAvatar = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ avatar: value || '' }));
    }, [dispatch]);

    const onChangeAge = useCallback((value?: string) => {
        dispatch(profileActions.updateProfile({ age: Number(value) || 0 }));
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency?: Currency) => {
        dispatch(profileActions.updateProfile({ currency }));
    }, [dispatch]);

    const onChangeCountry = useCallback((country?: Country) => {
        dispatch(profileActions.updateProfile({ country }));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <EditableProfileCardHeader />
            <div>
                {validateErrors?.length && validateErrors.map((err) => (
                    <p key={err} data-testid="EditableProfileCard.Error">{validateErrorsTranslate[err]}</p>
                ))}
            </div>
            <ProfileCard
                data={formData}
                error={error}
                isLoading={isLoading}
                readonly={readonly}
                onChangeFirstname={onChangeFirstname}
                onChangeLastname={onChangeLastname}
                onChangeCity={onChangeCity}
                onChangeAge={onChangeAge}
                onChangeAvatar={onChangeAvatar}
                onChangeUsername={onChangeUsername}
                onChangeCurrency={onChangeCurrency}
                onChangeCountry={onChangeCountry}
                className={className}
            />
        </DynamicModuleLoader>
    );
});
