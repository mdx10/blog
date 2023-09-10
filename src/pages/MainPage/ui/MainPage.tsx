import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';
import { RatingCard } from '@/entities/Rating/ui/RatingCard/RatingCard';

const MainPage = () => {
    const { t } = useTranslation('mainPage');
    return (
        <Page>
            <h1>{t('mainPage')}</h1>
            <RatingCard title="Оцените статью" feedbackTitle="Напишите отзыв" hasFeedback />
        </Page>
    );
};

export default MainPage;
