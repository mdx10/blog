import React, { memo, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageLoader } from '@/widgets/PageLoader';
import { RequireAuth } from './RequireAuth';
import { routeConfig } from '../config/routerConfig';
import { AppRouteProps } from '@/shared/types/router';

const renderWithWrapper = (route: AppRouteProps) => {
    const element = (
        <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    );

    return (
        <Route
            key={route.path}
            path={route.path}
            element={
                route.authOnly ? (
                    <RequireAuth roles={route.roles}>{element}</RequireAuth>
                ) : (
                    element
                )
            }
        />
    );
};

const AppRouter = () => (
    <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
);

export default memo(AppRouter);
