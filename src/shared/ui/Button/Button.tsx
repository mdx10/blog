import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    INVERT = 'invert',
    ACCENT = 'accent',
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: SizeButton;
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme = ThemeButton.CLEAR,
        square,
        size = SizeButton.M,
        disabled,
        ...otherProps
    } = props;

    const cn = classNames(
        styles.button,
        { [styles.square]: square, [styles.disabled]: disabled },
        [styles[theme], styles[size], className],
    );

    return (
        <button
            type="button"
            className={cn}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
