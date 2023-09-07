import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode } from 'react';
import { useTheme } from 'app/providers/ThemeProvider';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Drawer.module.scss';

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}
export const Drawer = (props: DrawerProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const { theme } = useTheme();

    return (
        <Portal>
            <div
                className={classNames(styles.root, { [styles.opened]: isOpen }, [className, theme])}
                data-testid="drawer"
            >
                <Overlay onClick={onClose} />
                <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
