import { classNames } from 'shared/lib/classNames/classNames';
import EyeIcon from 'shared/assets/icons/eye-icon.svg';
import { Avatar } from 'shared/ui/Avatar/Avatar';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {
    Article, ArticleBlockType, ArticleTextBlock, ArticleView,
} from '../../model/types/Article';
import styles from './ArticleListItem.module.scss';

interface ArticleListItemProps {
    className?: string;
    article?: Article;
    view: ArticleView;

}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, view, article } = props;

    if (view === ArticleView.LIST) {
        const textBlock = article?.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock;

        return (
            <div className={classNames(styles[view], {}, [className])}>
                <div className={styles.header}>
                    <div className={styles.user}>
                        <Avatar src={article?.user.avatar} size={30} />
                        <span>{article?.user.username}</span>
                    </div>
                    <span>{article?.createdAt}</span>
                </div>
                <h2 className={styles.title}>{article?.title}</h2>
                <span className={styles.types}>{article?.type.join(', ')}</span>
                <img className={styles.image} src={article?.img} alt={article?.title} />
                {textBlock && <ArticleTextBlockComponent className={styles.textBlock} block={textBlock} />}
                <div className={styles.footer}>
                    {/* eslint-disable-next-line no-unsafe-optional-chaining */}
                    <AppLink to={RoutePath.articles_details + article?.id} theme={AppLinkTheme.ACCENT}>Читить статью...</AppLink>
                    <div className={styles.viewsWrap}>
                        <span>{article?.views}</span>
                        <EyeIcon className={styles.icon} />
                    </div>
                </div>
            </div>
        );
    }

    return (
        // eslint-disable-next-line no-unsafe-optional-chaining
        <AppLink to={RoutePath.articles_details + article?.id} className={classNames(styles[view], {}, [className])}>
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
        </AppLink>
    );
};
