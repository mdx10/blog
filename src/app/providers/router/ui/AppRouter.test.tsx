import { screen } from '@testing-library/react';
import { componentRender } from '@/shared/lib/tests/componentRender/componentRender';
import AppRouter from './AppRouter';
import { getRouteAdmin, getRouteMain, getRouteProfile } from '@/shared/constants/router';
import { UserRole } from '@/entities/User';

describe('app/providers/router/AppRouter', () => {
    test('Страница должна отрендериться', async () => {
        componentRender(<AppRouter />, {
            route: getRouteMain(),
        });
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test('Страница не найдена', async () => {
        componentRender(<AppRouter />, {
            route: '/test',
        });
        const page = await screen.findByTestId('NotFoundPage');
        expect(page).toBeInTheDocument();
    });
    test('Редирект на главную', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
        });
        const page = await screen.findByTestId('MainPage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ для авторизованного', async () => {
        componentRender(<AppRouter />, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {
                        id: '1',
                        username: 'test',
                    },
                },
            },
        });
        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ запрещен по роли', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {
                        id: '1',
                        username: 'test',
                    },
                },
            },
        });
        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('Доступ разрешен по роли', async () => {
        componentRender(<AppRouter />, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _mounted: true,
                    authData: {
                        id: '1',
                        username: 'test',
                        roles: [UserRole.ADMIN],
                    },
                },
            },
        });
        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});
