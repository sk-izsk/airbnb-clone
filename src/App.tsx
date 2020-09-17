import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppProvider';
import { LoadingScreen } from './components';
import { HomeScreen } from './lazyComponents';

export interface AppProps {}

const App: React.FC<AppProps> = () => {
  return (
    <AppProvider>
      <Switch>
        <Suspense fallback={<LoadingScreen />}>
          <Route exact path='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='/home' exact component={HomeScreen} />
        </Suspense>
      </Switch>
    </AppProvider>
  );
};

export { App };
