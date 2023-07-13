import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from 'entities/Article';
import { SortOrder } from 'shared/types';
import { ArticleSortField } from 'entities/Article/model/types/Article';

export interface ArticlesPageSchema extends EntityState<Article>{
    isLoading?: boolean;
    error?: string;
    page: number,
    limit: number,
    hasMore: boolean,
    _mounted: boolean,
    view: ArticleView;
    order: SortOrder;
    sort: ArticleSortField;
    search: string;
}
