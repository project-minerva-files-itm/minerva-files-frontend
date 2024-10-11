import { Page } from 'bm-react-lib';
import App from '../../App';
import Login from '../pages/auth';

const pages: { [key: string]: Page } = {
    App: {
        name: 'App',
        path: '/',
        element: <App />,
    },
    Login: {
        name: 'Login',
        path: '/login',
        element: <Login />,
    },
};

export default pages;
