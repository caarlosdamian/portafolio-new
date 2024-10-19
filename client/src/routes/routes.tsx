import { RouteObject } from 'react-router-dom';
import { About, Blog, Home, Post } from '../pages';
import { RootLayout } from '../layout';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        element: <About />,
        path: '/about',
      },
      {
        path: '/posts',
        children: [
          {
            index: true,
            element: <Blog />,
          },
          {
            path: '/posts/:id',
            element: <Post />,
          },
        ],
      },
    ],
  },
];
