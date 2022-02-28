import React, { useState } from 'react'
import './counter.css'


export const CounterApp = () => {

  const [ state, setState] = useState({ 
    counter1: 10,
    counter2: 20,
    counter3: 30,
    counter4: 40,
  });
 // cuando usamos useState, tener cuidado, cae encima de los otros useState Ej: cambio counte1, cambia, los demas no deberias de cambiar, por eso usamos  const { counter1, counter2 } = state, en este caso por que son los dos que se muestran <h1></h1>
  const { counter1, counter2 } = state

  // console.log(counter1)

  return (
    <>
      <h1>Counter App { counter1 }</h1>
      <h1>Counter App { counter2 }</h1>

      <hr />

      <button 
        className='btn btn-primary'
        onClick={ () => {
          setState( { 
            ...state, // siempre usar operador Spread (...state) para crear una copia de todos los valores anteriores y pasar al nuevo state, util aundo trabajamos con Context, Redux
            counter1: counter1 + 1
          });
        }}
        
        >
        +1
      </button>


    </>
  )
}
