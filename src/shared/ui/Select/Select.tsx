import { classNames } from 'shared/lib/classNames/classNames';
import { ChangeEvent, memo, useMemo } from 'react';
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
}
export const Select = memo((props: SelectProps) => {
    const {
        className,
        value,
        label,
        options,
        onChange,
        theme = ThemeSelect.PRIMARY,
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

    return (
        <div className={classNames(styles.root, {}, [className, styles[theme]])}>
            {label && <span className={styles.label}>{label}</span>}
            <select
                className={styles.select}
                value={value}
                onChange={onChangeHandler}
            >
                {optionsList}
            </select>
        </div>
    );
});
