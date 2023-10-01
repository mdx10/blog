import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppRouter } from './providers/router';
import { Navbar } from '@/widgets/Navbar';
import { Sidebar } from '@/widgets/Sidebar';
import { getAuthMounted, userActions } from '@/entities/User';
import { useTheme } from '@/shared/lib/hooks/useTheme/useTheme';
import { MainLayout } from '@/shared/layouts/MainLayout';
import { PageLoader } from '@/widgets/PageLoader';

export const App = () => {
    const { theme } = useTheme();
    const dispatch = useDispatch();
    const mounted = useSelector(getAuthMounted);

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    // return (
    //     <div className={classNames('app', {}, [theme])}>
    //         <Suspense fallback="">
    //             <Navbar />
    //             <div className="content-page">
    //                 <Sidebar />
    //                 {mounted && <AppRouter />}
    //             </div>
    //         </Suspense>
    //     </div>
    // );
    if (!mounted) return <PageLoader />;

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <MainLayout
                    header={<Navbar />}
                    sidebar={<Sidebar />}
                    content={<AppRouter />}
                    toolbar={<div>123</div>}
                />
            </Suspense>
        </div>
    );
};
