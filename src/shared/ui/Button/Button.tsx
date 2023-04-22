import {classNames} from "shared/lib/classNames/classNames";
import styles from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    CLEAR = 'clear',
    INVERT = 'invert'
}
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}
export const Button: FC<ButtonProps> = (props) => {
    const {
        children,
        className,
        theme,
        ...otherProps
    } = props;
    return (
        <button
            className={classNames(styles.button, {}, [styles[theme], className])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
