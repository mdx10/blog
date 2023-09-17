import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton';
import { AppLink } from '@/shared/ui/AppLink';
import styles from './CommentCard.module.scss';
import { Comment } from '../../model/types/Comment';
import { getRouteProfile } from '@/shared/constants/router';

interface CommentCardProps {
    className?: string;
    comment?: Comment;
    isLoading?: boolean;
}

export const CommentCard = (props: CommentCardProps) => {
    const { className, comment, isLoading } = props;

    if (isLoading) {
        return (
            <div className={classNames(styles.root, {}, [className])}>
                <div className={styles.header}>
                    <Skeleton width={30} height={30} border="50%" />
                    <Skeleton width={80} height={16} />
                </div>
                <Skeleton width="100%" height={40} />
            </div>
        );
    }

    if (!comment) return null;

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <AppLink to={getRouteProfile(comment?.user.id)} className={styles.header}>
                <Avatar size={30} src={comment?.user.avatar ? comment.user.avatar : 'https://placehold.co/300'} />
                <span className={styles.username}>{comment?.user.username}</span>
            </AppLink>
            <p>{comment?.text}</p>
        </div>
    );
};
