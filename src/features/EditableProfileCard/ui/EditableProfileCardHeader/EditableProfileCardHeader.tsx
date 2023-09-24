import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { getAuthData } from '@/entities/User';
import { Button, ThemeButton } from '@/shared/ui/Button';
import { getProfileReadonly } from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData';
import { profileActions } from '../../model/slice/profileSlice';
import { updateProfileData } from '../../model/services/updateProfileData/updateProfileData';
import styles from './EditableProfileCardHeader.module.scss';

interface EditableProfileCardHeaderProps {
    className?: string;
}

export const EditableProfileCardHeader = memo(
    (props: EditableProfileCardHeaderProps) => {
        const { className } = props;
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
                {canEdit && (
                    <div className={styles.buttons}>
                        {readonly ? (
                            <Button
                                theme={ThemeButton.ACCENT}
                                onClick={onEdit}
                                data-testid="EditableProfileCardHeader.EditBtn"
                            >
                                {t('edit')}
                            </Button>
                        ) : (
                            <>
                                <Button
                                    theme={ThemeButton.INVERT}
                                    onClick={onCancelEdit}
                                    data-testid="EditableProfileCardHeader.CancelBtn"
                                >
                                    {t('cancel')}
                                </Button>
                                <Button
                                    theme={ThemeButton.ACCENT}
                                    onClick={onSaveEdit}
                                    data-testid="EditableProfileCardHeader.SaveBtn"
                                >
                                    {t('save')}
                                </Button>
                            </>
                        )}
                    </div>
                )}
            </div>
        );
    },
);
