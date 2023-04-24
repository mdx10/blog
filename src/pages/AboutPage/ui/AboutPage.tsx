import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutPage = () => {
    const { t } = useTranslation('aboutPage');
    return (
        <div>
            <h1>{t('aboutPage')}</h1>
        </div>
    );
};

export default AboutPage;
