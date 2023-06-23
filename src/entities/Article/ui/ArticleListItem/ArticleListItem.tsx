import { classNames } from 'shared/lib/classNames/classNames';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import { Article, ArticleView } from '../../model/types/Article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article?: Article;
    view: ArticleView;

}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, view, article } = props;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(styles[view], {}, [className])}>
                {article?.title}
            </div>
        );
    }

    return (
        <div className={classNames(styles[view], {}, [className])}>
            <div className={styles.imageWrapper}>
                <span className={styles.date}>{article?.createdAt}</span>
                <img className={styles.image} src={article?.img} alt={article?.title} />
            </div>
            <div className={styles.infoWrapper}>
                <span className={styles.types}>{article?.type.join(', ')}</span>
                <span className={styles.views}>{article?.views}</span>
                <EyeIcon className={styles.icon} />
            </div>
            <h4 className={styles.title}>{article?.title}</h4>
        </div>
    );
};
