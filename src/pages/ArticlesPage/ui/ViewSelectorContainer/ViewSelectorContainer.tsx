import { useSelector } from 'react-redux';
import { useCallback } from 'react';
import { ArticleViewSelector } from '@/features/ArticleViewSelector';
import { getArticlesPageView } from '../../model/selectors/articlesPageSelectors';
import { ArticleView } from '@/entities/Article';
import { articlesPageActions } from '../../model/slice/articlesPageSlice';
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';

interface ViewSelectorContainerProps {
    className?: string;
}
export const ViewSelectorContainer = (props: ViewSelectorContainerProps) => {
    const { className } = props;

    const dispatch = useAppDispatch();

    const view = useSelector(getArticlesPageView);

    const onChangeView = useCallback(
        (view: ArticleView) => {
            dispatch(articlesPageActions.setView(view));
        },
        [dispatch],
    );

    return (
        <ArticleViewSelector
            className={className}
            view={view}
            onViewClick={onChangeView}
        />
    );
};
