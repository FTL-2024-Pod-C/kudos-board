import React from 'react'
import { Link } from 'react-router-dom';
import "./BoardCard.css"

const BoardCard = (props) => {

return (
    <>
   
        <div className="card">
            <img src={props.img} alt={props.title} />
            <h2 id="boardTitle">{props.title}</h2>
            <div className="boardBtn">
            <Link to={`/board/${props.board.id}`}>
                <button>View Board</button>
            </Link>
            <button onClick={() => props.deleteBoard(props.board.id)}>Delete Board</button>
            </div>
        </div>
   
    </>
    )
}

export default BoardCard;