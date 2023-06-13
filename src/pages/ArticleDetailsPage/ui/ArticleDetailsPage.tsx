import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articleDetailsPage');
    const { id } = useParams<{id: string}>();

    if (!id) {
        return (
            <div className={classNames(styles.root, {}, [className])}>
                Страница не найдена
            </div>
        );
    }

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <ArticleDetails id={id} />
        </div>
    );
};

export default ArticleDetailsPage;
