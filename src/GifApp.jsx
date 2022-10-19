import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

  const [categories, setCategories] = useState([ 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => { 
    if( categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]);
  }

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory     
        onNewCategory={ onAddCategory }
      />   
      { 
        categories.map( (category) => ( 
          <GifGrid
            key={ category }
            category={ category }
          /> 
        ))
      }      
      
    </>
  )
}
