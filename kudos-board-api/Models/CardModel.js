const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// gets all the cards or gets the boards by a specific category
const getAllCards = async () => {
    return prisma.card.findMany({
        
    });
};


const getCardById = async (id) => {
    return prisma.card.findUnique({
        where: {card_id: parseInt(id)}
    });
};

const createCard = async (cardData) => {
    return prisma.card.create({
        data: cardData 
    });
};

const updateCard = async (id, cardData) => {
    return prisma.card.update({
        where: {id: parseInt(id)},
        data: cardData
    });
};

const deleteCard = async (id) => {
    return prisma.card.delete({
        where: {id: parseInt(id)}
    });
};

module.exports = {
    getAllCards,
    getCardById,
    createCard,
    updateCard,
    deleteCard
};