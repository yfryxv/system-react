import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <h1 className="navbar-title">SISTEMA</h1>
      <nav className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/registro">Registro</Link>
        <Link to="/documentacion">Documentación</Link>
      </nav>
    </div>
  );
}

export default Navbar;

