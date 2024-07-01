const boardModel = require('../Models/BoardModel.js');

const getAllBoards = async (req, res) => {
    // let {category, sort, order} = req.query;
    let {category} = req.query;
    let filter = {};
    // let orderBy = {};

    if (category) {
      filter.category = category;
    }

    // if (!order) {
    //   order = 'desc';
    // }

    // if (sort === 'price') {
    //   orderBy = {price: order};
    // }

    // if (sort === 'name') {
    //   orderBy = {name: order};
    // }
  
    try {
    //   const boards = await boardModel.getAllBoards(filter, orderBy);
      const boards = await boardModel.getAllBoards(filter);
      res.status(200).json(boards);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const getBoardById = async (req, res) => {
    try {
        const board = await boardModel.getBoardById(req.params.id);
        if (board) {
            res.status(200).json(board);
        } 
        else {
            res.status(404).json({ error: "Board not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createBoard = async (req, res) => {
    try {
        const newBoard = await boardModel.createBoard(req.body);
        res.status(201).json(newBoard);
    } 
    catch (error) {
      res.status(400).json({ error: error.message });
    }
};

const updateBoard = async (req, res) => {
    try {
        const updateBoard = await boardModel.updateBoard(req.params.id, req.body);
        if (updateBoard) {
            res.status(200).json(updateBoard);
        }
        else {
            res.status(404).json({ error: "Board not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteBoard = async (req, res) => {
    try {
        const deleteBoard = await boardModel.deleteBoard(req.params.id);
        if (deleteBoard) {
            res.status(200).json(deleteBoard);
        }
        else {
            res.status(404).json({ error: "Board not found" });
        }
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const addCardToBoard = async (req, res) => {
    try {
      const card = await boardModel.addCardToBoard(req.params.board_id, req.body);
      res.json(card);
    } 
    catch (error) {
      console.error("Error adding card to board:", error);
      res.status(500).json({ error: "Internal server error" });
    }
};

const deleteCardFromBoard = async (req, res) => {
    try {
      const card = await boardModel.deleteCardFromBoard(req.params.board_id, req.params.card_id);
      res.json(card);
    } 
    catch (error) {
      console.error("Error deleting card from board:", error);
      res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    getAllBoards,
    getBoardById,
    createBoard,
    updateBoard,
    deleteBoard,
    addCardToBoard,
    deleteCardFromBoard
};