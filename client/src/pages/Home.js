import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-200">
      <h1 className="text-6xl font-bold mb-8">Doggy Heaven</h1>
      <div className="flex space-x-4">
        <Link
          to="/pet-directory"
          className="px-4 py-2 bg-white text-blue-500 rounded shadow hover:bg-blue-50"
        >
          View Pet Directory
        </Link>
        <Link
          to="/add-pet"
          className="px-4 py-2 bg-white text-blue-500 rounded shadow hover:bg-blue-50"
        >
          Add a Pet
        </Link>
      </div>
    </div>
  );
};

export default Home;
