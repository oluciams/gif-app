import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifApp = () => {

  const [categories, setCategories] = useState([ 'One Punch', 'Dragon Ball' ]);

  const onAddCategory = ( newCategory ) => { 
    setCategories([...categories, newCategory]);
  }

  return (
    <>
      <h1>GifApp</h1>
      <AddCategory     
        onNewCategory={ onAddCategory }
      />   
      <ol>
        { categories.map( category => {
          return <li key={ category }>{category}</li>
        } ) }
        
      </ol>
    </>
  )
}
