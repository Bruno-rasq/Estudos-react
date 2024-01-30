import React from 'react';
import './App.css';
import imagem1 from './componentes/imgs/img01.jpg';

export default function App(){
  
  const person = (name) => {
    return name
  }
  const idade = 22
  
  return(
    <>
      <header>
        <p>App01</p>
      </header>

      <section>
        <p>nome: { person('Bruno') }</p>
        <p>idade: { idade }</p>
      </section>
    
      <img src={imagem1}></img> 
      <img src='./public/img02.jpg'></img>
    </>
  )
}