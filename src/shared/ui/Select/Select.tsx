import { classNames } from 'shared/lib/classNames/classNames';
import {
    ChangeEvent, memo, useMemo,
} from 'react';
import styles from './Select.module.scss';

export enum ThemeSelect {
    INVERT = 'invert',
    PRIMARY = 'primary',
}

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
    className?: string;
    value?: string;
    label?: string;
    options?: SelectOption[];
    onChange?: (value: string) => void;
    theme?: ThemeSelect;
    readonly?: boolean;
    placeholder?: string;
}
export const Select = memo((props: SelectProps) => {
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
        onChange?.(e.target.value);
    };
    const optionsList = useMemo(() => options?.map((opt) => (
        <option
            className={styles.option}
            value={opt.value}
            key={opt.value}
        >
            {opt.content}
        </option>
    )), [options]);

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
            className={classNames(styles.select, {}, [className, styles[theme]])}
            value={value}
            onChange={onChangeHandler}
            placeholder={placeholder}
            disabled={readonly}
        >
            {optionsList}
        </select>
    );
});
