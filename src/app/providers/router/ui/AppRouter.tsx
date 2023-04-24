import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';

const AppRouter = () => (
    <Routes>
        {Object.values(routeConfig).map(({ path, element }) => (
            <Route
                key={path}
                path={path}
                element={(
                    <div className="page-wrapper">
                        <Suspense fallback={<h1>Loading...</h1>}>
                            {element}
                        </Suspense>
                    </div>
                )}
            />
        ))}
    </Routes>
);

export default AppRouter;
