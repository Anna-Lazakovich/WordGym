import './ListOfWords.module.css';
import React from 'react';
import WordInfo from '../wordInfo/WordInfo'
import words from '../words.json';

function ListOfWords() {
    return (
      <div className='container'>
        {words.map((props) => 
        <WordInfo key={props.id} {...props} />)}
      </div>
    );
  }
  
  export default ListOfWords;