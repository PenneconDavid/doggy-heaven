import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PetDirectory from "./pages/PetDirectory";
import PetForm from "./pages/PetForm";
import PetDetails from "./pages/PetDetails";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pet-directory" element={<PetDirectory />} />
            <Route path="/add-pet" element={<PetForm />} />
            <Route path="/pet-details/:id" element={<PetDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
