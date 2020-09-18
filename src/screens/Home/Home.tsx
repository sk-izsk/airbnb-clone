import { Box, makeStyles } from '@material-ui/core';
import React from 'react';
import { Banner, Card } from '../../components';
import { CustomTheme } from '../../theme/muiTheme';
import { cardData } from '../../utils';
import { CardData } from '../../utils/data';

export interface HomeProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  home: {},
  homeSection: {
    display: 'grid',
    padding: theme.spacing(3.75),
    gridTemplateColumns: '1fr 1fr 1fr',
    gridTemplateRows: '1fr 1fr',
  },
}));

const Home: React.FC<HomeProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.home}>
      <Banner />
      <Box className={classes.homeSection}>
        {cardData.map((card: CardData) => (
          <Card {...card} />
        ))}
      </Box>
    </Box>
  );
};

export default Home;
