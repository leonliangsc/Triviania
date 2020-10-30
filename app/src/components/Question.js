import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      minWidth: 375,
    },
    unselected: {

    },
    correct: {
        backgroundColor : 'lightgreen',
    },
    incorrect: {
        backgroundColor: '#FFC9D0',
    },
  }));
  
function shuffleArray(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}


function Question( {question, submit, submitted} ) {
    const [answers, setAnswers] = useState([])
    const classes = useStyles();
    const [cor, setCor] = useState(classes.unselected)
    var i = 0;
    const [zero, setZero] = useState(classes.unselected)
    const [one, setOne] = useState(classes.unselected)
    const [two, setTwo] = useState(classes.unselected)
    const [three, setThree] = useState(classes.unselected)
    const incor = [zero, one, two, three]
    useEffect(() => {
        setCor()
        setZero()
        setOne()
        setTwo()
        setThree()
        setAnswers(shuffleArray([...question.incorrect, question.correct]))
    }, [question])

    function clickEvent(value, event) {
        setCor(classes.correct);
        if (value === 'incorrect') {
            if (event.target.id === '0') {
                setZero(classes.incorrect)
            }
            if (event.target.id === '1') {
                setOne(classes.incorrect)
            }
            if (event.target.id === '2') {
                setTwo(classes.incorrect)
            }
            if (event.target.id === '3') {
                setThree(classes.incorrect)
            }
        }
        // console.log(event.target.id)
        submit(value)
    }
    // console.log(answers)

    return (
        <div>
            <CardContent>
                <Typography variant="h5" component="h2" color="textSecondary">{question.question}</Typography>
            </CardContent> 
          <div>
            <List component="nav" className={classes.root}>
                {
                answers.map((answer) => {
                const isCorrect =
                    answer === question.correct ? 'correct' : 'incorrect';
                const s = 
                    answer === question.correct ? cor : incor[i]
                return (
                    <ListItem 
                        button
                        className={s}
                        value={isCorrect}
                        key={answer}
                        id={i++}
                        onClick={event => clickEvent(isCorrect, event)}
                        disabled={submitted}
                        >
                        {answer}
                    </ListItem>
                  
                );
                })}
                </List>
          </div>
        </div>
      );
}

export default Question;
