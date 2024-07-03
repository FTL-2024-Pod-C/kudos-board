import React, { useState } from 'react';
import './Modal.css'
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

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
                <IconButton aria-label="close" onClick={closeModal}>
                    <CloseIcon />
                </IconButton>
            </div>

            <div className="modal-body">
                <h2>Create a New Board</h2>
                <form>
                <TextField 
                    id="outlined-basic" 
                    type="text" 
                    value={title}
                    label="Title" 
                    variant="outlined"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextField
                    id="category"
                    type="text" 
                    value={category}
                    select
                    label="Category"
                    onChange={(e) => setCategory(e.target.value)} 
                >
                    <MenuItem value="">Choose One</MenuItem>
                    <MenuItem value="celebration">Celebration</MenuItem>
                    <MenuItem value="thank you">Thank You</MenuItem>
                    <MenuItem value="inspiration">Inspiration</MenuItem>
                </TextField>

                <TextField 
                    id="outlined-basic"
                    type="text" 
                    value={description}
                    label="Description" 
                    variant="outlined"
                    onChange={(e) => setDescription(e.target.value)} 
                />
               
                <TextField 
                id="outlined-basic" 
                type="text" 
                value={author}
                label="Author" 
                variant="outlined"
                onChange={(e) => setAuthor(e.target.value)}
                />
                </form>
                <Button 
                    variant="contained"
                    onClick={addBoard}>
                    Create
                </Button>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default Modal
