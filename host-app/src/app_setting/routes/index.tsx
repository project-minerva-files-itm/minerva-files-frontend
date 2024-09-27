import { Page } from 'bm-react-lib';
import App from '../../App';
import Company from '../pages/company';
import Department from '../pages/department';

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
