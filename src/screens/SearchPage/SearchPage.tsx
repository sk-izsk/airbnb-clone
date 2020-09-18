import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { SearchResult } from '../../components';
import { CustomTheme } from '../../theme/muiTheme';
import { searchButtonText, searchResultData } from '../../utils';
import { SearchResultData } from '../../utils/data';

export interface SearchPageProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  searchPage: {},
  searchPageInfo: {
    padding: theme.spacing(2.5),
  },
  searchPageButton: {
    borderRadius: 30,
    textTransform: 'inherit',
    margin: theme.spacing(0.625),
  },
  searchPageTitle: {
    marginBottom: theme.spacing(3.75),
  },
  searchPageText: {
    marginBottom: theme.spacing(1.25),
    fontSize: 14,
  },
}));

const SearchPage: React.FC<SearchPageProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.searchPage}>
      <Box className={classes.searchPageInfo}>
        <Typography className={classes.searchPageText}>62 stays · 26 august to 30 august · 2 guest</Typography>
        <Typography className={classes.searchPageTitle} variant='h3'>
          Stays nearby
        </Typography>
        {searchButtonText.map((text: string) => (
          <Button className={classes.searchPageButton} key={text} variant='outlined'>
            {text}
          </Button>
        ))}
      </Box>
      {searchResultData.map((searchResult: SearchResultData) => (
        <SearchResult key={searchResult.title} {...searchResult} />
      ))}
    </Box>
  );
};

export default SearchPage;
