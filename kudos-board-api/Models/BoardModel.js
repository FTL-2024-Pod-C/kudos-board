const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all the boards or gets the boards by a specific category
const getAllBoards = async (filter = {}, orderBy = {}) => {
    return prisma.board.findMany({
        where: filter,
        orderBy: orderBy,
        include:{
            cards: true
        }
    });
};


const getBoardById = async (id) => {
    return prisma.board.findUnique({
        where: {id: parseInt(id)},
        include:{
            order_items: true
        }
    });
};

const createBoard = async (boardData) => {
    return prisma.board.create({
        data: boardData 
    });
};

const updateBoard = async (id, boardData) => {
    return prisma.board.update({
        where: {id: parseInt(id)},
        data: boardData
    });
};

const deleteBoard = async (id) => {
    return prisma.board.delete({
        where: {id: parseInt(id)}
    });
};

module.exports = {
    getAllBoards,
    getBoardById,
    createBoard,
    updateBoard,
    deleteBoard
};