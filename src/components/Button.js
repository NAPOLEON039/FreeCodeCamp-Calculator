import React from 'react'

import '../styles/Button.css'

const Button = ({id, value, clicked, styling=null}) => (
    <div id="btn-container" style={styling}>
        <button
          id={id}
          className="btn"
          onClick={() => {clicked(value)}}>
              {value}
        </button>
    </div>
)

export default Button