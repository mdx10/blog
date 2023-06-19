import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
    getProfileData, getProfileReadonly, profileActions, updateProfileData,
} from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useCallback } from 'react';
import { getAuthData } from 'entities/User';
import styles from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}
export const ProfilePageHeader = ({ className }: ProfilePageHeaderProps) => {
    const { t } = useTranslation('profilePage');

    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const authData = useSelector(getAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit());
    }, [dispatch]);

    const onSaveEdit = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <h1>{t('title')}</h1>
            {canEdit
                && (
                    <div className={styles.buttons}>
                        {
                            readonly
                                ? (
                                    <Button
                                        theme={ThemeButton.ACCENT}
                                        onClick={onEdit}
                                    >
                                        {t('edit')}
                                    </Button>
                                )
                                : (
                                    <>
                                        <Button
                                            theme={ThemeButton.INVERT}
                                            onClick={onCancelEdit}
                                        >
                                            {t('cancel')}
                                        </Button>
                                        <Button
                                            theme={ThemeButton.ACCENT}
                                            onClick={onSaveEdit}
                                        >
                                            {t('save')}
                                        </Button>
                                    </>
                                )
                        }
                    </div>
                )}
        </div>
    );
};
