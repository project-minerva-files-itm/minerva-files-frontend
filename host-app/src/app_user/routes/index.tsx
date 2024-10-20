import { Page } from 'bm-react-lib';
import Login from '../pages/auth';
import RegisterUser from '../pages/auth/pages/register';
import RecoverPasswordPage from '../pages/auth/pages/recoverPassword';
import ResetPasswordPage from '../pages/auth/pages/resetPassword';

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
    },
    RecoverPasswordPage: {
        name: 'RecoverPasswordPage',
        path: '/recover-password',
        element: <RecoverPasswordPage />,
    },
    ResetPasswordPage: {
        name: 'ResetPasswordPage',
        path: '/reset-password',
        element: <ResetPasswordPage />,
    }
};

export default pages;
