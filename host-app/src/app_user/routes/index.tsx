import { Page } from 'bm-react-lib';
import Login from '../pages/auth';
import RegisterUser from '../pages/auth/pages/register';

const pages: { [key: string]: Page } = {
    Login: {
        name: 'Login',
        path: '/login',
        element: <Login />,
    },
    RegisterUser: {
        name: 'RegisterUser',
        path: '/register-user',
        element: <RegisterUser />,
    }
};

export default pages;
