import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const PetDetails = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/pets/${id}`
        );
        setPet(response.data);
      } catch (error) {
        console.error("Error fetching pet details", error);
      }
    };
    fetchPet();
  }, [id]);

  if (!pet) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">
          {pet.name}
        </h2>
        {pet.files &&
          pet.files.map((file, index) =>
            file.endsWith(".mp4") ? (
              <video
                key={index}
                src={`http://localhost:5000/${file}`}
                controls
                className="img-container w-full h-48 object-cover"
              />
            ) : (
              <img
                key={index}
                src={`http://localhost:5000/${file}`}
                alt={pet.name}
                className="img-container w-full h-48 object-cover"
              />
            )
          )}
        <p className="mb-1 text-gray-700">
          <strong>Type:</strong> {pet.petType}
        </p>
        <p className="mb-1 text-gray-700">
          <strong>Breed:</strong> {pet.breed}
        </p>
        <p className="mb-1 text-gray-700">
          <strong>Location:</strong> {pet.location}
        </p>
        <p className="mb-1 text-gray-700">
          <strong>Height:</strong> {pet.height}
        </p>
        <p className="mb-1 text-gray-700">
          <strong>Weight:</strong> {pet.weight}
        </p>
        <p className="mb-1 text-gray-700">
          <strong>Coat Color:</strong> {pet.coatColor}
        </p>
        <p className="mb-1 text-gray-700">
          <strong>Eye Color:</strong> {pet.eyeColor}
        </p>
        <p className="mb-1 text-gray-700">
          <strong>Favorite Food:</strong> {pet.favoriteFood}
        </p>
        <p className="mb-1 text-gray-700">
          <strong>Favorite Toy:</strong> {pet.favoriteToy}
        </p>
        <p className="mb-4 text-gray-700">
          <strong>Bio:</strong> {pet.bio}
        </p>
      </div>
    </div>
  );
};

export default PetDetails;
