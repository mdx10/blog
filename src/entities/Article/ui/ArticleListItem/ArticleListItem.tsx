import { HTMLAttributeAnchorTarget } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import EyeIcon from '@/shared/assets/icons/eye-icon.svg';
import { Avatar } from '@/shared/ui/Avatar';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import {
    ArticleBlockType,
    ArticleView,
} from '../../model/consts/articleConsts';
import { ArticleTextBlockComponent } from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import { Article, ArticleTextBlock } from '../../model/types/Article';
import styles from './ArticleListItem.module.scss';
import { getRouteArticleDetails } from '@/shared/constants/router';
import { AppImage } from '@/shared/ui/AppImage';
import { Skeleton } from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = (props: ArticleListItemProps) => {
    const { className, view, article, target } = props;
    const textBlock = article?.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    if (view === ArticleView.LIST) {
        return (
            <div className={classNames(styles[view], {}, [className])}>
                <div className={styles.header}>
                    <Avatar src={article?.user.avatar} size={32} />
                    <span className={styles.username}>
                        {article?.user.username}
                    </span>
                    <span>{article?.createdAt}</span>
                </div>
                <h2 className={styles.title}>{article?.title}</h2>
                <h3 className={styles.subtitle}>{article?.subtitle}</h3>
                <AppImage
                    fallback={<Skeleton width="100%" height={230} />}
                    className={styles.image}
                    src={article?.img}
                    alt={article?.title}
                />
                {textBlock && (
                    <ArticleTextBlockComponent
                        className={styles.textBlock}
                        block={textBlock}
                    />
                )}
                <div className={styles.footer}>
                    <AppLink
                        // eslint-disable-next-line no-unsafe-optional-chaining
                        to={getRouteArticleDetails(article.id)}
                        theme={AppLinkTheme.OUTLINE}
                        target={target}
                    >
                        Читать далее...
                    </AppLink>
                    <div className={styles.viewsWrap}>
                        <EyeIcon className={styles.icon} />
                        <span>{article?.views}</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <AppLink
            // eslint-disable-next-line no-unsafe-optional-chaining
            to={getRouteArticleDetails(article.id)}
            className={classNames(styles[view], {}, [className])}
            target={target}
        >
            <div className={styles.imageWrapper}>
                <AppImage
                    fallback={<Skeleton width="100%" height={140} />}
                    className={styles.image}
                    src={article?.img}
                    alt={article?.title}
                />
            </div>
            <div className={styles.infoWrapper}>
                <h4 className={styles.title}>{article?.title}</h4>
                <p className={styles.paragraphs}>{textBlock?.paragraphs[0]}</p>
                <div className={styles.row}>
                    <span>{article?.createdAt}</span>
                    <span className={styles.views}>
                        <EyeIcon className={styles.icon} />
                        {article?.views}
                    </span>
                </div>
                <span className={styles.username}>
                    <Avatar src={article?.user.avatar} size={32} />
                    {article?.user.username}
                </span>
            </div>
        </AppLink>
    );
};
