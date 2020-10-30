import React, { useState, useEffect } from 'react';
import Question from './Question';
import QuestionsGetter from './QuestionsGetter';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Chip from '@material-ui/core/Chip';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      minWidth: 375,
    },
    grid: {
        flexGrow: 1,
    },
  });

function GameBoard( {setState, setScore} ) {
    const [localScore, setLocalScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const classes = useStyles();
    // console.log(localScore)

    useEffect(() => {
        var data = QuestionsGetter();
        setQuestions(data);
        setLoaded(true);
    }, [])

    useEffect(() => {
        if (submitted) {
            // console.log(localScore)
            setTimeout(() => {
                setSubmitted(false);
                if (questionIndex < 1) {
                    setQuestionIndex(questionIndex + 1);
                } else {
                    setScore(localScore);
                    let playCount = parseInt(localStorage.getItem('playCount')) || 0;
                    let totalScore = parseInt(localStorage.getItem('totalScore')) || 0;
                    localStorage.setItem('playCount', ++playCount);
                    localStorage.setItem('totalScore', totalScore + localScore);
                    setState();
                }
            }, 1000);
        }
    }, [submitted])

    const submitAnswer = (event) => {
        // console.log(event)
        const correct = event === 'correct';
        setSubmitted(true);
        if (correct) {
          setLocalScore(localScore + 1);
        }
      };
    

    return (
        <div>
            <Grid container spacing={3}>

                <Grid item xs={12}><Card className={classes.grid}>
                    {loaded && <Question
                    submit = {submitAnswer}
                    question = {questions[questionIndex]}
                    submitted = {submitted}
                    />}
                </Card></Grid>
                
                <Grid item xs={12}><Chip justifycontent='center' label={`${questionIndex + 1}/10`} /></Grid>
            </Grid>
            
            
        </div>
    )
}

export default GameBoard;