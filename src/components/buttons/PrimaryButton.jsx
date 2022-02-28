import React from 'react'
import './index.css';

const PrimaryButton = ({children,onClick}) => {
  return (
      <button onClick={onClick} className="primary__button">{children}</button>
  )
}

export default PrimaryButton