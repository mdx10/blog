import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from '@/shared/ui/AppLink';
import { getAuthData } from '@/entities/User';
import { SidebarItemType } from '../../model/types/Sidebar';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType;
    active?: boolean;
}
export const SidebarItem = ({ item, active }: SidebarItemProps) => {
    const { t } = useTranslation(item.text);
    const isAuth = useSelector(getAuthData);

    if (item.authOnly && !isAuth) return null;

    return (
        <AppLink
            to={item.path}
            className={classNames(styles.navLink, {
                [styles.navLinkActive]: active,
            })}
            theme={AppLinkTheme.PRIMARY}
        >
            <item.Icon className={styles.navIcon} />
            <span>{t(item.text)}</span>
        </AppLink>
    );
};
