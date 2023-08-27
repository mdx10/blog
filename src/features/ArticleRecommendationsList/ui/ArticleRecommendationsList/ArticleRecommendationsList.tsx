import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { useArticleRecommendationsList } from '../../api/articleRecommendationsApi';
import styles from './ArticleRecommendationsList.module.scss';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const { data: articles, isLoading } = useArticleRecommendationsList(4);

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <h2>{t('Рекоммендации')}</h2>
            <ArticleList
                articles={articles}
                target="_blank"
                isLoading={isLoading}
            />
        </div>
    );
});
