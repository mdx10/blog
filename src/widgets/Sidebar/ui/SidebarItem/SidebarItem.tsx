import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { SidebarItemType } from 'widgets/Sidebar/model/items';
import { useTranslation } from 'react-i18next';
import styles from './SidebarItem.module.scss';

interface SidebarItemProps {
    item: SidebarItemType,
    collapsed: boolean,
}
export const SidebarItem = ({ item, collapsed }: SidebarItemProps) => {
    const { t } = useTranslation(item.text);
    const linkClassName = (active: boolean) => (
        classNames(styles.navLink, {
            [styles.navLinkActive]: active,
            [styles.collapsed]: collapsed,
        })
    );
    return (
        <AppLink
            to={item.path}
            className={linkClassName(false)}
            theme={AppLinkTheme.INVERT}
        >
            <item.Icon className={styles.navIcon} />
            <span>{t(item.text)}</span>
        </AppLink>
    );
};
