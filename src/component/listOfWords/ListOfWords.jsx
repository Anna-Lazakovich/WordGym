import './ListOfWords.module.css';
import React from 'react';
import WordInfo from '../wordInfo/WordInfo'
import wordsData from '../words.json';
const englishWords = wordsData.englishWords;

function ListOfWords() {
    return (
      <div className='container'>
        {englishWords.map((props) => 
        <WordInfo key={props.id} {...props} />)}
      </div>
    );
  }
  
  export default ListOfWords;