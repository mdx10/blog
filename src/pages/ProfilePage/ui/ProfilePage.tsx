import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Page } from '@/widgets/Page/ui/Page';
import { EditableProfileCard } from '@/features/EditableProfileCard';

const ProfilePage = () => {
    const { id } = useParams<{id: string}>();
    const { t } = useTranslation('profilePage');

    if (!id) return <h1>{t('Профиль не найден')}</h1>;

    return (
        <Page>
            <EditableProfileCard id={id} />
        </Page>
    );
};

export default ProfilePage;
