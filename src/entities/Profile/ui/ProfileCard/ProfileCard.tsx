import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';
import { Country, CountrySelect } from 'entities/Country';
import { Profile } from '../../model/types/profile';
import styles from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    error?: string;
    isLoading?: boolean;
    readonly?: boolean;
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
                    placeholder={t('form.username')}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input
                    value={data?.firstname}
                    placeholder={t('form.firstname')}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('form.lastname')}
                    onChange={onChangeLastname}
                    readonly={readonly}
                />
                <Input
                    value={data?.city}
                    placeholder={t('form.city')}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input
                    value={data?.age}
                    type="number"
                    placeholder={t('form.age')}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input
                    value={data?.avatar}
                    placeholder={t('form.avatar')}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect
                    value={data?.currency}
                    placeholder={t('form.currency')}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect
                    value={data?.country}
                    placeholder={t('form.currency')}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
