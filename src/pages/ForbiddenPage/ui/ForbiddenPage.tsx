import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const ForbiddenPage = () => {
    const { t } = useTranslation();
    return (
        <Page>
            <h1>{t('У вас нет доступа к этой странице')}</h1>
        </Page>
    );
};

export default ForbiddenPage;
