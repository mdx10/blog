import { classNames } from 'shared/lib/classNames/classNames';
import { Code } from 'shared/ui/Code/Code';
import styles from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/Article';

interface ArticleCodeBlockComponentProps {
    className?: string;
    block: ArticleCodeBlock;
}

export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(styles.root, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
};
