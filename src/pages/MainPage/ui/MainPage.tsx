import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const MainPage = () => {
    const { t } = useTranslation('mainPage');
    return (
        <Page>
            <h1>{t('mainPage')}</h1>
        </Page>
    );
};

export default MainPage;
