import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { GrFavorite } from 'react-icons/gr';
import { CustomTheme } from '../../theme/muiTheme';

export interface SearchResultProps {
  img?: string;
  location?: string;
  title?: string;
  description?: string;
  star?: number;
  price?: string;
  total?: string;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  searchResult: {
    display: 'flex',
    position: 'relative',
    margin: theme.spacing(2.5),
    padding: theme.spacing(2.5),
    borderBottom: `1px solid lightgray`,
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
  img: {
    height: theme.spacing(25),
    width: theme.spacing(43.75),
    overflow: 'hidden',
    borderRadius: 10,
  },
  searchResultHeart: {
    position: 'absolute',
    top: theme.spacing(2.5),
    right: theme.spacing(5),
  },
  searchResultInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2.5),
  },
  searchResultInfoTop: {
    width: '40vw',
  },
  searchResultInfoBottom: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  searchResultStars: {
    display: 'flex',
    alignItems: 'center',
  },
  searchResultStar: {},
  searchResultsPrice: {
    position: 'absolute',
    bottom: theme.spacing(2.5),
    right: theme.spacing(3.75),
  },
  title: {
    fontWeight: 300,
    marginTop: theme.spacing(1.25),
  },
  normalText: {
    marginTop: theme.spacing(1.25),
    fontSize: 13,
    color: 'gray',
  },
  total: {
    textAlign: 'right',
  },
}));

const SearchResult: React.FC<SearchResultProps> = ({ description, img, location, price, star, title, total }) => {
  const classes = useStyles();
  return (
    <Box className={classes.searchResult}>
      <img className={classes.img} alt='' src={img} />
      <GrFavorite className={classes.searchResultHeart} />
      <Box className={classes.searchResultInfo}>
        <Box className={classes.searchResultInfoTop}>
          <Typography className={classes.normalText}>{location}</Typography>
          <Typography className={classes.title} variant='h4'>
            {title}
          </Typography>
          <Typography className={classes.normalText}>______</Typography>
          <Typography className={classes.normalText}>{description}</Typography>
        </Box>
        <Box className={classes.searchResultInfoBottom}>
          <Box className={classes.searchResultStars}>
            <AiFillStar className={classes.searchResultStar} color='#ff7779' />
            <Typography>{star}</Typography>
          </Box>
          <Box className={classes.searchResultsPrice}>
            <Typography variant='h3'>{price}</Typography>
            <Typography className={classes.total}>{total}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export { SearchResult };
