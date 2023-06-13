import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { className } = props;
    return (
        <div className={classNames(styles.root, {}, [className])}>
            ArticleTextBlockComponent
        </div>
    );
};
