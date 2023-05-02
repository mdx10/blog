import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { Button, SizeButton, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import ChevroneIcon from 'shared/assets/icons/right-chevron.svg';
import styles from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}
export const Sidebar = ({ className }: SidebarProps) => {
    // const { t } = useTranslation();
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed((prev) => !prev);
    return (
        <div
            data-testid="sidebar"
            className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                theme={ThemeButton.CLEAR}
                className={styles.collapseButton}
                size={SizeButton.L}
                square
            >
                <ChevroneIcon
                    className={classNames(
                        styles.buttonIcon,
                        { [styles.buttonIconCollapsed]: collapsed },
                    )}
                />
            </Button>
        </div>
    );
};
