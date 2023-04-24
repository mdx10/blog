import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'features/LangSwitcher';
import styles from './Navbar.module.scss';

interface NavbarProps {
    className?: string;
}
export const Navbar = ({ className }: NavbarProps) => (
    <header className={classNames(styles.navbar, {}, [className])}>
        <div className={styles.container}>
            <nav className={styles.nav}>
                <AppLink to="/">MainPage</AppLink>
                <AppLink to="/about">AboutPage</AppLink>
            </nav>
            <ThemeSwitcher />
            <LangSwitcher />
        </div>
    </header>
);
