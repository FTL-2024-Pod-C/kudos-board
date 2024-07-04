import React, { useState } from 'react';
import GIFCard from '../GIFCard/GIFCard'
import './Card.css'

const Card = (props) => {
  const [upvoteCount, setUpvoteCount] = useState(0);

  const handleUpvote = () => {
    setUpvoteCount(prevCount => (prevCount === 0 ? 1 : 0));
  };

  return (
    <>
      <div className="cardContainer">
        <h2 id="cardTitle">{props.title}</h2>
        <GIFCard id = "gifCard" imageSrc={props.card.gif}/>
        {/* <img src={props.img} alt={props.title} /> */}
        <h3>{props.description}</h3>
        <h4>By: {props.author}</h4>
        <button onClick={handleUpvote}>Upvote: {upvoteCount}</button>
        <button onClick={() => props.deleteCard(props.card.card_id)}>Delete</button>
      </div>
    </>
  );
};

export default Card;