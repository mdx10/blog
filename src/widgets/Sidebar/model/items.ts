import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import HomeIcon from 'shared/assets/icons/home-icon.svg';
import InfoIcon from 'shared/assets/icons/info-icon.svg';
import ProfileIcon from 'shared/assets/icons/user-profile-icon.svg';
import ArticleIcon from 'shared/assets/icons/article-icon.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}

export const SidebarItemList: SidebarItemType[] = [
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
    {
        path: RoutePath.profile,
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
];
