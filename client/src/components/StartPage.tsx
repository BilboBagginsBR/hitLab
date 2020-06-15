import React from 'react';
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { useHistory } from 'react-router-dom';
import Typed from 'react-typed';

const useStyles = makeStyles({
  base: {
    width: '100%',
    height: '95vh',
    background: 'url(https://images8.alphacoders.com/559/559128.jpg) center center no-repeat',
    // opacity: 0.7,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
});

const StartPage = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <Box className={classes.base}>
      <Box>
        <Typography variant="h5">
          <Typed strings={['Welcome Social for developers']} typeSpeed={40} backSpeed={40} />
        </Typography>
        <Typography variant="h6">
          <Typed
            strings={[
              'git status',
              'git commit -m "WTF"',
              'git merge master',
              'git pull origin master',
            ]}
            typeSpeed={40}
            backSpeed={40}
            loop
          />
        </Typography>
        <Box className={classes.buttons}>
          <Button onClick={() => history.push('/register')}  variant="contained" color="primary" style={{ marginRight: '10px' }}>
            Sigh up
          </Button>
          <Button onClick={() => history.push('/login')}  variant="contained" color="secondary">
            Login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default StartPage;
