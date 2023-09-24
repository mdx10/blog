import { memo } from 'react';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { getArticleDetailsData } from '@/entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import styles from './ArticleDetailsPageHeader.module.scss';
import {
    getRouteArticleEdit,
    getRouteArticles,
} from '@/shared/constants/router';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo(
    (props: ArticleDetailsPageHeaderProps) => {
        const { className } = props;
        const canEdit = useSelector(getCanEditArticle);
        const article = useSelector(getArticleDetailsData);
        if (!article) return null;
        return (
            <div className={classNames(styles.root, {}, [className])}>
                <AppLink theme={AppLinkTheme.ACCENT} to={getRouteArticles()}>
                    Назад к списку
                </AppLink>
                {canEdit && (
                    <AppLink
                        className={styles.edit}
                        theme={AppLinkTheme.ACCENT}
                        to={getRouteArticleEdit(article.id)}
                    >
                        Редактировать
                    </AppLink>
                )}
            </div>
        );
    },
);
