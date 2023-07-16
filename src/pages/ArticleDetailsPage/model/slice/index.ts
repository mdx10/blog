import { combineReducers } from '@reduxjs/toolkit';
import { ArticlesDetailsPageSchema } from 'pages/ArticleDetailsPage';
import {
    articleDetailsRecommendationsReducer,
} from './ArticleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';

export const articleDetailsPageReducer = combineReducers<ArticlesDetailsPageSchema>({
    comments: articleDetailsCommentsReducer,
    recommendations: articleDetailsRecommendationsReducer,
});
