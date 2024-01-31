import React from 'react';
import Data from './Data';

export default function Body(){
  
  const nome = 'Bruno'
  const idade = 22
  const pais = 'Brasil'
  
  return(
    <section>
      <h2>Introdução ao React</h2>
      <Data 
        nome={nome} 
        idade={idade}
        pais={pais}
      />
    </section>
  )
}