import { classNames } from 'shared/lib/classNames/classNames';
import { HTMLAttributeAnchorTarget } from 'react';
import { ArticleListItemSkeleton } from '../ArticleListItem/ArticleListItemSkeleton';
import styles from './ArticleList.module.scss';
import { Article, ArticleView } from '../../model/types/Article';
import { ArticleListItem } from '../ArticleListItem/ArticleListItem';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeleton = (view: ArticleView) => new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    // eslint-disable-next-line react/no-array-index-key
    .map((item, index) => <ArticleListItemSkeleton key={index} view={view} />);

export const ArticleList = (props: ArticleListProps) => {
    const {
        className,
        articles,
        isLoading,
        view = ArticleView.GRID,
        target,
    } = props;

    const renderArticle = (article: Article) => (
        <ArticleListItem key={article.id} article={article} view={view} target={target} />
    );

    if (!isLoading && !articles.length) {
        return (
            <div className={classNames(styles.root, {}, [className])}>
                <h2>Статьи не найдены</h2>
            </div>
        );
    }

    return (
        <div className={classNames(styles.root, {}, [className])}>
            {articles?.length > 0 && articles?.map(renderArticle)}
            {isLoading && getSkeleton(view)}
        </div>
    );
};
