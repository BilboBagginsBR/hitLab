import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutActioin } from '../actions/auth';
import { rootState } from '../actions/types';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      background: 'black',
    },
    title: {
      flexGrow: 1,
    },
    button: {
      color: 'white',
    },
  }),
);

const getIsAuthenticated = (state: rootState) => state.auth.isAuthenticated;
const getIsLoading = (state: rootState) => state.auth.loading;

export default function ButtonAppBar() {
  const classes = useStyles();
  let history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const isLoading = useSelector(getIsLoading);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <GitHubIcon onClick={() => history.push('/')} />
          </IconButton>
          <Typography variant="button" className={classes.title}>
            <Button onClick={() => history.push('/')} className={classes.button}>
              hitLab
            </Button>
          </Typography>

          {isAuthenticated ? (
            <React.Fragment>
              <ExitToAppIcon />
              <Button
                onClick={() => {
                  dispatch(logoutActioin());
                  history.push('/login');
                }}
                color="inherit"
              >
                Logout
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button onClick={() => history.push('/developers')} color="inherit">
                Developers
              </Button>
              <Button onClick={() => history.push('/register')} color="inherit">
                Register
              </Button>
              <Button onClick={() => history.push('/login')} color="inherit">
                Login
              </Button>
            </React.Fragment>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
