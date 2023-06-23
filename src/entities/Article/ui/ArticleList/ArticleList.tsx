import { classNames } from 'shared/lib/classNames/classNames';
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

    const renderArticle = (article: Article) => <ArticleListItem article={article} view={view} />;

    return (
        <div className={classNames(styles.root, {}, [className])}>
            {articles?.length > 0 && articles?.map(renderArticle)}
        </div>
    );
};
