import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useSelector } from 'react-redux';
import { getAuthData } from 'entities/User';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { NotificationButton } from 'features/NotificationButton';
import { AvatarDropdown } from 'features/AvatarDropdown';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = memo(({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onCloseModal = () => setIsAuthModal(false);
    const onOpenModal = () => setIsAuthModal(true);
    const authData = useSelector(getAuthData);

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
                            <NotificationButton />
                            <AvatarDropdown />
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
