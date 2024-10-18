import { RouteObject } from 'react-router-dom';
import { Blog, Home, Post } from '../pages';
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
