import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink/AppLink';
import { Notification } from '../../model/types/notification';
import styles from './NotificationItem.module.scss';

interface NotificationItemProps {
    className?: string;
    item: Notification;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const { className, item } = props;
    if (item.href) {
        return (
            <AppLink
                theme={AppLinkTheme.ACCENT}
                className={classNames(styles.root, {}, [className])}
                to={item.href}
                target="_blank"
            >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
            </AppLink>
        );
    }
    return (
        <div className={classNames(styles.root, {}, [className])}>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
        </div>
    );
});
