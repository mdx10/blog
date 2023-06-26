import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/Article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.GRID,
    } = props;

    const renderArticle = (article: Article) => <ArticleListItem key={article.id} article={article} view={view} />;

    if (isLoading) {
        return (
            <div className={classNames(styles.root, {}, [className])}>
                {
                    new Array(view === ArticleView.GRID ? 9 : 3)
                        .fill(0)
                        // eslint-disable-next-line react/no-array-index-key
                        .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />)
                }
            </div>
        );
    }

    return (
        <div className={classNames(styles.root, {}, [className])}>
            {articles?.length > 0 && articles?.map(renderArticle)}
        </div>
    );
};
