import React from 'react';

export default function Data(props){
  return(
    <section>
      <p>nome: {props.nome}</p>
      <p>idade: {props.idade}</p>
      <p>pais: {props.pais}</p>
    </section>
  )
}