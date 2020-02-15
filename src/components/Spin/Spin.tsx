import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from './index.scss';

const useStyles = makeStyles({
  root: {
    color: '#bebebe'
  }
});

const Spin = () => {
  const classes = useStyles({});
  return (
    <div className={styles.spinBlock} style={{ display: 'none' }}>
      <div className={styles.spin}>
        <CircularProgress classes={{ root: classes.root }} size={80} />
      </div>
    </div>
  );
};

export default Spin;
