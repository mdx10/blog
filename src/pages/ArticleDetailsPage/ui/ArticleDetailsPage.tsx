import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = (props: ArticleDetailsPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articleDetailsPage');

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <h1>{t('title')}</h1>
        </div>
    );
};

export default ArticleDetailsPage;
