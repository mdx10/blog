import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleDetails } from '@/entities/Article';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { Page } from '@/widgets/Page';
import { ArticleRecommendationsList } from '@/features/ArticleRecommendationsList';
import styles from './ArticleDetailsPage.module.scss';
import { articleDetailsPageReducer } from '../../model/slice';
import { ArticleDetailsComments } from '../ArticleDetailsComments/ArticleDetailsComments';
import { ArticleRating } from '@/features/ArticleRating';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { AdditionalInfoContainer } from '../AdditionalInfoContainer/AdditionalInfoContainer';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer,
};

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articleDetailsPage');
    const { id } = useParams<{ id: string }>();

    if (!id) {
        return (
            <div className={classNames(styles.root, {}, [className])}>
                {t('Нет статьи')}
            </div>
        );
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <StickyContentLayout
                content={
                    <Page className={classNames(styles.root, {}, [className])}>
                        <ArticleDetails id={id} />
                        <ArticleRating articleId={id} />
                        <ArticleRecommendationsList />
                        <ArticleDetailsComments id={id} />
                    </Page>
                }
                right={<AdditionalInfoContainer />}
            />
        </DynamicModuleLoader>
    );
};

export default ArticleDetailsPage;
