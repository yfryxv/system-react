import React from "react";
import { Link } from "react-router-dom";
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <h1 className="navbar-title">API-CODECTA</h1>
      <nav className="navbar-links">
        <Link to="/">Inicio</Link>
        <Link to="/registro">Registro</Link>
        <Link to="/documentacion">Documentación</Link>
      </nav>
    </header>
  );
}

export default Navbar;
