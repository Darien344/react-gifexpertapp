import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp = () => {
  

  const [categoria, setCategoria] = useState(['One Punch']); 

  return (
    <>
        <h2>GifExpertApp</h2>
        <AddCategory setCategoria={setCategoria}/>
         
        <hr/>


        <ol>
            {
              categoria.map(categoria => 
                <GifGrid key={categoria} category={categoria}/>
              )

            }
        </ol>
    </>
  )
}
