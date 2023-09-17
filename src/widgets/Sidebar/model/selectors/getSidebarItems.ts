import { createSelector } from '@reduxjs/toolkit';
import HomeIcon from '@/shared/assets/icons/home-icon.svg';
import InfoIcon from '@/shared/assets/icons/info-icon.svg';
import ProfileIcon from '@/shared/assets/icons/user-profile-icon.svg';
import ArticleIcon from '@/shared/assets/icons/article-icon.svg';
import { getAuthData } from '@/entities/User';
import { SidebarItemType } from '../types/Sidebar';
import {
    getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile,
} from '@/shared/constants/router';

export const getSidebarItems = createSelector(
    getAuthData,
    (authData) => {
        const sidebarItemList: SidebarItemType[] = [
            {
                path: getRouteMain(),
                text: 'mainPage',
                Icon: HomeIcon,
            },
            {
                path: getRouteAbout(),
                text: 'aboutPage',
                Icon: InfoIcon,
            },
        ];

        if (authData) {
            sidebarItemList.push(
                {
                    path: getRouteProfile(authData.id),
                    text: 'profilePage',
                    Icon: ProfileIcon,
                    authOnly: true,
                },
                {
                    path: getRouteArticles(),
                    text: 'articlesPage',
                    Icon: ArticleIcon,
                    authOnly: true,
                },
            );
        }

        return sidebarItemList;
    },
);
