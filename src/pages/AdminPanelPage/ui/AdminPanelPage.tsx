import React from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page';

const AdminPanelPage = () => {
    const { t } = useTranslation();
    return (
        <Page data-testid="AdminPanelPage">
            <h1>{t('Админ панель')}</h1>
        </Page>
    );
};

export default AdminPanelPage;
