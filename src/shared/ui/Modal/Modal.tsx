import { classNames } from 'shared/lib/classNames/classNames';
import React, { ReactNode, useCallback, useEffect } from 'react';
import { Portal } from 'shared/ui/Portal/Portal';
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

    const closeHandler = useCallback(() => {
        if (onClose) onClose();
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') closeHandler();
    }, [closeHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return (
        <Portal>
            <div
                className={classNames(styles.root, { [styles.opened]: isOpen }, [className])}
                data-testid="modal"
            >
                <div className={styles.overlay} onClick={closeHandler} data-testid="modal-overlay">
                    <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
