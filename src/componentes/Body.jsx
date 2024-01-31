import React from 'react';
import Data from './Data';

export default function Body(){

  const idade = 22
  const pais = 'Brasil'
  const nome = 'Bruno D.R'

  const soma = (n1, n2) => {
    return n1 + n2
  }

  const textDestaque = {
    color: 'red',
    fontSize: '20px',
    textAlign: 'center'
  }
  
  return(
    <section className='section'>
      
      <h2 
        style={textDestaque}>
        Introdução ao React
      </h2>
      
      <Data 
        nome={nome} 
        idade={idade}
        pais={pais}
        soma={soma}
      />
    </section>
  )
}