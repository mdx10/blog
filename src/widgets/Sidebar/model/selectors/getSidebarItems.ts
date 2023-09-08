import { createSelector } from '@reduxjs/toolkit';
import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import HomeIcon from '@/shared/assets/icons/home-icon.svg';
import InfoIcon from '@/shared/assets/icons/info-icon.svg';
import ProfileIcon from '@/shared/assets/icons/user-profile-icon.svg';
import ArticleIcon from '@/shared/assets/icons/article-icon.svg';
import { getAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/Sidebar';

export const getSidebarItems = createSelector(
    getAuthData,
    (authData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: RoutePath.main,
                text: 'mainPage',
                Icon: HomeIcon,
            },
            {
                path: RoutePath.about,
                text: 'aboutPage',
                Icon: InfoIcon,
            },
        ];

        if (authData) {
            sidebarItemList.push(
                {
                    path: RoutePath.profile + authData.id,
                    text: 'profilePage',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: RoutePath.articles,
                    text: 'articlesPage',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemList;
    },
);
