import React, { useState } from 'react';
import './CardModal.css'
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import GIFCard from '../GIFCard/GIFCard'
import axios from "axios";

const CardModal = ({createNewCard, closeCardModal }) => {

    // ADD GIPHY STUFF
    
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [description, setDescription] = useState('');
    const [gifSearch, setGifSearch] = useState("");
    const [gifArray, setGifArray] = useState([]);
    const [chosenGif, setChosenGif] = useState("");
    const [showGifs, setShowGifs] = useState(false);



    const addCard = () => {
        if (title && author && description) {
            createNewCard({title, author, description, gif: chosenGif});
            setTitle('');
            setAuthor('');
            setDescription('');
            setGifSearch("");
            closeCardModal();
        } 
        else {
            alert("Please fill out all fields");
        }
    };

    const fetchSearch = async () => {
        console.log("in fetchSearch");
        const apiKey = import.meta.env.VITE_API_KEY;
        let searchUrl = `http://api.giphy.com/v1/gifs/search?q=${gifSearch}&api_key=${apiKey}`;
        const response = await axios.get(searchUrl);
        console.log(response.data);
        setGifArray(response.data.data);
    }

    const handleClick = (gif) => {
        setChosenGif(gif);
        setShowGifs(false);
    }
    
    console.log(gifArray);
  return (
    <>
    <div className="card-modal">
        <div className="card-modal-content" onClick={(e) => e.stopPropagation()}>

            <div className='card-modal-header'>
            <IconButton aria-label="close" onClick={closeCardModal}>
                    <CloseIcon />
                </IconButton>
            </div>

            <div className="card-modal-body">
                <h2>Create a New Card</h2>
                <form>
                    <label>Title: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
                    <label>Description: </label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <label>Search GIF's: </label>
                    <input type="text" value={gifSearch} onChange={(e) => setGifSearch(e.target.value)}/>
                    {showGifs && (<div>
                        {gifArray?.map((gif, index) => (
                            <GIFCard
                                key={index}
                                imageSrc={gif.images.original.url}
                                handleClick={() => handleClick(gif.images.original.url)}

                            />
                            // <img key={index} src={gif.url}/>
                        ))}
                    </div>)}
                    <button onClick={(e) => {
                        e.preventDefault();
                        fetchSearch()
                        setShowGifs(true);
                        }}>Search</button>
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