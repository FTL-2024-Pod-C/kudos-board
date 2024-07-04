import React from 'react'
import { Link } from 'react-router-dom';
import "./BoardCard.css"

const BoardCard = (props) => {

return (
    <>
   
        <div className="card">
            <h2 id="boardTitle">{props.title}</h2>
            <img src={props.img} alt={props.title} />
            <div className="card-content">
            <div className="boardBtn">
            <Link to={`/board/${props.board.id}`}>
                <button>View Board</button>
            </Link>
            <button onClick={() => props.deleteBoard(props.board.id)}>Delete Board</button>
            </div>
            </div>
        </div>
   
    </>
    )
}

export default BoardCard;