import React from "react";
import "./../styles/Inicio.css";
// Si esta es otra hoja de estilo, asegúrate de incluirla correctamente

const Inicio = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h3 className="sidebar-title">INICIO</h3>
        <nav>
          <ul className="nav-list">
            <li>PANEL</li>
            <li>TOKEN</li>
            <li>DOCUMENTACIÓN</li>
          </ul>
        </nav>
      </aside>
      
      {/* Main Content */}
      <main className="content">
        <div className="header">
          <h2>Bienvenido al Sistema</h2>
        </div>
        <div className="body">
          <div className="alert-box">
            <p>
              Te sugerimos usar clientes REST como Postman e Insomnia para probar
              tus APIs sin la complicación de codificar.
            </p>
          </div>
          <div className="file-box">
            <div className="file-icon">📁</div>
            <p>ApiPeruDevExport.postman_collection.zip</p>
            <p>
              Descarga el archivo de Postman para probar la API:{" "}
              <a href="/postman_collection.json" download>Descargar aquí</a>
            </p>
          </div>
          <p className="update-message">
            Actualiza el <span className="token">{"{{token}}"}</span> en la sección correspondiente de variables.
          </p>
          <button className="next-button">Siguiente<br />Consulta DNI</button>
          <p className="update-info">Última actualización hace un mes</p>
        </div>
      </main>
    </div>
  );
};

export default Inicio;
