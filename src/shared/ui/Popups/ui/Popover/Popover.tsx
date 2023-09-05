import { Popover as HPopover } from '@headlessui/react';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo, ReactNode } from 'react';
import { DropdownDirection } from 'shared/types/ui';
import popupCls from '../../styles/popup.module.scss';
import styles from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropdownDirection;
    children?: ReactNode;
}

export const Popover = memo((props: PopoverProps) => {
    const {
        className, trigger, direction = 'bottomLeft', children,
    } = props;

    return (
        <HPopover
            className={classNames(styles.root, {}, [className])}
        >
            <HPopover.Button className={styles.trigger}>
                {trigger}
            </HPopover.Button>

            <HPopover.Panel
                className={classNames(styles.panel, {}, [popupCls[direction]])}
                unmount={false}
            >
                {children}
            </HPopover.Panel>
        </HPopover>
    );
});
