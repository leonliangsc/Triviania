import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
  }));

function Start({setState}) {
    const classes = useStyles();
    return (
        <div>
            <Button
                variant="contained"
                className={classes.button}
                id = 'start'
                type = 'button'
                onClick = {setState}>
                    Enter Triviania
            </Button>
        </div>
    )
}

export default Start;