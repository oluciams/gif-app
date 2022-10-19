import React, { useState } from 'react';

export const AddCategory = () => {

  const [inputValue, setInputValue] = useState('one Punch');

  const onInputChange = (e) => {  
    setInputValue(e.target.value);
  }

  //se puede destructurar el evento
  // const onInputChange = ({target}) => {    
  //   setInputValue(target.value)
  // }

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);

  }

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        placeholder="Buscar gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  )
}
