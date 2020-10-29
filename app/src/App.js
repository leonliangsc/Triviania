import React, { useState } from 'react';
import data from './Apprentice_TandemFor400_Data.json';
import Paper from '@material-ui/core/Paper';
import Start from './components/Start';
import GameBoard from './components/GameBoard';
import ScoreBoard from './components/ScoreBoard';

function App() {
  const start = 'start';
  const game = 'game';
  const result = 'result';
  const [state, setState] = useState(start);
  const [score, setScore] = useState(0);
  return (
    <div>
      <div>
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
            setState={() => setState(game)}
            score = {score}
            />)
        }
      </div>

    </div>
  );
}

export default App;
