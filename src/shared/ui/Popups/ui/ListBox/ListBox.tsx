import { Fragment, memo } from 'react';
import { Listbox } from '@headlessui/react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { DropdownDirection } from '@/shared/types/ui';
import styles from './ListBox.module.scss';

export enum ThemeListBox {
    INVERT = 'invert',
    PRIMARY = 'primary',
}

export interface ListBoxOption<T extends string> {
    value: T;
    content: string;
    disabled?: boolean;
}

interface ListBoxProps<T extends string> {
    className?: string;
    theme?: ThemeListBox;
    value?: T;
    options?: ListBoxOption<T>[];
    placeholder?: string;
    onChange: (value: T) => void;
    label?: string;
    readonly?: boolean;
    direction?: DropdownDirection;
}

export const ListBox = memo(<T extends string>(props: ListBoxProps<T>) => {
    const {
        className,
        theme = ThemeListBox.PRIMARY,
        value,
        options,
        placeholder,
        label,
        readonly,
        direction = 'bottomLeft',
        onChange,
    } = props;

    return (
        <Listbox
            value={value}
            onChange={onChange}
            as="div"
            className={classNames(
                styles.root,
                { [styles.disabled]: readonly },
                [className],
            )}
            disabled={readonly}
        >
            {label && (
                <Listbox.Label className={styles.label}>{label}</Listbox.Label>
            )}
            <Listbox.Button
                className={classNames(styles.trigger, {}, [styles[theme]])}
            >
                {value ?? placeholder}
            </Listbox.Button>
            <Listbox.Options
                className={classNames(styles.options, {}, [styles[direction]])}
            >
                {options?.map((option) => (
                    <Listbox.Option
                        key={option.value}
                        value={option.value}
                        disabled={option.disabled}
                        as={Fragment}
                    >
                        {({ active, selected }) => (
                            <li
                                className={classNames(styles.option, {
                                    [styles.active]: active,
                                    [styles.selected]: selected,
                                    [styles.disabled]: option.disabled,
                                })}
                            >
                                {option.content}
                            </li>
                        )}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>
    );
});
