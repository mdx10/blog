import { ChangeEvent, useMemo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './Select.module.scss';

export enum ThemeSelect {
    INVERT = 'invert',
    PRIMARY = 'primary',
}

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
    className?: string;
    value?: T;
    label?: string;
    options?: SelectOption<T>[];
    onChange?: (value: T) => void;
    theme?: ThemeSelect;
    readonly?: boolean;
    placeholder?: string;
}
export const Select = <T extends string>(props: SelectProps<T>) => {
    const {
        className,
        value,
        label,
        options,
        onChange,
        theme = ThemeSelect.PRIMARY,
        readonly,
        placeholder,
    } = props;

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    };
    const optionsList = useMemo(
        () =>
            options?.map((opt) => (
                <option
                    className={styles.option}
                    value={opt.value}
                    key={opt.value}
                >
                    {opt.content}
                </option>
            )),
        [options],
    );

    if (label) {
        return (
            // eslint-disable-next-line jsx-a11y/label-has-associated-control
            <label className={classNames(styles.label, {}, [className])}>
                {label}
                <select
                    className={classNames(styles.select, {}, [styles[theme]])}
                    value={value}
                    onChange={onChangeHandler}
                    placeholder={placeholder}
                    disabled={readonly}
                >
                    {optionsList}
                </select>
            </label>
        );
    }

    return (
        <select
            className={classNames(styles.select, {}, [
                className,
                styles[theme],
            ])}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            disabled={readonly}
        >
            {optionsList}
        </select>
    );
};
