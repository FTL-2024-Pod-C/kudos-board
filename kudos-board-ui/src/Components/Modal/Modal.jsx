import React from 'react'
import './Modal.css'

const Modal = ({ closeModal }) => {
  return (
    <>
    <div className="modal">
        <div className="modal-content">
            
            <div className='modal-header'>
                <button onClick={closeModal}>X</button>
            </div>

            <div className="modal-body">
                <h2>Create a New Board</h2>
                <form>
                    <label>Title: </label>
                    <input type="text"/>
                    <label>Category: </label>
                    <select id="category">
                        <option value="">Choose One</option>
                        <option value="celebration">Celebration</option>
                        <option value="thank-you">Thank You</option>
                        <option value="inspiration">Inspiration</option>
                    </select>
                    <label>Author: </label>
                    <input type="text"/>
                </form>
                <button>Create</button>
            </div>
        

        
        </div>
    </div>
    </>
  )
}

export default Modal
