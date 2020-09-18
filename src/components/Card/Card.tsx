import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';

export interface CardProps {
  src?: string;
  title?: string;
  description?: string;
  price?: string;
}

const useStyles = makeStyles((theme: CustomTheme) => ({
  card: {
    margin: theme.spacing(1.25),
    borderRadius: 10,
    overflow: 'hidden',
    boxShadow: `0px 6px 18px -9px ${theme.palette.secondary.dark}`,
    transition: `transform 100ms ease-in`,
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.07)',
    },
  },
  cardInfo: {
    marginTop: -theme.spacing(1),
    borderRadius: 10,
    padding: theme.spacing(2.5),
    border: 1,
  },
  description: {
    fontSize: 14,
    fontWeight: 300,
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  cardImg: {
    objectFit: 'fill',
    minWidth: theme.spacing(37.5),
    minHeight: theme.spacing(25),
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
}));

const Card: React.FC<CardProps> = ({ src, description, price, title }) => {
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <img className={classes.cardImg} src={src} alt='' />
      <Box className={classes.cardInfo}>
        <Typography className={classes.title} variant='h3'>
          {title}
        </Typography>
        <Typography className={classes.description} variant='body1'>
          {description}
        </Typography>
        <Typography variant='h5'>{price}</Typography>
      </Box>
    </Box>
  );
};

export { Card };
