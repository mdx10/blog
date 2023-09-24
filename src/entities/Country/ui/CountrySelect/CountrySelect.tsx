import { memo, useCallback } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ListBox } from '@/shared/ui/Popups';
import { Country } from '../../model/types/Country';

interface CountrySelectProps {
    className?: string;
    value?: Country;
    onChange?: (value: Country) => void;
    placeholder?: string;
    readonly?: boolean;
    label?: string;
}

const options = Object.values(Country).map((country) => ({
    value: country,
    content: country,
}));
export const CountrySelect = memo((props: CountrySelectProps) => {
    const { className, value, onChange, placeholder, readonly, label } = props;

    const onChangeHandler = useCallback(
        (value: string) => {
            onChange?.(value as Country);
        },
        [onChange],
    );

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
