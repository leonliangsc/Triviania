import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';

const useStyles = makeStyles({
  root: {
   
  },
});

export default function LinearDeterminate({progress}) {
  const classes = useStyles();

  return (
      <LinearProgress className={classes.root} variant="determinate" value={progress * 10}/>
  );
}