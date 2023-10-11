import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleAdditionalInfo } from '@/widgets/ArticleAdditionalInfo';
import { getArticleDetailsData } from '@/entities/Article';
import styles from './AdditionalInfoContainer.module.scss';
import { getCanEditArticle } from '../../model/selectors/article';
import { getRouteArticleEdit } from '@/shared/constants/router';

interface AdditionalInfoContainerProps {
    className?: string;
}
export const AdditionalInfoContainer = (
    props: AdditionalInfoContainerProps,
) => {
    const { className } = props;
    const article = useSelector(getArticleDetailsData);
    const canEdit = useSelector(getCanEditArticle);

    if (!article) return null;

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <ArticleAdditionalInfo
                createAt={article.createdAt}
                views={article.views}
                author={article.user}
                canEdit={canEdit}
                editArticleRoute={getRouteArticleEdit(article.id)}
            />
        </div>
    );
};
