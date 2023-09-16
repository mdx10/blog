import { memo, useCallback, useState } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Popover } from '@/shared/ui/Popups';
import NotificationIcon from '@/shared/assets/icons/notification-icon.svg';
import { NotificationList } from '@/entities/Notification';
import { Drawer } from '@/shared/ui/Drawer';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;

    const [isOpenDrawer, setIsOpenDrawer] = useState(false);

    const onOpenDrawer = useCallback(() => setIsOpenDrawer(true), []);
    const onCloseDrawer = useCallback(() => setIsOpenDrawer(false), []);

    const trigger = (
        <button type="button" onClick={onOpenDrawer} className={styles.trigger}>
            <NotificationIcon className={styles.icon} />
        </button>
    );

    return (
        <>
            <BrowserView>
                <Popover
                    trigger={trigger}
                    direction="bottomRight"
                    className={classNames('', {}, [className])}
                >
                    <NotificationList className={styles.notifications} />
                </Popover>
            </BrowserView>
            <MobileView>
                {trigger}
                <Drawer isOpen={isOpenDrawer} onClose={onCloseDrawer}>
                    <NotificationList className={styles.notificationsMob} />
                </Drawer>
            </MobileView>
        </>
    );
});
