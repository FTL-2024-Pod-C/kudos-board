import React from 'react'
import Card from '../Card/Card'

const CardGrid = ({cards}) => {
  return (
        <>
         <div className="card-grid">
            {cards?.map((card) => (
              <Card
                key={card.card_id}
                title={card.title}
                author={card.author}
                description={card.description}
                card={card}
              />
            ))}
         </div>
        </>
  )
}

export default CardGrid;