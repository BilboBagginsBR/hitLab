
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getIsAuthenticated } from '../actions/selectors';
import { logout } from '../actions/auth';

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <div style={{ display: 'flex' }}>
      <Link to="/">hitlab</Link>
      <Link to="/developers">developers</Link>
      <Link to="/profiles">profiles</Link>
      <Link to="/posts">posts</Link>
      {isAuthenticated ? (
        <button
          onClick={() => {
            dispatch(logout());
            history.push('/login');
          }}
        >
          logout
        </button>
      ) : (
        <Fragment>
          <Link to="/register">register</Link>
          <Link to="/login">login</Link>
        </Fragment>
      )}
    </div>
  );
};

export default NavBar;
=======
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import GitHubIcon from '@material-ui/icons/GitHub';
import { useHistory } from 'react-router-dom';

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

export default function ButtonAppBar() {
  const classes = useStyles();
  let history = useHistory();

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
          <Button onClick={() => history.push('/developers')} color="inherit">
            Developers
          </Button>
          <Button onClick={() => history.push('/register')} color="inherit">
            Register
          </Button>
          <Button onClick={() => history.push('/login')} color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
