import { ReactElement } from 'react';
import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
    className?: string;
    header: ReactElement;
    sidebar: ReactElement;
    content: ReactElement;
    toolbar?: ReactElement;
}
export const MainLayout = (props: MainLayoutProps) => {
    const { className, header, toolbar, content, sidebar } = props;

    return (
        <div className={classNames(styles.root, {}, [className])}>
            <div className={styles.sidebar}>{sidebar}</div>
            <div className={styles.content}>{content}</div>
            <div className={styles.rightbar}>
                <div className={styles.header}>{header}</div>
                <div className={styles.toolbar}>{toolbar}</div>
            </div>
        </div>
    );
};
