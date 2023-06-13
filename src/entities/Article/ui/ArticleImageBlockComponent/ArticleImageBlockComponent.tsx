import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { className } = props;
    return (
        <div className={classNames(styles.root, {}, [className])}>
            ArticleImageBlockComponent
        </div>
    );
};
