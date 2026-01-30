import React from "react";
import { Routes, Route } from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Home from "./pages/Home";
import ContactPage from "./pages/ContactPage";
import ThanksPage from "./pages/ThanksPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/thanks" element={<ThanksPage />} />
      </Routes>
      <ButtonGradient />
    </>
  );
};

export default App;
