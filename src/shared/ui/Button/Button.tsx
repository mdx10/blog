import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    INVERT = 'invert'
}

export enum SizeButton {
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
    square?: boolean;
    size?: string;
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        square,
        size = SizeButton.M,
        ...otherProps
    } = props;

    const cn = classNames(
        styles.button,
        { [styles.square]: square },
        [styles[theme], styles[size], className],
    );

    return (
        <button
            type="button"
            className={cn}
            {...otherProps}
        >
            {children}
        </button>
    );
};
