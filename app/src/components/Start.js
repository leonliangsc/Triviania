import React from 'react';



function Start({setState}) {
    return (
        <div>
            <p>
                Welcome to Triviana!
            </p>
            <div>
                <button
                id = 'start'
                type = 'button'
                onClick = {setState}>
                    Start
                </button>
            </div>
        </div>
    )
}

export default Start;