import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';

export interface HomeProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  home: {},
}));

const Home: React.FC<HomeProps> = () => {
  const classes = useStyles();
  return <Box className={classes.home}>this is home</Box>;
};

export default Home;
