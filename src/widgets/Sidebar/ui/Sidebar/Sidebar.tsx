import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);
    return (
        <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
            <Button onClick={onToggle} theme={ThemeButton.INVERT}>Collapse</Button>
        </div>
    );
};
