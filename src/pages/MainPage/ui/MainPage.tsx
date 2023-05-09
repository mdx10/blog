import { useTranslation } from 'react-i18next';
import { Counter } from 'entities/Counter';

const MainPage = () => {
    const { t } = useTranslation('mainPage');
    return (
        <div>
            <h1>{t('mainPage')}</h1>
            <Counter />
        </div>
    );
};

export default MainPage;
