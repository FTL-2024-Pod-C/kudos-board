const cardModel = require('../Models/CardModel.js');

const getAllCards = async (req, res) => {
    try {
      const cards = await cardModel.getAllCards();
      res.status(200).json(cards);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const getCardById = async (req, res) => {
    try {
        const card = await cardModel.getCardById(req.params.id);
        if (card) {
            res.status(200).json(card);
        } 
        else {
            res.status(404).json({ error: "Card not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createCard = async (req, res) => {
    try {
        const newCard = await cardModel.createCard(req.body);
        res.status(201).json(newCard);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const updateCard = async (req, res) => {
    try {
        const updateCard = await cardModel.updateCard(req.params.id, req.body);
        if (updateCard) {
            res.status(200).json(updateCard);
        }
        else {
            res.status(404).json({ error: "Card not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteCard = async (req, res) => {
    try {
        const deleteCard = await cardModel.deleteCard(req.params.id);
        if (deleteCard) {
            res.status(200).json(deleteCard);
        }
        else {
            res.status(404).json({ error: "Card not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getCardsByBoardId = async (req, res) => {
    try {
        const cards = await cardModel.getCardsByBoardId(req.params.board_id);
        if (cards) {
            res.status(200).json(cards);
        }
        else {
            res.status(404).json({ error: "Cards not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {
    getAllCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard,
    getCardsByBoardId
};