import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@material-ui/lab';
import { RootState } from '../../reducers/index';
import { alertState } from '../../actions/types';
import { rootState } from '../../actions/types';

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '90%',
      margin: '0 auto',
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
    text: {
      color: 'rgb(250, 179, 174)',
      marginBottom: '10px'
    },
  }),
);

const alertSelector = (state: rootState): alertState[] => state.alert;

const AlertMessage = () => {
  const classes = useStyles();
  const alerts = useSelector(alertSelector);
  return (
    <React.Fragment>
      {alerts.length > 0 &&
        alerts.map((alert: alertState) => (
          <div className={classes.root}>
            <Alert className={classes.text} variant="outlined" severity={alert.alertType}>
              {alert.msg}
            </Alert>
          </div>
        ))}
    </React.Fragment>
  );
};

export default AlertMessage;
