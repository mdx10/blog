import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = (props: ArticlesPageProps) => {
    const { className } = props;
    const { t } = useTranslation('articlesPage');

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <h1>{t('title')}</h1>
        </div>
    );
};

export default ArticlesPage;