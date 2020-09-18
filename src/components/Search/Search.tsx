import { Box, Button, makeStyles, Typography } from '@material-ui/core';
import React, { useState } from 'react';
import { DateRangePicker, Range } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { BsPeopleFill } from 'react-icons/bs';
import { useHistory } from 'react-router-dom';
import { CustomTheme } from '../../theme/muiTheme';

export interface SearchProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  search: {
    position: 'absolute',
    top: theme.spacing(4.375),
    left: '27%',
    width: '100vw',
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: theme.spacing(69.75),
    padding: theme.spacing(1.25),
    backgroundColor: theme.palette.secondary.main,
    position: 'absolute',
    left: 0,
    top: theme.spacing(43.25),
  },
  inputField: {
    width: theme.spacing(69.75),
    padding: theme.spacing(2.5),
    position: 'absolute',
    left: 0,
    height: theme.spacing(3.75),
    top: theme.spacing(49.25),
    border: 'none',
    '&:focus': {
      onlineWidth: 0,
    },
  },
  searchBtn: {
    position: 'absolute',
    left: 0,
    top: theme.spacing(54.75),
    textTransform: 'inherit',
    color: theme.palette.secondary.main,
    backgroundColor: theme.palette.primary.main,
    width: theme.spacing(69.75),
    '&hover': {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.primary.main,
    },
  },
}));

const Search: React.FC<SearchProps> = () => {
  const history = useHistory();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const classes = useStyles();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const handleSelect = (ranges: Range) => {
    //@ts-ignore
    setStartDate(ranges.selection.startDate);
    //@ts-ignore
    setEndDate(ranges.selection.endDate);
  };

  return (
    <Box className={classes.search}>
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} rangeColors={['#ff7779']} />
      <Typography className={classes.text}>
        Number of guests <BsPeopleFill />
      </Typography>
      <input className={classes.inputField} min={0} defaultValue={2} type='number' />
      <Button className={classes.searchBtn} onClick={() => history.push('/search')}>
        Search Airbnb
      </Button>
    </Box>
  );
};

export { Search };
