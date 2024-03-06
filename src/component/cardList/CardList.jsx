import './CardList.css';
import React from 'react';
import Card from '../card/Card'

function CardList(props) {
    return (
      <div>
        <Card title='make' description='делать' />
        <Card title='meet' description='встречать' />
        <Card title='cut' description='резать' />
      </div>
    );
  }
  
  export default CardList;