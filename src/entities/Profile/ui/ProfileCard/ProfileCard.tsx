import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile, ValidateProfileError } from '../../model/types/Profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
    validateErrors?: ValidateProfileError[];
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    onChangeCurrency?: (value: Currency) => void;
    onChangeCountry?: (value: Country) => void;

}
export const ProfileCard = (props: ProfileCardProps) => {
    const { t } = useTranslation('profilePage');
    const {
        className,
        error,
        isLoading,
        data,
        readonly,
        validateErrors,
        onChangeFirstname,
        onChangeLastname,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry,
    } = props;

    if (isLoading) {
        return (
            <div className={classNames(styles.root, {}, [className, styles.loader])}>
                <Loader />
            </div>
        );
    }

    if (error) {
        return (
            <div className={classNames(styles.root, {}, [className])}>
                <h2>{t('fetchError.title')}</h2>
                <p>{t('fetchError.desc')}</p>
            </div>
        );
    }

    const validateErrorsTranslate = {
        [ValidateProfileError.SERVER_ERROR]: t('form.validateErrors.serverError'),
        [ValidateProfileError.NO_DATA]: t('form.validateErrors.noData'),
        [ValidateProfileError.INCORRECT_AGE]: t('form.validateErrors.incorrectAge'),
        [ValidateProfileError.INCORRECT_CITY]: t('form.validateErrors.incorrectCity'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('form.validateErrors.incorrectUserData'),
    };

    return (
        <div className={classNames(styles.root, { [styles.editing]: !readonly }, [className])}>
            <div className={styles.data}>
                {data?.avatar && (
                    <div className={styles.avatarWrap}>
                        <Avatar src={data.avatar} />
                    </div>
                )}
                <Input
                    value={data?.username}
                    placeholder={t('form.username.placeholder')}
                    label={t('form.username.label')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.firstname}
                    placeholder={t('form.firstname.placeholder')}
                    label={t('form.firstname.label')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('form.lastname.placeholder')}
                    label={t('form.lastname.label')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('form.city.placeholder')}
                    label={t('form.city.label')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    type="number"
                    placeholder={t('form.age.placeholder')}
                    label={t('form.age.label')}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('form.avatar.placeholder')}
                    label={t('form.avatar.label')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    value={data?.currency}
                    placeholder={t('form.currency.placeholder')}
                    label={t('form.currency.label')}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    placeholder={t('form.country.placeholder')}
                    label={t('form.country.label')}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
            <div>
                {validateErrors?.length && validateErrors.map((err) => (
                    <p key={err}>{validateErrorsTranslate[err]}</p>
                ))}
            </div>
        </div>
    );
};
