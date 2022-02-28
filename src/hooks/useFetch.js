import { useEffect, useRef, useState } from "react"



export const useFetch = ( url ) => {


  const isMounted = useRef(true); // useRef para mantener la referencia del valor, es decir que no renderice de nuevo.
  const [state, setState] = useState( { data: null, loading: true, error: null });

  useEffect(() => {

    return () => {
      isMounted.current = false
    }

  },[])

  useEffect( () => {

    setState({ data: null, loading: true, error: null });

    fetch(url)
    .then( resp => resp.json())
    .then( data => {
      // setTimeout( () => {
        
        if ( isMounted.current) {
          setState({
            loading:false,
            error:null,
            data
          });
        } 

      // }, 1000);



      }) 
    },[url] );
    
    return state;

};
