import React from 'react';
import {
  ThemeProvider,
  createMuiTheme,
  createStyles,
  makeStyles,
  Theme,
} from '@material-ui/core/styles';
import { AppBar, CssBaseline, Typography } from '@material-ui/core';

const muitheme = createMuiTheme({
  palette: {
    mode: 'light',
  },
});

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appbar: {
      padding: theme.spacing(1.5),
    },
    main: {
      padding: theme.spacing(1.5),
    },
  }),
);

export interface GenericTemplateProps {
  children: React.ReactNode;
}

export const GenericTemplate: React.FC<GenericTemplateProps> = ({
  children,
}) => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={muitheme}>
      <CssBaseline />
      <div>
        <header>
          <AppBar position="static" className={classes.appbar}>
            <Typography variant="h6">
              React Tic-Tac-Toe Tutorial (TypeScript and Material-UI ver.)
            </Typography>
          </AppBar>
        </header>
      </div>
      <div className={classes.main}>
        <main>{children}</main>
      </div>
    </ThemeProvider>
  );
};
export default GenericTemplate;
