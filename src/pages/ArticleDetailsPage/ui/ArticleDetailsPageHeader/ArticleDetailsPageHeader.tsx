import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { useSelector } from 'react-redux';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from '../../model/selectors/article';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const { className } = props;
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);
    return (
        <div className={classNames(styles.root, {}, [className])}>
            <AppLink theme={AppLinkTheme.ACCENT} to={RoutePath.articles}>Назад к списку</AppLink>
            {canEdit && (
                <AppLink
                    className={styles.edit}
                    theme={AppLinkTheme.ACCENT}
                    to={`${RoutePath.articles_details}${article?.id}/edit`}
                >
                    Редактировать
                </AppLink>
            )}
        </div>
    );
});
