import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Button, SizeButton, ThemeButton } from '@/shared/ui/Button';
import ChevronIcon from '@/shared/assets/icons/right-chevron.svg';
import Logo from '@/shared/assets/icons/logoipsum.svg';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { getSidebarItems } from '../../model/selectors/getSidebarItems';
import styles from './Sidebar.module.scss';
import { ThemeSwitcher } from '@/features/ThemeSwitcher';
import { LangSwitcher } from '@/features/LangSwitcher';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const { pathname } = useLocation();
    const onToggle = () => setCollapsed((prev) => !prev);
    const sidebarItemsList = useSelector(getSidebarItems);
    return (
        <div
            data-testid="sidebar"
            className={classNames(
                styles.sidebar,
                { [styles.collapsed]: collapsed },
                [className],
            )}
        >
            <div className={styles.logo}>
                <Logo />
            </div>
            <nav className={styles.nav}>
                {sidebarItemsList.map((item) => (
                    <SidebarItem
                        item={item}
                        key={item.path}
                        active={pathname === item.path}
                    />
                ))}
            </nav>
            <div className={styles.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={styles.switcher} />
            </div>
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
});
