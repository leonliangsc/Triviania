import React, { useState, useEffect } from 'react';
import Question from './Question';
import QuestionsGetter from './QuestionsGetter';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles({
    root: {
      minWidth: 375,
    },
  });

function GameBoard( {setState, setScore} ) {
    const [localScore, setLocalScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const classes = useStyles();

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
                if (questionIndex < 9) {
                    setQuestionIndex(questionIndex + 1);
                } else {
                    setScore(localScore);
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
            <Card className={classes.root}>
                {loaded && <Question
                submit = {submitAnswer}
                question = {questions[questionIndex]}
                submitted = {submitted}
                />}
            </Card>
           
        </div>
    )
}

export default GameBoard;