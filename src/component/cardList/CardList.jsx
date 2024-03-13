import './CardList.module.css';
import React from 'react';
import Card from '../card/Card'
import words from '../words.json';

function CardList() {
    return (
      <div className='container'>
        {words.map(Card)}
      </div>
    );
  }
  
  export default CardList;