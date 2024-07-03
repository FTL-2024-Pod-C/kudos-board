import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";
import CardGrid from '../Components/CardGrid/CardGrid';
import CardModal from '../Components/CardModal/CardModal';

const DEV_BASE_URL = "http://localhost:3000"

const BoardPage = () => {
  const {id} = useParams();
  const [cards, setCards] = useState([]);
  const [board, setBoard] = useState([]);
  const [isCardModalOpen, setIsCardModalOpen]= useState(false);

  useEffect (() => {
    fetchBoardInfo();
    fetchCardsFromBoard();
  }, []);
  
  const fetchBoardInfo = async () => {
    try {
      const url = `${DEV_BASE_URL}/boards/${id}`;
      const response = await axios.get(url);
      console.log(response.data);
      setBoard(response.data);
    }
    catch (error) {
      console.error("Error fetching board", error);
    }
  }

  const fetchCardsFromBoard = async () => {
    try {
      const url = `${DEV_BASE_URL}/cards/board/${id}`;
      const response = await axios.get(url);
      console.log(response.data);
      setCards(response.data);
    }
    catch {
      console.error("Error fetching board cards", error);
    }
  }

  const createNewCard = async (newCard) => {
    try {
      const url = `${DEV_BASE_URL}/boards/${id}/cards`;
      const response = await axios.post(url, newCard);
      console.log(response.data);
      setCards([...cards, response.data]);
    }
    catch (error) {
      console.error("Error creating a new card", error);
    }
  };

  const deleteCard = async (cardId) => {
    try {
      const url = `${DEV_BASE_URL}/boards/${id}`;
      await axios.delete(`${url}/cards/${cardId}`);
      setCards(cards.filter((card) => card.card_id !== cardId));
    }
    catch (error) {
      console.error("Error deleting a card", error);
    }
  };

  const openCardModal = () => {
    setIsCardModalOpen(true);
  };

  const closeCardModal = () => {
    setIsCardModalOpen(false);
  }
  
  return (
    <>
    <div>
        <h1>Board Page</h1>
        <Link to="/">
            <button>Back</button>
        </Link>
        <button onClick={openCardModal}>Create Card</button>
        {isCardModalOpen && <CardModal closeCardModal={closeCardModal}
                createNewCard={createNewCard}
                />}
        <CardGrid 
          cards={cards}
          deleteCard={deleteCard}
        />
    </div>
    
    </>
  )
}

export default BoardPage