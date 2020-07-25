
import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import { getIsAuthenticated } from '../../actions/selectors';

const Register = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated);
  const [formData, setFormData] = useState({
=======
import React, { useState, FC } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import {themeObj, useStyles} from './theme';



interface FormState {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}



export const Register: FC = () => {
  const classes = useStyles();
  const theme = createMuiTheme(themeObj);
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { name, email, password, confirmPassword } = formData;

  const onChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      dispatch(setAlert('bad password', 'red'));
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Fragment>
      <h1>Sign up</h1>
      <form
        style={{ display: 'flex', flexDirection: 'column', width: '30%' }}
        onSubmit={onSubmit}
      >
        <input type="text" name="name" placeholder="Name" value={name} onChange={onChange} />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="confirm password"
          value={confirmPassword}
          onChange={onChange}
        />
        <button type="submit">register</button>
      </form>
      <h3>
        {' '}
        Already have an account? <Link to="/login">Sign In</Link>
      </h3>
    </Fragment>
  );
};

export default Register;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({...formData, [e.currentTarget.name]: e.currentTarget.value})
  }
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
     return console.log('bad password')
    } else {
      console.log('Success')
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container className={classes.main} component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="fname"
                  name="name"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="Name"
                  autoFocus
                  value={name}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="confirmPassword"
                  label="Confirm password"
                  type="password"
                  id="confirmPassword"
                  autoComplete="current-password"
                  value={confirmPassword}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link className={classes.bottmLink} to="/login">Already have an account? Sign in</Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};
