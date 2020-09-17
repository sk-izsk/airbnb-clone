import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Banner } from '../../components';
import { CustomTheme } from '../../theme/muiTheme';

export interface HomeProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  home: {},
}));

const Home: React.FC<HomeProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.home}>
      <Banner />
    </Box>
  );
};

export default Home;
