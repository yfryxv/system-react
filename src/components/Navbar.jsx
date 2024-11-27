import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"; // Estilos de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Scripts de Bootstrap
import "./../styles/Navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          {/* Título */}
          <Link className="navbar-brand" to="/">
            API-CODECTA
          </Link>

          {/* Botón Hamburguesa */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Enlaces */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/registro">
                  Registro
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Documentación
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/documentacion/tipo-cambio">
                      Tipo-Cambio
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/documentacion/dni">
                      Consulta DNI
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/documentacion/ruc">
                      Consulta RUC
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
