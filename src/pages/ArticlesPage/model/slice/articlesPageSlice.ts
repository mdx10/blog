import { createEntityAdapter, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
    Article, ArticleSortField, ArticleType, ArticleView,
} from '@/entities/Article';
import { ARTICLES_VIEW_KEY } from '@/shared/constants/localstorage';
import { SortOrder } from '@/shared/types/sort';
import { ArticlesPageSchema } from '../types/ArticlesPageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState(),
);

const articlesPageSlice = createSlice({
    name: 'articlesPageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {},
        view: ArticleView.GRID,
        page: 1,
        hasMore: true,
        _mounted: false,
        search: '',
        sort: ArticleSortField.CREATED,
        order: 'asc',
        limit: 9,
        type: ArticleType.ALL,
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_KEY, action.payload);
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        setOrder: (state, action: PayloadAction<SortOrder>) => {
            state.order = action.payload;
        },
        setSort: (state, action: PayloadAction<ArticleSortField>) => {
            state.sort = action.payload;
        },
        setSearch: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        setType: (state, action: PayloadAction<ArticleType>) => {
            state.type = action.payload;
        },
        initState: (state, action: PayloadAction<URLSearchParams>) => {
            const view = localStorage.getItem(ARTICLES_VIEW_KEY) as ArticleView;
            const sortFromUrl = action.payload.get('sort') as ArticleSortField;
            const orderFromUrl = action.payload.get('order') as SortOrder;
            const searchFromUrl = action.payload.get('search');
            const typeFromUrl = action.payload.get('type') as ArticleType;
            state.view = view;
            state.limit = view === ArticleView.GRID ? 9 : 4;
            state._mounted = true;
            if (sortFromUrl) state.sort = sortFromUrl;
            if (orderFromUrl) state.order = orderFromUrl;
            if (searchFromUrl) state.search = searchFromUrl;
            if (typeFromUrl) state.type = typeFromUrl;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state, action) => {
                state.isLoading = true;
                state.error = undefined;

                if (action.meta.arg.replace) {
                    articlesAdapter.removeAll(state);
                }
            })
            .addCase(fetchArticlesList.fulfilled, (state, action) => {
                state.isLoading = false;
                state.hasMore = action.payload.length >= state.limit;

                if (action.meta.arg.replace) {
                    articlesAdapter.setAll(state, action.payload);
                } else {
                    articlesAdapter.addMany(state, action.payload);
                }
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
