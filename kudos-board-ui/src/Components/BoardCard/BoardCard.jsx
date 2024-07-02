import React from 'react'
import "./BoardCard.css"

const BoardCard = (props) => {

const deleteBoard = async () => {
    try {
        await axios.delete(`http://localhost:3000/boards/${boardId}`);
        navigate("/");
    } catch (error) {
        console.error("Error deleting the board:", error);
    }
};

return (
    <>
        <div className="card">
            <img src={props.img} alt={props.title} />
            <h2 id="boardTitle">{props.title}</h2>
            <div className="boardBtn">
                <button>View Board</button>
                <button>Delete Board</button>
            </div>
        </div>
    </>
    )
}

export default BoardCard