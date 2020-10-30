import React from 'react';

function ScoreBoard({ result, setState}) {
    return (
        <div>
            <p>Your score here</p>
            <button type="button" className="button" onClick={setState}>
                Try Again
            </button>
        </div>
        
    )
}

export default ScoreBoard;