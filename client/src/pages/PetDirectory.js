import React, { useEffect, useState } from "react";
import axios from "axios";

const PetDirectory = () => {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");
  const [petType, setPetType] = useState("");
  const [breed, setBreed] = useState("");

  useEffect(() => {
    const fetchPets = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/pets`
        );
        setPets(response.data);
      } catch (error) {
        console.error("Error fetching pets", error);
      }
    };
    fetchPets();
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handlePetTypeChange = (e) => {
    setPetType(e.target.value);
  };

  const handleBreedChange = (e) => {
    setBreed(e.target.value);
  };

  const filteredPets = pets.filter((pet) => {
    const name = pet.name ? pet.name.toLowerCase() : "";
    const type = pet.petType ? pet.petType.toLowerCase() : "";
    const breed = pet.breed ? pet.breed.toLowerCase() : "";
    return (
      name.includes(search.toLowerCase()) &&
      type.includes(petType.toLowerCase()) &&
      breed.includes(breed.toLowerCase())
    );
  });

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">
        Pet Directory
      </h2>
      <div className="mb-4 flex justify-center space-x-4">
        <input
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearchChange}
          className="px-4 py-2 border rounded shadow"
        />
        <input
          type="text"
          placeholder="Filter by pet type"
          value={petType}
          onChange={handlePetTypeChange}
          className="px-4 py-2 border rounded shadow"
        />
        <input
          type="text"
          placeholder="Filter by breed"
          value={breed}
          onChange={handleBreedChange}
          className="px-4 py-2 border rounded shadow"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPets.map((pet) => (
          <div key={pet._id} className="grid-item">
            <h3 className="text-xl font-bold mb-2 text-blue-700">{pet.name}</h3>
            {pet.files &&
              pet.files.slice(0, 1).map((file, index) => {
                const filePath = `http://localhost:5000/${file}`;
                console.log("Image/Video path:", filePath);
                return file.endsWith(".mp4") ? (
                  <video
                    key={index}
                    src={filePath}
                    controls
                    className="img-container w-full h-48 object-cover"
                  />
                ) : (
                  <img
                    key={index}
                    src={filePath}
                    alt={pet.name}
                    className="img-container w-full h-48 object-cover"
                  />
                );
              })}
            <p className="mb-1 text-gray-700">
              <strong>Type:</strong> {pet.petType}
            </p>
            <p className="mb-1 text-gray-700">
              <strong>Breed:</strong> {pet.breed}
            </p>
            <p className="mb-1 text-gray-700">
              <strong>Location:</strong> {pet.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetDirectory;
