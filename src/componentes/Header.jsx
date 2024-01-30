import React from 'react';
import img from './imgs/img01.jpg';

export default function Header(){

  return(
    <header>
      <img src= { img }/>
      <h1>Header</h1>
    </header>
  )
}