import { classNames } from '@/shared/lib/classNames/classNames';
import { Button } from '@/shared/ui/Button/Button';
import styles from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}
export const PageError = ({ className }: PageErrorProps) => {
    const reloadPage = () => window.location.reload();
    return (
        <div className={classNames(styles.pageError, {}, [className])}>
            Что-то пошло не так:(
            <Button onClick={reloadPage} className={styles.button}>
                Обновить страницу
            </Button>
        </div>
    );
};
