const express = require("express");
const {
  getPets,
  getPetById,
  createPet,
} = require("../controllers/petController");

const router = express.Router();

router.get("/", getPets);
router.get("/:id", getPetById);
router.post("/", createPet);

module.exports = router;
