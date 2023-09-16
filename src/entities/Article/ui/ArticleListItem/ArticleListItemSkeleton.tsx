import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;

}

export const ArticleListItemSkeleton = (props: ArticleListItemSkeletonProps) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(styles[view], {}, [className])}>
                <div className={styles.header}>
                    <div className={styles.user}>
                        <Skeleton height={30} width={30} border="50%" />
                        <Skeleton height={16} width={50} />
                    </div>
                    <Skeleton height={16} width={50} />
                </div>
                <Skeleton className={styles.title} height={25} width={300} />
                <Skeleton className={styles.types} height={20} width={80} />
                <Skeleton className={styles.image} height={200} width="100%" />
                <div className={styles.footer}>
                    <Skeleton className={styles.image} height={25} width={80} />
                    <div className={styles.viewsWrap}>
                        <Skeleton className={styles.image} height={25} width={60} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        // eslint-disable-next-line no-unsafe-optional-chaining
        <div className={classNames(styles[view], {}, [className])}>
            <div className={styles.imageWrapper}>
                <Skeleton className={styles.image} height={200} width={200} />
            </div>
            <div className={styles.infoWrapper}>
                <Skeleton height={16} width={130} />
            </div>
            <Skeleton className={styles.title} height={16} width={160} />
        </div>
    );
};
