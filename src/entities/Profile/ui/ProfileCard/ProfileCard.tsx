import { classNames } from 'shared/lib/classNames/classNames';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';
import styles from './ProfileCard.module.scss';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError';
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';

interface ProfileCardProps {
    className?: string;
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
    const { t } = useTranslation('profilePage');
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    return (
        <div className={classNames(styles.root, {}, [className])}>
            <div className={styles.header}>
                <h1>{t('title')}</h1>
                <Button theme={ThemeButton.ACCENT}>{t('edit')}</Button>
            </div>
            <div className={styles.data}>
                <Input
                    value={data?.firstname}
                    placeholder={t('firstname')}
                />
                <Input
                    value={data?.lastname}
                    placeholder={t('lastname')}
                />
            </div>
        </div>
    );
};
