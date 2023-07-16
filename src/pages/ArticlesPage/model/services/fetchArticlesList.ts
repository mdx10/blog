import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import {
    getArticlesPageLimit,
    getArticlesPageNum,
    getArticlesPageOrder,
    getArticlesPageSearch,
    getArticlesPageSort,
    getArticlesPageType,
} from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';
import { addQueryParams } from 'shared/lib/url/getQueryParams/getQueryParams';

interface FetchArticlesListArgs {
    replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListArgs, ThunkConfig<string>>(
    'articleDetails/fetchArticlesList',
    async (args, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const limit = getArticlesPageLimit(getState());
        const sort = getArticlesPageSort(getState());
        const search = getArticlesPageSearch(getState());
        const order = getArticlesPageOrder(getState());
        const page = getArticlesPageNum(getState());
        const type = getArticlesPageType(getState());

        try {
            addQueryParams({
                sort, order, search, type,
            });
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                    _sort: sort,
                    _order: order,
                    q: search,
                    type_like: type === ArticleType.ALL ? undefined : type,
                },
            });
            if (!response.data) throw new Error();
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);
