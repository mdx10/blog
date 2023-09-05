import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { Popover } from 'shared/ui/Popups';
import NotificationIcon from 'shared/assets/icons/notification-icon.svg';
import { NotificationList } from 'entities/Notification';
import styles from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const { className } = props;
    return (
        <Popover
            trigger={(
                <NotificationIcon className={styles.icon} />
            )}
            direction="bottomRight"
            className={classNames('', {}, [className])}
        >
            <NotificationList className={styles.notifications} />
        </Popover>
    );
});
