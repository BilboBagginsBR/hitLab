import React, { useState, FC } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import { Link,Redirect } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { themeObj, useStyles } from './theme';
import { loginAction } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../actions/types';

interface FormState {
  email: string;
  password: string;
}

const getIsAuthenticated = (state: rootState) => state.auth.isAuthenticated

export const Login: FC = () => {
  const classes = useStyles();
  const theme = createMuiTheme(themeObj);
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(getIsAuthenticated)
  const [formData, setFormData] = useState<FormState>({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAction(formData))
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard'/>
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
            Sign in
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => onSubmit(e)}
            autoComplete={'off'}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="off"
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
                <Link className={classes.bottmLink} to="/register">
                  Do not have an account? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};


