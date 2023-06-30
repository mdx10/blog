import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { CommentCard } from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';
import { Comment } from '../../model/types/Comment';

interface CommentListProps {
    className?: string;
    comments?: Comment[];
    isLoading?: boolean;
}

export const CommentList = (props: CommentListProps) => {
    const { className, comments, isLoading } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(styles.root, {}, [className])}>
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
                <CommentCard isLoading={isLoading} />
            </div>
        );
    }

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <h2 className={styles.title}>{t('commentsTitle')}</h2>
            {
                comments?.length
                    ? comments.map((comment) => (
                        <CommentCard
                            comment={comment}
                            isLoading={isLoading}
                            key={comment.id}
                        />
                    ))
                    : <p>{t('noComments')}</p>
            }
        </div>
    );
};
