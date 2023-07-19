import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { memo, useCallback, useState } from 'react';
import { LoginModal } from 'features/AuthByUsername';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthData, userActions } from 'entities/User';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
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
                        <Button theme={ThemeButton.CLEAR} onClick={onLogout}>Выйти</Button>
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
