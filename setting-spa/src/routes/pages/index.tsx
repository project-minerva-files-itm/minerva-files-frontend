
import { Page } from '../types/page';
import App from '../../App'


export const pages: { [key: string]: Page } = {
    App: {
        name: 'App',
        path: '/',
        element: <App />,
    },

};
