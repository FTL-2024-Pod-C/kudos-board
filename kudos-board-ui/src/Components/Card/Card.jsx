import React from 'react'

const Card = (props) => {
  return (
    <>
    <div>
        {/* <img src={props.img} alt={props.title} /> */}
        <h2 id="cardTitle">{props.title}</h2>
        <h3>{props.description}</h3>
        <h4>{props.author}</h4>
        <button>Upvote:</button>
        <button onClick={() => props.deleteCard(props.card.card_id)}>Delete</button>
    </div>
    </>
  )
}

export default Card
