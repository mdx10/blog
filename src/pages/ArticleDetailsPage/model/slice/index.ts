import { combineReducers } from '@reduxjs/toolkit';
import { ArticlesDetailsPageSchema } from '../types';
import { articleDetailsRecommendationsReducer } from './ArticleDetailsRecommendationsSlice';
import { articleDetailsCommentsReducer } from './ArticleDetailsCommentsSlice';

export const articleDetailsPageReducer =
    combineReducers<ArticlesDetailsPageSchema>({
        comments: articleDetailsCommentsReducer,
        recommendations: articleDetailsRecommendationsReducer,
    });
