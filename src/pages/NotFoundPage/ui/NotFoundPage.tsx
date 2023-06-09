import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/ui/Page';
import styles from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string;
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();

    return (
        <Page className={classNames(styles.notFoundPage, {}, [className])}>
            {t('notFoundPage')}
        </Page>
    );
};
