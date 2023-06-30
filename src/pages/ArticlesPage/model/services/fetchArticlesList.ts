import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesPageLimit } from 'pages/ArticlesPage/model/selectors/articlesPageSelectors';

interface FetchArticlesListArgs {
    page?: number;
}

export const fetchArticlesList = createAsyncThunk<Article[], FetchArticlesListArgs, ThunkConfig<string>>(
    'articleDetails/fetchArticlesList',
    async (args, thunkAPI) => {
        const { rejectWithValue, extra, getState } = thunkAPI;
        const { page = 1 } = args;
        const limit = getArticlesPageLimit(getState());

        try {
            const response = await extra.api.get<Article[]>('/articles', {
                params: {
                    _expand: 'user',
                    _limit: limit,
                    _page: page,
                },
            });
            if (!response.data) throw new Error();
            return response.data;
        } catch (e) {
            return rejectWithValue('error');
        }
    },
);