import React from 'react'
import "./BoardCard.css"

const BoardCard = (props) => {
    return (
    <>
        <div className="card">
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
        </div>
    </>
    )
}

export default BoardCard