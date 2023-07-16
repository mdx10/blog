import { CounterSchema } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileScheme } from 'entities/Profile';
import {
    AnyAction, CombinedState, EnhancedStore, Reducer, ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { ArticleDetailsSchema } from 'entities/Article/model/types/articleDetailsSchema';
import { AddCommentFormSchema } from 'features/AddCommentForm';
import { ArticlesPageSchema } from 'pages/ArticlesPage';
import { UISchema } from 'features/UI';
import { ArticlesDetailsPageSchema } from 'pages/ArticleDetailsPage';

export interface StateSchema {
    counter: CounterSchema;
    user: UserScheme;
    ui: UISchema;

    // Async reducers
    login?: LoginSchema;
    profile?: ProfileScheme;
    articleDetails?: ArticleDetailsSchema;
    addCommentsForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticlesDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
