import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Start from './components/Start';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  button: {
      margin: theme.spacing.unit,
  },
}));

function App() {
  const classes = useStyles();
  const start = 'start';
  const game = 'game';
  const result = 'result';
  const [state, setState] = useState(start);
  const [score, setScore] = useState(0);
  return (
    <div>
      <Grid container className = {classes.root} spacing = {2}>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '100vh' }}
                >
        {
          state === start && (<Start setState={() => setState(game)}/>)
        }
        {
          state === game && (<GameBoard 
            setState = {() => setState(result)}
            setScore = {setScore}
            />)
        }
        {
          state === result && (<ScoreBoard
            score = {
              score
            }
            setState={() => setState(game)}
            />)
        }
        </Grid>
        </Grid>
    </div>
  );
}

export default App;
