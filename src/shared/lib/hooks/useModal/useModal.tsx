import { useCallback, useEffect } from 'react';

interface UseModalProps {
    onClose?: () => void;
    isOpen?: boolean;
}
export function useModal({ onClose, isOpen }: UseModalProps) {
    const close = useCallback(() => {
        if (onClose) onClose();
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Escape') close();
    }, [close]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }
        return () => {
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    return {
        close,
    };
}
