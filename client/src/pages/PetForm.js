import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const PetForm = () => {
  const [petData, setPetData] = useState({
    name: "",
    birthDate: "",
    petType: "",
    breed: "",
    location: "",
    height: "",
    weight: "",
    coatColor: "",
    eyeColor: "",
    favoriteFood: "",
    favoriteToy: "",
    bio: "",
  });
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
    setPreview(selectedFiles.map((file) => URL.createObjectURL(file)));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in petData) {
      formData.append(key, petData[key]);
    }
    files.forEach((file) => {
      formData.append("files", file);
    });
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/pets`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      navigate("/pet-directory");
    } catch (error) {
      console.error("Error uploading pet data", error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold text-center mb-4 text-blue-700">
        Add a Pet
      </h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow p-6 max-w-3xl mx-auto"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {Object.keys(petData).map(
            (key) =>
              key !== "bio" && (
                <div className="relative" key={key}>
                  <input
                    type={key === "birthDate" ? "date" : "text"}
                    name={key}
                    value={petData[key]}
                    onChange={handleChange}
                    placeholder=" "
                    className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  />
                  <label className="form-label absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
                    {key.charAt(0).toUpperCase() +
                      key.slice(1).replace(/([A-Z])/g, " $1")}
                  </label>
                </div>
              )
          )}
        </div>
        <div className="relative mb-4">
          <textarea
            name="bio"
            value={petData.bio}
            onChange={handleChange}
            placeholder=" "
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          ></textarea>
          <label className="form-label absolute text-sm text-gray-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 left-1">
            Bio
          </label>
        </div>
        <input
          type="file"
          name="files"
          onChange={handleFileChange}
          multiple
          className="w-full px-4 py-2 border rounded shadow mb-4"
        />
        <div className="flex flex-wrap mb-4">
          {preview.map((src, index) => (
            <img
              key={index}
              src={src}
              alt="Preview"
              className="img-container w-32 h-32 object-cover m-2"
            />
          ))}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-700"
        >
          Add Pet
        </button>
      </form>
    </div>
  );
};

export default PetForm;
