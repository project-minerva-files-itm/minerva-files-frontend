import { Page } from 'bm-react-lib';
import Login from '../pages/auth';

const pages: { [key: string]: Page } = {
    Login: {
        name: 'Login',
        path: '/login',
        element: <Login />,
    },
};

export default pages;
