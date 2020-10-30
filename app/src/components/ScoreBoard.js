import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
    },
  }));

function ScoreBoard({ score, setState}) {
    console.log(score)
    const classes = useStyles();
    // console.log(localStorage.getItem('totalScore'))
    return (
        <div className={classes.root}>
            <Grid container
                    spacing={3}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}>
                <Grid item xs={12}>
                    <Card>
                        <Paper className={classes.paper}>Your score here</Paper>
                    </Card>
                </Grid>
                <Grid item xs={12}>
                <Button onClick={setState} variant="contained">
                        Try Again
                </Button>
            </Grid>
            </Grid>
        </div>
        
    )
}

export default ScoreBoard;