import React, { useState } from 'react';
import GIFCard from '../GIFCard/GIFCard'
import './Card.css'
import IconButton from '@mui/material/IconButton';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import DeleteIcon from '@mui/icons-material/Delete';

const Card = (props) => {
  const [upvoteCount, setUpvoteCount] = useState(0);

  const handleUpvote = () => {
    setUpvoteCount(prevCount => (prevCount === 0 ? 1 : 0));
  };

  return (
    <>
      <div className="cardContainer">
        <h2 id="cardTitle">{props.title}</h2>
        {/* <GIFCard id = "gifCard" imageSrc={props.card.gif}/> */}
        <img className = "gifCardImage" src={props.card.gif} alt={props.title} />
        <div className='card-stuff'>
          <h3>{props.description}</h3>
          <h4>By: {props.author}</h4>
          <div className='icons'>
          <IconButton onClick={handleUpvote}>
        <ThumbUpIcon />
          {upvoteCount}
        </IconButton>
          <IconButton onClick={() => props.deleteCard(props.card.card_id)}>
            <DeleteIcon />
          </IconButton>
          </div>
        </div>

      </div>
    </>
  );
};

export default Card;