import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Registro from "./components/Registro";
import Inicio from "./components/Inicio";
import Documentacion from "./components/Documentacion-DNI";
import DocumentacionDNI from "./components/Documentacion-DNI";
import DocumentacionRUC from "./components/Documentacion-RUC";
import DocumentacionCambio from "./components/Documentacion-CAMBIO";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/registro" element={<Registro />} /> 
            <Route path="/" element={<Inicio />} />
            <Route path="/documentacion" element={<Documentacion />} />
            <Route path="/documentacion/tipo-cambio" element={<DocumentacionCambio />} />
            <Route path="/documentacion/dni" element={<DocumentacionDNI />} />
            <Route path="/documentacion/ruc" element={<DocumentacionRUC />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
