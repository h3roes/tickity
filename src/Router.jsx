import { useRoutes } from 'react-router-dom';

import SignInPage from 'pages/SignIn';
import NotFoundPage from 'pages/NotFound';

const Router = () => useRoutes([
  {
    path: '/',
    element: <SignInPage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

export default Router;
