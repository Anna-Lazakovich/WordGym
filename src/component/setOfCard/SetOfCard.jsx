import style from './SetOfCard.module.css';
import React from 'react';
import Card from '../card/Card'
import words from '../words.json';

function SetOfCard() {
    return (
      <div className={style.container}>
        {words.map((props) => 
        <Card key={props.id} {...props} />)}
      </div>
    );
  }

  export default SetOfCard;