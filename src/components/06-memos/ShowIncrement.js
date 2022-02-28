import React from 'react';
import PropTypes from 'prop-types';

export const ShowIncrement = React.memo(( {increment} ) => {

  console.log(' Me volivi a generar :( ')

  return (
    <button
      className='btn btn-primary'
      onClick={ () => {
        increment( 5 );
      }}
    >
      incrementar
    </button>
  )
})

ShowIncrement.propTypes = {
  increment: PropTypes.func.isRequired
}

