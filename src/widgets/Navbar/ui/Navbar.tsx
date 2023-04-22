import {classNames} from "shared/lib/classNames/classNames";
import styles from './Navbar.module.scss';
import {AppLink} from "shared/ui/AppLink/AppLink";
import {ThemeSwitcher} from "shared/ui/ThemeSwitcher";

interface NavbarProps {
    className?: string;
}
export const Navbar = ({className}: NavbarProps) => {
    return (
        <header className={classNames(styles.navbar, {}, [className])}>
            <div className={styles.container}>
                <nav className={styles.nav}>
                    <AppLink to={'/'}>MainPage</AppLink>
                    <AppLink to={'/about'}>AboutPage</AppLink>
                </nav>
                <ThemeSwitcher />
            </div>
        </header>
    );
};
