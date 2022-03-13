import React from 'react';

import classes from './CardDeck.module.css'
import Card from './Card';

const CardDeck = (props) => {
  
  
  return (
    <div className={classes.cardsContainer}>
      {props.cards.map((card) => (
        <Card key={card.id} 
        image={card.picture}
        workoutname={card.workoutName}
        recrepset={card.repSet}/>
      ))}

    </div>
  );
};

export default CardDeck;