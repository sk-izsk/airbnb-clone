import { Box, makeStyles } from '@material-ui/core';
import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { AppProvider } from './AppProvider';
import { Footer, Header, LoadingScreen } from './components';
import { HomeScreen } from './lazyComponents';
import { CustomTheme } from './theme/muiTheme';

export interface AppProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  app: {},
}));

const App: React.FC<AppProps> = () => {
  const classes = useStyles();
  return (
    <AppProvider>
      <Box className={classes.app}>
        <Header />
        <Switch>
          <Suspense fallback={<LoadingScreen />}>
            <Route exact path='/'>
              <Redirect to='/home' />
            </Route>
            <Route path='/home' exact component={HomeScreen} />
          </Suspense>
        </Switch>
        <Footer />
      </Box>
    </AppProvider>
  );
};

export { App };
