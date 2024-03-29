import { memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { Avatar } from '@/shared/ui/Avatar';
import { Dropdown } from '@/shared/ui/Popups';
import {
    getAuthData,
    isUserAdmin,
    isUserManager,
    userActions,
} from '@/entities/User';
import { getRouteAdmin, getRouteProfile } from '@/shared/constants/router';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const { className } = props;
    const dispatch = useDispatch();

    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const authData = useSelector(getAuthData);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
    }, [dispatch]);

    const isAdminPanelAvailable = isAdmin || isManager;

    if (!authData) return null;

    return (
        <Dropdown
            items={[
                ...(isAdminPanelAvailable
                    ? [
                          {
                              content: 'Админка',
                              href: getRouteAdmin(),
                          },
                      ]
                    : []),
                {
                    content: 'Профиль',
                    href: getRouteProfile(authData.id),
                },
                {
                    content: 'Выйти',
                    onClick: onLogout,
                },
            ]}
            trigger={<Avatar size={40} src={authData.avatar} />}
            direction="bottomRight"
            className={classNames('', {}, [className])}
        />
    );
});
