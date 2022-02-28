import React from 'react'
import { useForm } from '../../hooks/useForm';

export const TodoAdd = ( { handleAddTodo } ) => {

  const [ { desciption }, handleInputChange, reset ] = useForm ({
    desciption: ''
  });

  const handleSubmit = (e) =>{
    e.preventDefault();

    if ( desciption.trim().length <= 1 ){
      return;
    }

    const newTodo = {
      id: new Date().getTime(),
      desc: desciption,
      done: false
    };

    handleAddTodo( newTodo );
    reset();

  }

  return (
    <div>
      <h4>Agregar TODO</h4>
          <hr />

          <form className='d-grid gap-2' onSubmit={ handleSubmit }>
            <input
              type="text"
              name="desciption"
              className='form-control'
              placeholder='Aprender ...'
              autoComplete='off'
              value={ desciption }
              onChange= { handleInputChange }
            />

            <button
            type='submit'
              className='btn btn-outline-primary mt-1 '
            >
              Agregar
            </button>
          </form>
    </div>
  )
}
