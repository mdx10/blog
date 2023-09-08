import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');
    return (
        <Page>
            <h1>{t('aboutPage')}</h1>
        </Page>
    );
};

export default AboutPage;
