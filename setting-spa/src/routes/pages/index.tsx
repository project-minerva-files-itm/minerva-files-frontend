
import { Page } from '../types/page';
import App from '../../App';
import Company from '../../Pages/Company';
import Department from '../../Pages/Department';

const pages: { [key: string]: Page } = {
    App: {
        name: 'App',
        path: '/',
        element: <App />,
    },
    Company: {
        name: 'Company',
        path: '/company',
        element: <Company />,
    },
    Department: {
        name: 'Department',
        path: '/department',
        element: <Department />,
    },
};

export default pages;
