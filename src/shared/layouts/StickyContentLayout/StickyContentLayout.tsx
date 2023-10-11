import { ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './StickyContentLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    left?: ReactElement;
    content: ReactElement;
    right?: ReactElement;
}
export const StickyContentLayout = (props: MainLayoutProps) => {
    const { className, left, right, content } = props;

    return (
        <div className={classNames(styles.root, {}, [className])}>
            {left && <div className={styles.left}>{left}</div>}
            <div className={styles.content}>{content}</div>
            {right && <div className={styles.right}>{right}</div>}
        </div>
    );
};
