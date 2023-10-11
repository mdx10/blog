import { classNames } from '@/shared/lib/classNames/classNames';
import styles from './ScrollToolbar.module.scss';
import { ScrollTop } from '@/features/ScrollTop';

interface ScrollToolbarProps {
    className?: string;
}
export const ScrollToolbar = ({ className }: ScrollToolbarProps) => (
    <div className={classNames(styles.root, {}, [className])}>
        <ScrollTop />
    </div>
);
