import React, { useState } from 'react';
import './Modal.css'

const Modal = ({createNewBoard, closeModal }) => {

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');

    const addBoard = () => {
        if (title && category && author && description) {
            createNewBoard({title, category, author, description, image: "image" });
            setTitle('');
            setCategory('');
            setAuthor('');
            setDescription('');
            closeModal();
        } 
        else {
            alert("Please fill out all fields");
        }
    };

  return (
    <>
    <div className="modal">
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <div className='modal-header'>
                <button onClick={closeModal}>X</button>
            </div>

            <div className="modal-body">
                <h2>Create a New Board</h2>
                <form>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <label>Category: </label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Choose One</option>
                        <option value="celebration">Celebration</option>
                        <option value="thank you">Thank You</option>
                        <option value="inspiration">Inspiration</option>
                    </select>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <label>Author: </label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </form>
                <button onClick={addBoard}>Create</button>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Modal
