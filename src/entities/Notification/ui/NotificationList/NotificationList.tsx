import { memo } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { NotificationItem } from '../NotificationItem/NotificationItem';
import { useNotifications } from '../../api/notificationApi';
import styles from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const { className } = props;
    const { data, isLoading } = useNotifications(null, {
        pollingInterval: 60000 * 5,
    });
    if (isLoading) {
        return (
            <div className={classNames(styles.root, {}, [className])}>
                <Skeleton width={270} height={60} border="4px" />
                <Skeleton width={270} height={60} border="4px" />
                <Skeleton width={270} height={60} border="4px" />
            </div>
        );
    }
    return (
        <div className={classNames(styles.root, {}, [className])}>
            {data?.map((item) => (
                <NotificationItem key={item.id} item={item} />
            ))}
        </div>
    );
});
