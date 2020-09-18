import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CustomTheme } from '../../theme/muiTheme';
import { Search } from '../Search/Search';

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
    height: theme.spacing(54),
  },
  exploreBtn: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.secondary.main,
    textTransform: 'inherit',
    marginTop: theme.spacing(1.25),
    fontWeight: 600,
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
  },
  text: {
    marginTop: theme.spacing(1.25),
  },
  bannerSearch: {
    display: 'flex',
    flexDirection: 'column',
  },
  bannerSearchButton: {
    backgroundColor: theme.palette.secondary.main,
    fontWeight: 900,
    textTransform: 'inherit',
    color: theme.palette.primary.main,
    '&:hover': {
      border: 'none',
    },
  },
}));

const Banner: React.FC<BannerProps> = () => {
  const classes = useStyles();
  const history = useHistory();
  const [showSearch, setShowSearch] = useState<boolean>(false);

  const handleDates = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Box className={classes.banner}>
      <Box className={classes.bannerSearch}>
        {showSearch && <Search />}
        <Button onClick={handleDates} variant='outlined' className={classes.bannerSearchButton}>
          Search Dates
        </Button>
      </Box>
      <Box className={classes.bannerInfo}>
        <Typography variant='h3'>Get out and stretch your imagination</Typography>
        <Typography className={classes.text} variant='h5'>
          Plan a different kind of gateway to uncover the hidden gems near you
        </Typography>
        <Button className={classes.exploreBtn} onClick={() => history.push('/search')} variant='outlined'>
          Explore Nearby
        </Button>
      </Box>
    </Box>
  );
};

export { Banner };
