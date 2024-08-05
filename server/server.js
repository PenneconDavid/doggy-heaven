const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads"))); // Serve static files from uploads

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const petSchema = new mongoose.Schema({
  name: String,
  birthDate: String,
  petType: String,
  breed: String,
  location: String,
  height: String,
  weight: String,
  coatColor: String,
  eyeColor: String,
  favoriteFood: String,
  favoriteToy: String,
  bio: String,
  files: [String],
});

const Pet = mongoose.model("Pet", petSchema);

// Fetch all pets
app.get("/api/pets", async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

app.post("/api/pets", upload.array("files"), async (req, res) => {
  try {
    const filePaths = req.files.map((file) => file.path.replace(/\\/g, "/"));
    const petData = {
      ...req.body,
      files: filePaths,
    };
    const pet = new Pet(petData);
    await pet.save();
    res.status(201).json(pet);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server running on port ${process.env.PORT || 5000}`);
  mongoose.connection.once("open", () => {
    console.log("MongoDB connected");
  });
});
