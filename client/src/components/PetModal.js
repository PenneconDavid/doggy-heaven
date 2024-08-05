import React from "react";

const PetModal = ({ pet, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto">
        <button onClick={onClose} className="text-gray-700 hover:text-gray-900">
          Close
        </button>
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
                className="w-full h-48 object-cover mb-4"
              />
            ) : (
              <img
                key={index}
                src={`http://localhost:5000/${file}`}
                alt={pet.name}
                className="w-full h-48 object-cover mb-4"
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
        {/* Comment Section */}
        <div className="mt-4">
          <h3 className="text-xl font-bold mb-2 text-blue-700">Comments</h3>
          {/* Placeholder for comment section */}
        </div>
      </div>
    </div>
  );
};

export default PetModal;
