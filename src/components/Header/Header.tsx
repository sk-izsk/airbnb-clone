import { Avatar, Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { GrLanguage } from 'react-icons/gr';
import { MdExpandMore } from 'react-icons/md';
import { CustomTheme } from '../../theme/muiTheme';

export interface HeaderProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'sticky',
    top: 0,
    backgroundColor: 'white',
    width: '100%',
    zIndex: 100,
  },
  headerIcon: {
    objectFit: 'contain',
    height: theme.spacing(12.5),
    marginLeft: theme.spacing(2.5),
  },
  headerCenter: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
    padding: theme.spacing(1.25),
    height: theme.spacing(6),
    border: `1px solid lightgray`,
    borderRadius: 999,
    maxWidth: 'fit-content',
  },
  headerRight: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginRight: theme.spacing(10),
    width: '15vw',
  },
  searchField: {
    border: 'none',
    outlineWidth: 0,
  },
}));

const Header: React.FC<HeaderProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <img
        className={classes.headerIcon}
        src='https://i.pinimg.com/originals/3c/bf/be/3cbfbe148597341fa56f2f87ade90956.png'
        alt=''
      />
      <Box className={classes.headerCenter}>
        <input className={classes.searchField} type='text' />
        <FaSearch size={20} />
      </Box>
      <Box className={classes.headerRight}>
        <Typography>Become a host</Typography>
        <GrLanguage size={20} />
        <MdExpandMore size={20} />
        <Avatar />
      </Box>
    </Box>
  );
};

export { Header };
