import React from 'react'

const Card = (props) => {
  return (
    <>
    <div>
        {/* <img src={props.img} alt={props.title} /> */}
        <h2 id="cardTitle">{props.title}</h2>
        <h3>{props.description}</h3>
    </div>
    </>
  )
}

export default Card
