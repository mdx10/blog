import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Loader } from 'shared/ui/Loader/Loader';
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
        <div className={classNames(styles.root, {}, [className])}>
            <div className={styles.data}>
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
            </div>
        </div>
    );
};
