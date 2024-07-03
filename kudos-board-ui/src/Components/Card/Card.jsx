import React, { useState } from 'react';
import GIFCard from '../GIFCard/GIFCard'

const Card = (props) => {
  const [upvoteCount, setUpvoteCount] = useState(0);

  const handleUpvote = () => {
    setUpvoteCount(prevCount => (prevCount === 0 ? 1 : 0));
  };

  return (
    <>
      <div>
        <GIFCard imageSrc={props.card.gif}/>
        {/* <img src={props.img} alt={props.title} /> */}
        <h2 id="cardTitle">{props.title}</h2>
        <h3>{props.description}</h3>
        <h4>{props.author}</h4>
        <button onClick={handleUpvote}>Upvote: {upvoteCount}</button>
        <button onClick={() => props.deleteCard(props.card.card_id)}>Delete</button>
      </div>
    </>
  );
};

export default Card;