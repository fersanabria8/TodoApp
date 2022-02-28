import React, { useRef } from 'react'
import '../02-useEffect/effects.css'

export const FocusScreen = () => {

  const inputRef = useRef(); // varible que cambia
  


  const handleClick = () => {
    inputRef.current.select(); // Al input selecciona el texto 
    console.log(inputRef)
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref = { inputRef }
        className='form-control'
        placeholder='Su nombre'
      >
      </input>

      <button 
      className='btn btn-outline-primary mt-5'
      onClick={ handleClick }
      
      >  
        Focus
      </button>
    </div>
  )
}
