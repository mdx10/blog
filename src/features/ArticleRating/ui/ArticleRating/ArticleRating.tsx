import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { RatingCard } from '@/entities/Rating';
import { useArticleRating, useRateArticle } from '../../api/articleRatingApi';
import { getAuthData } from '@/entities/User';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';

interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

export const ArticleRating = memo((props: ArticleRatingProps) => {
    const { className, articleId } = props;
    const { t } = useTranslation();

    const authData = useSelector(getAuthData);

    const { data, isLoading } = useArticleRating({
        articleId,
        userId: authData?.id ?? '',
    });

    const [rateArticleMutation] = useRateArticle();

    const handleRateArticle = useCallback((starsCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                rate: starsCount,
                articleId,
                userId: authData?.id ?? '',
                feedback,
            });
        } catch (e) {
            // eslint-disable-next-line no-console
            console.log(e);
        }
    }, [articleId, authData?.id, rateArticleMutation]);

    const onCancel = useCallback((starsCount: number) => {
        handleRateArticle(starsCount);
    }, [handleRateArticle]);

    const onAccept = useCallback((starsCount: number, feedback?: string) => {
        handleRateArticle(starsCount, feedback);
    }, [handleRateArticle]);

    if (isLoading) {
        return (
            <Skeleton width="100%" height={120} />
        );
    }

    const rating = data?.[0];

    return (
        <RatingCard
            onCancel={onCancel}
            onAccept={onAccept}
            className={className}
            title={t('Оцените статью')}
            feedbackTitle={t('Оставьте свой отзыв')}
            hasFeedback
            rate={rating?.rate}
        />
    );
});
