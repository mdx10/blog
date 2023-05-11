import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import styles from './Input.module.scss';

export enum ThemeInput {
    INVERT = 'invert',
}

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    theme?: ThemeInput;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        theme,
        ...otherProps
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => onChange?.(e.target.value);

    return (
        <div className={classNames('', {}, [className])}>
            <input
                value={value}
                onChange={onChangeHandler}
                type={type}
                className={classNames(styles.input, {}, [styles[theme]])}
                {...otherProps}
            />
        </div>
    );
});
