import { classNames } from '@/shared/lib/classNames/classNames';
import { ArticleImageBlock } from '../../model/types/Article';
import styles from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
    className?: string;
    block: ArticleImageBlock;
}

export const ArticleImageBlockComponent = (props: ArticleImageBlockComponentProps) => {
    const { className, block } = props;
    return (
        <div className={classNames(styles.root, {}, [className])}>
            <img src={block.src} alt={block.title} />
            <p>{block.title}</p>
        </div>
    );
};
