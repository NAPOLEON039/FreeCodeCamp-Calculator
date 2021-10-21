import React from 'react'

import '../styles/Display.css'

const Display = ({character = 0}) => {
    return (
        <div className="display-container">
            <input id="display" readOnly value={character} />
        </div>
    )
}

export default Display