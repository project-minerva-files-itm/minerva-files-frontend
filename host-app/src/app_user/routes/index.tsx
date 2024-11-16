import { Page } from 'bm-react-lib';
import Login from '../pages/auth';
import RegisterUser from '../pages/auth/pages/register';
import RecoverPasswordPage from '../pages/auth/pages/recoverPassword';
import ResetPasswordPage from '../pages/auth/pages/resetPassword';
import ForwardEmailPage from '../pages/auth/pages/forward_email';
import VerifiedAccountPage from '../pages/auth/pages/verified_account';
import UpdatePasswordPage from '../pages/auth/pages/update_password';

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
    },
    ForwardEmailPage: {
        name: 'ForwardEmailPage',
        path: '/forward-email',
        element: <ForwardEmailPage />,
    },
    VerifiedAccountPage: {
        name: 'VerifiedAccountPage',
        path: '/verified-account',
        element: <VerifiedAccountPage />,
    },
    UpdatePasswordPage: {
        name: 'UpdatePasswordPage',
        path: '/update-account',
        element: <UpdatePasswordPage />,
    }
};

export default pages;
