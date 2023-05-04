import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import ChevronIcon from 'shared/assets/icons/right-chevron.svg';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import InfoIcon from 'shared/assets/icons/info-icon.svg';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const linkClassName = (active: boolean) => (
        classNames(styles.navLink, {
            [styles.navLinkActive]: active,
        })
    );
    const onToggle = () => setCollapsed((prev) => !prev);
    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <nav className={styles.nav}>
                <AppLink
                    to={RoutePath.main}
                    className={linkClassName(false)}
                    theme={AppLinkTheme.INVERT}
                >
                    <HomeIcon className={styles.navIcon} />
                    <span>MainPage</span>
                </AppLink>
                <AppLink
                    to={RoutePath.about}
                    className={linkClassName(false)}
                    theme={AppLinkTheme.INVERT}
                >
                    <InfoIcon className={styles.navIcon} />
                    <span>AboutPage</span>
                </AppLink>
            </nav>
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ThemeButton.CLEAR}
                className={styles.collapseButton}
                size={SizeButton.L}
                square
            >
                <ChevronIcon className={classNames(styles.buttonIcon)} />
            </Button>
        </div>
    );
};
