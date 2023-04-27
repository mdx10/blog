import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const MainPage = () => {
    const { t } = useTranslation('mainPage');
    useEffect(() => {
        throw new Error();
    });
    return (
        <div>
            <h1>{t('mainPage')}</h1>
        </div>
    );
};

export default MainPage;
