import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useState } from 'react';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import ChevronIcon from 'shared/assets/icons/right-chevron.svg';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import { useSelector } from 'react-redux';
import { getSidebarItems } from 'widgets/Sidebar/model/selectors/getSidebarItems';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);
    const onToggle = () => setCollapsed((prev) => !prev);
    const sidebarItemsList = useSelector(getSidebarItems);
    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <nav className={styles.nav}>
                {sidebarItemsList.map((item) => <SidebarItem item={item} collapsed={collapsed} key={item.path} />)}
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
});
