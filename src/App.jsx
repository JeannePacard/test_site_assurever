import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actuality from "./pages/Actuality";
import Pro from "./pages/Pro";
import Particuliers from "./pages/Particuliers";
import Recrutement from "./pages/Recrutement";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/actuality" element={<Actuality />} />
        <Route path="/professionnels" element={<Pro />} />
        <Route path="/particuliers" element={<Particuliers />} />
        <Route path="/recrutement" element={<Recrutement />} />
        <Route path="/contact" element={<Contact />} />
        {/* path="*" => pour si l'url ne correspond à rien  */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
