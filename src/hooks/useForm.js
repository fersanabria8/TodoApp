import { useState } from "react"


// Este es un CustomHook que se va a encargar de manejar mis Formularios
export const useForm = ( initialState = {} ) => {

  const [values, setValues] = useState( initialState )

  const reset = () => {
    setValues( initialState );
  }

  const handleInputChange = ( {target} ) => {

    setValues({
      ...values,
      [ target.name ]: target.value
    });

  }

  return [ values, handleInputChange, reset ];

}
