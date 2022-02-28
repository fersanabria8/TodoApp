import React, { useLayoutEffect, useRef, useState } from 'react';
import { useFetch } from '../../hooks/useFetch';
import { useCounter } from '../../hooks/useCounter';
import './layout.css'

// import '../02-useEffect/effects.css';


export const Layout = () => {

  const { counter, increment } = useCounter(1);

  const { data } = useFetch( `https://www.breakingbadapi.com/api/quotes/${ counter } `);
  
  const { quote } = !!data && data[0] // !!data = falso , !data = true, data = null
  // console.log(author, quote);

  const pTag = useRef();
  const [boxSize, setBoxsize] = useState({})

  useLayoutEffect ( () => {
    console.log( pTag.current.getBoundingClientRec() );
  },[ quote ]) //arreglo de dependencia


  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr/>

      <blockquote className="blockquote text-center">
        <p 
          className="mb-4"
          ref={ pTag }
        > 
        { quote } 
        </p>
      </blockquote>

      <pre>
        { JSON.stringify( boxSize, null, 3)}
      </pre>


      <button 
        className='btn btn-primary'
        onClick={ increment }
      >
        Siguiente frase
      </button>

    </div>
  )
}
