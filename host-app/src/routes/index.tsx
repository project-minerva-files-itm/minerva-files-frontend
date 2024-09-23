import pages from './pages';
import { Page } from './types/page';

import { Routes, Route } from 'react-router-dom';

export const PagesRouter: React.FC = () => {
    return (
        <Routes>
            {Object.values(pages).map(({ ...page }: Page) => (
                <Route key={page.name} path={page.path} element={page.element} />
            ))}
        </Routes>
    );
};