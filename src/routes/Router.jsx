import { createBrowserRouter } from 'react-router-dom';

import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../pages/ErrorPage';
import HomePage from '../pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />
      }
    ]
  },
  {
    path: '/*',
    element: <ErrorPage />
  }
]);

export default router;
