import React from "react";
import "./../styles/Inicio.css";

function Inicio() {
  return (
    <div className="inicio">
      <h2>Bienvenido al Sistema</h2>
      <p>
        Descarga el archivo de Postman para probar la API:{" "}
        <a href="/postman_collection.json" download>Descargar aquí</a>
      </p>
    </div>
  );
}

export default Inicio;
