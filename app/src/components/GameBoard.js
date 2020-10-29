import React, { useState } from 'react';

function GameBoard( {setState, setScore} ) {
    const [localScore, setLocalScore] = useState(0);
    const [questions, setQuestions] = useState([]);
    const [questionIndex, setQuestionIndex] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    return (
        <div>
            This is the game!
        </div>
    )
}

export default GameBoard;