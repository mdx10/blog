import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { useState } from 'react';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => {
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = () => setIsAuthModal((prev) => !prev);
    return (
        <header className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.container}>
                <div className={styles.switchers}>
                    <ThemeSwitcher />
                    <LangSwitcher />
                </div>
                <Button theme={ThemeButton.CLEAR} onClick={onToggleModal}>Войти</Button>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. At dolore doloremque explicabo iure non
                    omnis, quos ratione sequi ullam vel!
                </Modal>
            </div>
        </header>
    );
};
