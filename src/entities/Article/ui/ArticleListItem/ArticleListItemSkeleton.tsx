import { classNames } from '@/shared/lib/classNames/classNames';
import { Skeleton } from '@/shared/ui/Skeleton';
import { ArticleView } from '../../model/consts/articleConsts';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemSkeletonProps {
    className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = (
    props: ArticleListItemSkeletonProps,
) => {
    const { className, view } = props;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(styles[view], {}, [className])}>
                <div className={styles.header}>
                    <Skeleton height={32} width={30} border="50%" />
                    <Skeleton height={24} width={150} border="32px" />
                </div>
                <Skeleton
                    className={styles.title}
                    height={38}
                    width="100%"
                    border="8px"
                />
                <Skeleton
                    className={styles.types}
                    height={27}
                    width={100}
                    border="8px"
                />
                <Skeleton
                    className={styles.image}
                    height={420}
                    width="100%"
                    border="32px"
                />
                <div className={styles.footer}>
                    <Skeleton
                        className={styles.image}
                        height={32}
                        width={100}
                        border="32px"
                    />
                    <div className={styles.viewsWrap}>
                        <Skeleton
                            className={styles.image}
                            height={32}
                            width={100}
                            border="32px"
                        />
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
