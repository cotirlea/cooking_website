import React from 'react'

function Button({name,handleFunction,buttonStyle,containerStyle}) {
  return (
    <div className={containerStyle}>
      <button onClick={handleFunction} className={buttonStyle}>{name}</button>
    </div>
  )
}

export default Button