const mongoose = require("mongoose");

const petSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 200 },
  birthdate: { type: String, required: true, maxlength: 200 },
  homeLocation: { type: String, required: true, maxlength: 200 },
  height: { type: String, required: true, maxlength: 200 },
  weight: { type: String, required: true, maxlength: 200 },
  coatColor: { type: String, required: true, maxlength: 200 },
  eyeColor: { type: String, required: true, maxlength: 200 },
  favoriteFood: { type: String, required: true, maxlength: 200 },
  favoriteToy: { type: String, required: true, maxlength: 200 },
  bio: { type: String, required: true, maxlength: 200 },
  photos: [String], // Array of photo URLs
  videos: [String], // Array of video URLs
});

module.exports = mongoose.model("Pet", petSchema);
