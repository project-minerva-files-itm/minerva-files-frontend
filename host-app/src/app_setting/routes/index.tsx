import { Page } from 'bm-react-lib';
import App from '../../App';
import Company from '../pages/company';
import Department from '../pages/department';
import ActivityStatePage from '../pages/activity_state';

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
    Activities: {
        name: 'ActivityStatePage',
        path: '/activities',
        element: <ActivityStatePage />,
    },
};

export default pages;
