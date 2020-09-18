import { lazy } from 'react';

const HomeScreen = lazy(() => import('./screens/Home/Home'));
const SearchPageScreen = lazy(() => import('./screens/SearchPage/SearchPage'));

export { HomeScreen, SearchPageScreen };
