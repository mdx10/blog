import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Currency } from '../../model/types/Currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    placeholder?: string;
    readonly?: boolean;
    label?: string;
}

const options = Object.values(Currency).map((cur) => ({ value: cur, content: cur }));
export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        readonly,
        label,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency);
    }, [onChange]);

    return (
        <Select
            className={classNames('', {}, [className])}
            value={value}
            options={options}
            onChange={onChangeHandler}
            placeholder={placeholder}
            readonly={readonly}
            label={label}
        />
    );
});
