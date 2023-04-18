import {Link, Route, Routes} from 'react-router-dom'
import {Suspense} from "react";
import {MainPageAsync} from "./pages/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage.async";

export const App = () => {
    return (
        <div className="app">
            <Link to={'/'}>MainPage</Link>
            <Link to={'/about'}>AboutPage</Link>
            <Suspense fallback={<h1>Loading...</h1>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}