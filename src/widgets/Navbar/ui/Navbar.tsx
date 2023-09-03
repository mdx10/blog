import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import {
    getAuthData, isUserAdmin, isUserManager, userActions,
} from 'entities/User';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Dropdown, Popover } from 'shared/ui/Popups';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import NotificationIcon from 'shared/assets/icons/notification-icon.svg';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const dispatch = useDispatch();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onCloseModal = () => setIsAuthModal(false);
    const onOpenModal = () => setIsAuthModal(true);
    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);
    const authData = useSelector(getAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);

    const isAdminPanelAvailable = isAdmin || isManager;

    return (
        <header className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.container}>
                {authData && (
                    <AppLink to={RoutePath.articles_create}>Создать статью</AppLink>
                )}
                <div className={styles.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
                {
                    authData ? (
                        <div className={styles.actions}>
                            <Popover
                                trigger={(
                                    <NotificationIcon className={styles.icon} />
                                )}
                                direction="bottomRight"
                            >
                                qwreqwerqwer
                            </Popover>
                            <Dropdown
                                items={[
                                    ...(isAdminPanelAvailable ? [{
                                        content: 'Админка',
                                        href: RoutePath.admin_panel,
                                    }] : []),
                                    {
                                        content: 'Профиль',
                                        href: RoutePath.profile + authData.id,
                                    },
                                    {
                                        content: 'Выйти',
                                        onClick: onLogout,
                                    },
                                ]}
                                trigger={<Avatar size={30} src={authData.avatar} />}
                                direction="bottomRight"
                            />
                        </div>
                    ) : (
                        <>
                            <Button theme={ThemeButton.CLEAR} onClick={onOpenModal}>Войти</Button>
                            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
                        </>
                    )
                }
            </div>
        </header>
    );
});
