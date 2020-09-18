import { createMuiTheme, responsiveFontSizes, Theme } from '@material-ui/core';
import { makeBorder } from './border';

const colors = {
  primaryColor: '#ff7779',
  secondaryColor: '#ffffff',
  gray: '#808080',
  lightGray: '#d3d3d3',
  black: 'rgba(0, 0, 0, 0.75)',
  secondaryGray: '#f7f7f7',
};

export interface CustomTheme extends Theme {
  border: typeof makeBorder;
}

let muiTheme: Theme = createMuiTheme({
  palette: {
    background: {
      default: colors.secondaryColor,
    },

    primary: {
      main: colors.primaryColor,
    },
    secondary: {
      main: colors.secondaryColor,
      dark: colors.black,
    },

    text: {
      primary: '#4A4A4A',
    },

    grey: {
      400: colors.gray,
      300: colors.lightGray,
      200: colors.secondaryGray,
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
    MuiButtonBase: {
      disableRipple: true,
    },
  },
  overrides: {
    MuiInputBase: {
      root: {
        backgroundColor: colors.secondaryColor,
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
      fontWeight: 'normal',
    },
    h6: {
      fontWeight: 'normal',
    },
  },
});

muiTheme.shadows[24] = '0px 3px 10px rgba(0, 0, 0, 0.08)';

const theme: CustomTheme = {
  ...responsiveFontSizes(muiTheme),
  border: makeBorder,
};

export { theme };
