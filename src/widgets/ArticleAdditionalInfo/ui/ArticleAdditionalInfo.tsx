import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ArticleAdditionalInfo.module.scss';
import { User } from '@/entities/User';
import { Avatar } from '@/shared/ui/Avatar';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';

interface ArticleAdditionalInfoProps {
    className?: string;
    author: User;
    createAt: string;
    views: number;
    canEdit?: boolean;
    editArticleRoute?: string;
}
export const ArticleAdditionalInfo = (props: ArticleAdditionalInfoProps) => {
    const { className, views, author, createAt, canEdit, editArticleRoute } =
        props;
    return (
        <div className={classNames(styles.root, {}, [className])}>
            <div className={styles.author}>
                <Avatar src={author?.avatar} size={32} />
                {author?.username}
                <span className={styles.date}>{createAt}</span>
            </div>
            {canEdit && editArticleRoute && (
                <AppLink
                    to={editArticleRoute}
                    theme={AppLinkTheme.OUTLINE}
                    className={styles.link}
                >
                    Редактировать
                </AppLink>
            )}
            <span>{views} просмотров</span>
        </div>
    );
};
