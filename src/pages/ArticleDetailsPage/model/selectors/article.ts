import { createSelector } from '@reduxjs/toolkit';
import { getAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';

export const getCanEditArticle = createSelector(
    getAuthData,
    getArticleDetailsData,
    (user, article) => {
        if (!article || !user) return false;
        return article.user.id === user.id;
    },
);
