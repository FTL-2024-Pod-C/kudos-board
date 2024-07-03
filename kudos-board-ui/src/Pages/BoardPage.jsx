import React from 'react'
import { Link, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';
import axios from "axios";
import CardGrid from '../Components/CardGrid/CardGrid'

const DEV_BASE_URL = "http://localhost:3000"

const BoardPage = () => {
  const {id} = useParams();
  const [cards, setCards] = useState([]);
  const [board, setBoard] = useState([]);

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
  
  return (
    <>
    <div>
        <h1>Board Page</h1>
        <Link to="/">
            <button>Back</button>
        </Link>
        <CardGrid cards={cards}/>
    </div>
    
    </>
  )
}

export default BoardPage