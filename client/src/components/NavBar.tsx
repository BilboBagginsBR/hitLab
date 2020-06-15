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
