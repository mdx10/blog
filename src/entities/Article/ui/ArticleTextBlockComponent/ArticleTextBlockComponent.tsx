import { classNames } from 'shared/lib/classNames/classNames';
import { ArticleTextBlock } from '../../model/types/Article';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
    className?: string;
    block: ArticleTextBlock;
}

export const ArticleTextBlockComponent = (props: ArticleTextBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(styles.root, {}, [className])}>
            {block.title && <h2 className={styles.title}>{block.title}</h2>}
            {block.paragraphs.map((p) => <p className={styles.p}>{p}</p>)}
        </div>
    );
};
