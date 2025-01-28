import React, { useEffect } from 'react'

export const Window = () => {

    useEffect(() => {
     if(!window.opener)
        window.close();
    });

    const handleInputChange=(e)=>{

        const {value}= e.currentTarget;

        window.opener.postMessage(value,"http://localhost:5173");

    }
    
  return (
   <>
   <h1>Extension</h1>
   <input type='text' onChange={handleInputChange}></input>
   </>
  )
}
