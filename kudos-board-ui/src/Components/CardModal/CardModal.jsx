import React, { useState } from 'react';
import './CardModal.css'

const CardModal = ({createNewCard, closeCardModal }) => {

    // ADD GIPHY STUFF
    
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const addCard = () => {
        if (title && author && description) {
            createNewCard({title, author, description, gif: "image" });
            setTitle('');
            setAuthor('');
            setDescription('');
            closeCardModal();
        } 
        else {
            alert("Please fill out all fields");
        }
    };

  return (
    <>
    <div className="card-modal">
        <div className="card-modal-content" onClick={(e) => e.stopPropagation()}>

            <div className='card-modal-header'>
                <button onClick={closeCardModal}>X</button>
            </div>

            <div className="card-modal-body">
                <h2>Create a New Card</h2>
                <form>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <label>Author: </label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </form>
                <button onClick={addCard}>Create</button>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default CardModal