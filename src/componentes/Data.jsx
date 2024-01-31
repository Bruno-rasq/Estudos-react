import React from 'react';

export default function Data(props){
  const n1 = 3
  const n2 = 4
  
  return(
    <section>
      <p>nome: {props.nome}</p>
      <p>idade: {props.idade}</p>
      <p>pais: {props.pais}</p>
      <p>
        {'func soma de ' + n1 + ' + ' + n2 + ' = ' + props.soma(n1, n2)}
      </p>

    </section>
  )
}