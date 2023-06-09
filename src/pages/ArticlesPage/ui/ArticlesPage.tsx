import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleList } from 'entities/Article';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/ui/Page';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { articlesPageActions, articlesPageReducer, getArticles } from '../model/slice/articlesPageSlice';
import {
    getArticlesPageIsLoading,
    getArticlesPageMounted,
    getArticlesPageView,
} from '../model/selectors/articlesPageSelectors';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articlesPage');
    const dispatch = useAppDispatch();

    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const mounted = useSelector(getArticlesPageMounted);

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    useEffect(() => {
        if (!mounted) {
            dispatch(articlesPageActions.initState());
            dispatch(fetchArticlesList({
                page: 1,
            }));
        }
    }, [dispatch, mounted]);

    return (
        <DynamicModuleLoader reducers={reducers} notRemove>
            <Page onScrollEnd={onLoadNextPage} className={classNames(styles.root, {}, [className])}>
                <ArticlesPageFilters className={styles.filters} />
                <h1 className={styles.title}>{t('title')}</h1>
                <ArticleList view={view} articles={articles} isLoading={isLoading} />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
