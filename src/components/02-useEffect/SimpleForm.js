import React, { useEffect, useState } from 'react';
import './effects.css'
import { Message } from './Message';


export const SimpleForm = () => {

  //useEffect es un hook que nos permite ejecutar un efecto secundario cuando suceda algo con nuestros componentes

  //creamos un formState
  const [formState, setFormState] = useState({ 
    name: '',
    email: ''
  });

  //desestructuramos nuestro formState
  const { name, email } = formState;

  useEffect( () => {
    // console.log('hey')
  },[]); // Ponemos el arreglo [] de dependecia como segundo argumento para que se cargue una sola vez, ejemplo cuando mandamos Enviar un Formulario.

  // Si nosotros queremos ejecuatar algo cada vez que el formulario cambia, React recomienda hacer otro useEffect, cuya dependecia a nosotros nos interese estar escuchando EJ: [formState]

  useEffect( () => {
    console.log('formState cambio')
  },[formState]);

  // En este caso vemos que cambia email cuando cargamos input email
  useEffect( () => {
    console.log('email cambio')
  },[email]);


  const handleInputChange = ({ target }) => {
  
// llamo al setFormState
    setFormState({
      ...formState,
      [ target.name ]: target.value
    });
  }


  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className='form.group'>
        <input 
          type="text"
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={ name }
          onChange={ handleInputChange }
        />
      </div>

      <div className='form.group'>
        <input 
          type="text"
          name='email'
          className='form-control'
          placeholder='email@gmail.com'
          autoComplete='off'
          value={ email }
          onChange={ handleInputChange }
        />
      </div>

      { name === '123' && <Message />}

    </>
  )
}
