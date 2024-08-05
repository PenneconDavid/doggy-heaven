import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PetDirectory from "./pages/PetDirectory";
import PetDetails from "./pages/PetDetails";
import PetForm from "./pages/PetForm";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./styles/tailwind.css";
// import './App.css'; // Comment this out if not needed

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pet-directory" element={<PetDirectory />} />
          <Route path="/pets/:id" element={<PetDetails />} />
          <Route path="/add-pet" element={<PetForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
