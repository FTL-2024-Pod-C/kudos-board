import React from 'react'
import "./BoardCard.css"

const BoardCard = (props) => {

return (
    <>
        <div className="card">
            <img src={props.img} alt={props.title} />
            <h2 id="boardTitle">{props.title}</h2>
            <div className="boardBtn">
                <button>View Board</button>
                <button onClick={() => props.deleteBoard(props.board.id)}>Delete Board</button>
            </div>
        </div>
    </>
    )
}

export default BoardCard;