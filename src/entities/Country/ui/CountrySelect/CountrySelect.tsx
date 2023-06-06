import { classNames } from 'shared/lib/classNames/classNames';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    placeholder?: string;
    readonly?: boolean;
    label?: string;
}

const options = Object.values(Country).map((country) => ({ value: country, content: country }));
export const CountrySelect = memo((props: CountrySelectProps) => {
    const {
        className,
        value,
        onChange,
        placeholder,
        readonly,
        label,
    } = props;

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Country);
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
