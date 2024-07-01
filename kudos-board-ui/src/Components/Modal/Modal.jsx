import React, { useState } from 'react';
import './Modal.css'

const Modal = ({ closeModal }) => {

const [cards, setCards] = useState([]);
const [cardContent, setCardContent] = useState('');
const [category, setCategory] = useState('');
const [author, setAuthor] = useState('');

const addCard = () => {
    if (cardContent && category && author) {
        setCards([...cards, { content: cardContent, category, author }]);
        setCardContent('');
        setCategory('');
        setAuthor('');
    } else {
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
                    <input type="text" value={cardContent} onChange={(e) => setCardContent(e.target.value)}/>
                    <label>Category: </label>
                    <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Choose One</option>
                        <option value="celebration">Celebration</option>
                        <option value="thank-you">Thank You</option>
                        <option value="inspiration">Inspiration</option>
                    </select>
                    <label>Author: </label>
                    <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}/>
                </form>
                <button onClick={addCard}>Create</button>
            </div>

            {cards.map((card, index) => (
                <div key={index} className="card">
                    <h4>{card.content}</h4>
                    <p>Category: {card.category}</p>
                    <p>Author: {card.author}</p>
                </div>
            ))}
            
        </div>
    </div>
    </>
  )
}

export default Modal
