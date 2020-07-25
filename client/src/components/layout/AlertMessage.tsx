import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { alertSelector } from '../../actions/selectors';

const AlertMessage = () => {
  const alerts = useSelector(alertSelector);
  return (
    <Fragment>
      {alerts.length > 0 &&
        alerts.map((alert, index) => {
          return (
            <div key={index} style={{ color: alert.alertType, border: `1px solid ${alert.alertType}` }}>
              <span>{alert.msg}</span>
            </div>
          );
        })}
    </Fragment>
  );
};

export default AlertMessage;
