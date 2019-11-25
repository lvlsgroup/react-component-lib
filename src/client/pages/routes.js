import universal from 'react-universal-component';
import SyncLoader from '@rc-lib-client/components/loaders/syncLoader/SyncLoader';
import ErrorLoadingRouteChunk from '@rc-lib-client/containers/errorLoadingRouteChunk/ErrorLoadingRouteChunk';

const options = {
  error: ErrorLoadingRouteChunk,
  loading: SyncLoader,
  ignoreBabelRename: true,
};

export const ROUTES = {
  home: '/',
  demo: '/demo',
  undefined: '/go-to-undefined',
};

export default [
  {
    path: ROUTES.home,
    exact: true,
    componentPath: 'pages/homePage/HomePage',
    Component: universal(import('pages/homePage/HomePage'), options),
  },
  {
    path: ROUTES.demo,
    exact: true,
    componentPath: 'pages/demoPage/DemoPage',
    Component: universal(import('pages/demoPage/DemoPage'), options),
  },
  {
    path: ROUTES.undefined,
    exact: true,
    componentPath: 'pages/notFoundPage/NotFoundPage',
    Component: universal(import('pages/notFoundPage/NotFoundPage'), options),
  },
  {
    path: '*',
    componentPath: 'pages/notFoundPage/NotFoundPage',
    Component: universal(import('pages/notFoundPage/NotFoundPage'), options),
    status: 404,
  },
];
