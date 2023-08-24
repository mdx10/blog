import { classNames } from 'shared/lib/classNames/classNames';
import { Fragment, memo, ReactNode } from 'react';
import { Menu } from '@headlessui/react';
import { DropdownDirection } from 'shared/types/ui';
import { AppLink, AppLinkTheme } from '../AppLink/AppLink';
import styles from './Dropdown.module.scss';

export interface DropdownItem {
    disabled?: boolean;
    content?: ReactNode;
    onClick?: () => void;
    href?: string;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropdownDirection;
}

export const Dropdown = memo((props: DropdownProps) => {
    const {
        className,
        trigger,
        items,
        direction = 'bottomLeft',
    } = props;
    return (
        <Menu as="div" className={classNames(styles.root, {}, [className])}>
            <Menu.Button>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(styles.items, {}, [styles[direction]])}>
                {items.map((item) => {
                    const content = ({ active }: { active: boolean}) => (
                        <button
                            type="button"
                            className={classNames(
                                styles.item,
                                { [styles.active]: active, [styles.disabled]: item.disabled },
                            )}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </button>
                    );
                    if (item.href) {
                        return (
                            <Menu.Item as={AppLink} to={item.href} disabled={item.disabled} theme={AppLinkTheme.INVERT}>
                                {content}
                            </Menu.Item>
                        );
                    }
                    return (
                        <Menu.Item as={Fragment} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
});
