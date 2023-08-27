import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import { Page } from 'widgets/Page/ui/Page';
import { useSearchParams } from 'react-router-dom';
import { ArticlesPageFilters } from './ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../model/services/fetchNextArticlesPage';
import { fetchArticlesList } from '../model/services/fetchArticlesList';
import { articlesPageActions, articlesPageReducer } from '../model/slice/articlesPageSlice';
import {
    getArticlesPageMounted,
} from '../model/selectors/articlesPageSelectors';
import styles from './ArticlesPage.module.scss';
import { ArticlesInfiniteList } from './ArticlesInfiniteList/ArticlesInfiniteList';

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
    const mounted = useSelector(getArticlesPageMounted);

    const onLoadNextPage = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    const [searchParams] = useSearchParams();

    useEffect(() => {
        if (!mounted) {
            dispatch(articlesPageActions.initState(searchParams));
            dispatch(fetchArticlesList({}));
        }
    }, [dispatch, mounted, searchParams]);

    return (
        <DynamicModuleLoader reducers={reducers} notRemove>
            <Page onScrollEnd={onLoadNextPage} className={classNames(styles.root, {}, [className])}>
                <ArticlesPageFilters className={styles.filters} />
                <h1 className={styles.title}>{t('title')}</h1>
                <ArticlesInfiniteList />
            </Page>
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
