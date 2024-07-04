import React from 'react'
import BoardCard from '../BoardCard/BoardCard'
import "./BoardGrid.css"

const BoardGrid = ({boards, deleteBoard}) => {
  console.log(boards);
  return (
        <>
         <div className="board-grid">
            {boards?.map((board) => (
              <BoardCard 
                key={board.id}
                title={board.title} 
                img={`https://picsum.photos/200/300?random=${board.id}-${Math.floor(Math.random() * 1000)}`} // those nums are for sizing we can change to desried size!!!
                deleteBoard={deleteBoard}
                board={board}
              />
            ))}
         </div>
        </>
  )
}

export default BoardGrid;

