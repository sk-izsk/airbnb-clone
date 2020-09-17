import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { CustomTheme } from '../../theme/muiTheme';

export interface FooterProps {}

const useStyles = makeStyles((theme: CustomTheme) => ({
  footer: {
    borderTop: `1px solid lightgray`,
    padding: theme.spacing(2.5),
    backgroundColor: '#f7f7f7',
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    padding: theme.spacing(0.625),
  },
}));

const Footer: React.FC<FooterProps> = () => {
  const classes = useStyles();
  return (
    <Box className={classes.footer}>
      <Typography className={classes.text} variant='body1'>
        © 2020 Airbnb clone! No rights reserved - this is a demo!
      </Typography>
      <Typography className={classes.text} variant='caption'>
        Privacy · Terms · Sitemap · Company Details
      </Typography>
    </Box>
  );
};

export { Footer };
