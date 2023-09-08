import React, { ReactNode } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { useTheme } from '@/app/providers/ThemeProvider';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
}
export const Modal = (props: ModalProps) => {
    const {
        className, children, isOpen, onClose,
    } = props;

    const { theme } = useTheme();

    const { close } = useModal({ isOpen, onClose });

    return (
        <Portal>
            <div
                className={classNames(styles.root, { [styles.opened]: isOpen }, [className, theme])}
                data-testid="modal"
            >
                <Overlay onClick={close} />
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
};
