import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';

export interface BannerProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  banner: {
    background: `url("https://media.cntraveler.com/photos/5db1d0dd11c1e500092e7133/master/pass/airbnb-ski-aspen-28328347.jpg") center center`,
    height: '50vh',
    position: 'relative',
  },
  bannerInfo: {
    backgroundColor: 'black',
    color: 'white',
    paddingTop: theme.spacing(6.25),
    paddingLeft: theme.spacing(6.25),
    paddingRight: theme.spacing(6.25),
    paddingBottom: theme.spacing(5),
    width: theme.spacing(43.5),
  },
  exploreBtn: {
    backgroundColor: '#ff7779',
    color: 'white',
    textTransform: 'inherit',
    marginTop: theme.spacing(2.375),
    fontWeight: 600,
    '&:hover': {
      backgroundColor: 'white',
      color: '#ff7779',
    },
  },
  text: {
    marginTop: theme.spacing(1.25),
  },
}));

const Banner: React.FC<BannerProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.banner}>
      <Box className={classes.bannerInfo}>
        <Typography variant='h3'>Get out and stretch your imagination</Typography>
        <Typography className={classes.text} variant='h5'>
          Plan a different kind of gateway to uncover the hidden gems near you
        </Typography>
        <Button className={classes.exploreBtn} variant='outlined'>
          Explore Nearby
        </Button>
      </Box>
    </Box>
  );
};

export { Banner };
