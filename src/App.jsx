import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Actuality from "./pages/Actuality";
import Pro from "./pages/Pro";
import Recrutement from "./pages/Recrutement";
import Contact from "./pages/Contact";
import Legalnotice from "./pages/Legalnotice";
import Layout from "./components/Layout";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/actuality" element={<Actuality />} />
          <Route path="/professionnels" element={<Pro />} />
          <Route path="/recrutement" element={<Recrutement />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mentionslegales" element={<Legalnotice />} />
          {/* path="*" => pour si l'url ne correspond à rien  */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
