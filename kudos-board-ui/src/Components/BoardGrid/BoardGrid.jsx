import React from 'react'
import BoardCard from '../BoardCard/BoardCard'

const BoardGrid = ({boards}) => {
  console.log(boards);
  return (
        <>
         <div className="board-grid">
            {boards?.map((board) => (
              <BoardCard 
                key={board.id}
                title={board.title} 
                img="https://picsum.photos/200/300" // those nums are for sizing we can change to desried size!!!
              />
            ))}
         </div>
        </>
  )
}

export default BoardGrid;

