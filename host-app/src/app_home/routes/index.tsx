import { Page } from 'bm-react-lib';
import Home from '../pages';

const pages: { [key: string]: Page } = {
  Home: {
    name: 'Home',
    path: '/home',
    element: <Home />,
  },
};

export default pages;
