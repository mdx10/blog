import { ChangeEvent, InputHTMLAttributes, memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Input.module.scss';

export enum ThemeInput {
    INVERT = 'invert',
    PRIMARY = 'primary',
}

type HTMLInputProps = Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange'
>;
interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    theme?: ThemeInput;
    readonly?: boolean;
    label?: string;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        theme = ThemeInput.PRIMARY,
        readonly,
        label,
        ...otherProps
    } = props;
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) =>
        onChange?.(e.target.value);

    if (label) {
        return (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label className={styles.label}>
                {label}
                <input
                    value={value}
                    onChange={onChangeHandler}
                    type={type}
                    className={classNames(styles.input, {}, [
                        className,
                        styles[theme],
                    ])}
                    readOnly={readonly}
                    {...otherProps}
                />
            </label>
        );
    }

    return (
        <input
            value={value}
            onChange={onChangeHandler}
            type={type}
            className={classNames(styles.input, {}, [className, styles[theme]])}
            readOnly={readonly}
            {...otherProps}
        />
    );
});
