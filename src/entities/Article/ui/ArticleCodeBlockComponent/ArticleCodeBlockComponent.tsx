import { classNames } from 'shared/lib/classNames/classNames';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
    className?: string;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { className } = props;
    return (
        <div className={classNames(styles.root, {}, [className])}>
            ArticleCodeBlockComponent
        </div>
    );
};
