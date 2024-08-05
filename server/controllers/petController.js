const Pet = require("../models/Pet");

// Get all pets
const getPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single pet by ID
const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ message: "Pet not found" });
    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new pet
const createPet = async (req, res) => {
  const {
    name,
    birthdate,
    homeLocation,
    height,
    weight,
    coatColor,
    eyeColor,
    favoriteFood,
    favoriteToy,
    bio,
    photos,
    videos,
  } = req.body;
  const newPet = new Pet({
    name,
    birthdate,
    homeLocation,
    height,
    weight,
    coatColor,
    eyeColor,
    favoriteFood,
    favoriteToy,
    bio,
    photos,
    videos,
  });
  try {
    const savedPet = await newPet.save();
    res.status(201).json(savedPet);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { getPets, getPetById, createPet };
