import React, { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Overlay.module.scss';

interface OverlayProps {
    className?: string;
    onClick?: () => void;
}

export const Overlay = memo((props: OverlayProps) => {
    const { className, onClick } = props;
    return (
        <div
            className={classNames(styles.root, {}, [className])}
            onClick={onClick}
            data-testid="modal-overlay"
        />
    );
});
