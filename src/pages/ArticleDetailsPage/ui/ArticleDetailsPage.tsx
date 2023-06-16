import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import { CommentList } from 'entities/Comment';
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
                {t('noArticle')}
            </div>
        );
    }

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <ArticleDetails id={id} />
            <CommentList
                className={styles.comments}
                comments={[
                    { id: '1', text: 'comment 1', user: { id: '1', username: 'user1', avatar: 'https://i.pravatar.cc/300?img=1' } },
                    { id: '2', text: 'comment 2', user: { id: '2', username: 'user2', avatar: 'https://i.pravatar.cc/300?img=2' } },
                ]}
            />
        </div>
    );
};

export default ArticleDetailsPage;
