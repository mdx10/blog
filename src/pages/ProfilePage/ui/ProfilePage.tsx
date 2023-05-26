import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { profileReducer } from 'entities/Profile';

const reducers: ReducersList = {
    profile: profileReducer,
};

const ProfilePage = () => {
    const { t } = useTranslation('profilePage');
    return (
        <DynamicModuleLoader reducers={reducers}>
            <div>
                <h1>{t('profilePage')}</h1>
            </div>
        </DynamicModuleLoader>
    );
};

export default ProfilePage;
