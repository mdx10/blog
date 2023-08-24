import { classNames } from 'shared/lib/classNames/classNames';
import { memo, useCallback } from 'react';
import { ListBox } from 'shared/ui/ListBox/ListBox';
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
        <ListBox
            className={classNames('', {}, [className])}
            value={value}
            options={options}
            onChange={onChangeHandler}
            placeholder={placeholder}
            readonly={readonly}
            label={label}
            direction="topLeft"
        />
    );
});
