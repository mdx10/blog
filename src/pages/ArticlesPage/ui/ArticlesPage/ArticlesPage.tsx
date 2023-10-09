import { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { classNames } from '@/shared/lib/classNames/classNames';
import {
    DynamicModuleLoader,
    ReducersList,
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Page } from '@/widgets/Page';
import { ArticlesPageFilters } from '../ArticlesPageFilters/ArticlesPageFilters';
import { fetchNextArticlesPage } from '../../model/services/fetchNextArticlesPage';
import { fetchArticlesList } from '../../model/services/fetchArticlesList';
import {
    articlesPageActions,
    articlesPageReducer,
} from '../../model/slice/articlesPageSlice';
import { getArticlesPageMounted } from '../../model/selectors/articlesPageSelectors';
import styles from './ArticlesPage.module.scss';
import { ArticlesInfiniteList } from '../ArticlesInfiniteList/ArticlesInfiniteList';
import { StickyContentLayout } from '@/shared/layouts/StickyContentLayout';
import { ViewSelectorContainer } from '../ViewSelectorContainer/ViewSelectorContainer';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlesPageReducer,
};

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
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
            <StickyContentLayout
                left={<ViewSelectorContainer />}
                content={
                    <Page
                        onScrollEnd={onLoadNextPage}
                        className={classNames(styles.root, {}, [className])}
                        data-testid="ArticlesPage"
                    >
                        <ArticlesInfiniteList />
                    </Page>
                }
                right={<ArticlesPageFilters />}
            />
        </DynamicModuleLoader>
    );
};

export default ArticlesPage;
