import React from 'react'
import  './sq_compo.css'

const SquareComponent = (props) => {
  return (
    <>
      <span className={`square ${props.class}`} >X</span>
      
    </>
  )
}

export default SquareComponent
