import React, { memo } from 'react';
// es para memorizar algo, si las propetys cambia entonces va a volver a memorizar, caso contrario usa la opcion memorizada cuando tenga que dibujar algo.
export const Small = memo(( { value }) => {

  console.log('me volvi a llamar :(')

  return (
    <small> { value } </small>
  )
}
)
