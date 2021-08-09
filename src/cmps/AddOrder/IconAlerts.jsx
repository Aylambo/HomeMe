import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function IconAlerts() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    </div>
  );
}