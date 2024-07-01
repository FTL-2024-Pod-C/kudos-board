const express = require("express");
const router = express.Router();
const boardController = require("../Controllers/BoardController");

router.get("/", boardController.getAllBoards);

router.get("/:id", boardController.getBoardById);

router.post("/", boardController.createBoard);
router.post("/:board_id/cards", boardController.addCardToBoard);

router.put("/:id", boardController.updateBoard);

router.delete("/:id", boardController.deleteBoard);
router.delete("/:board_id/cards/:card_id", boardController.deleteCardFromBoard);

module.exports = router;