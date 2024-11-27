import React from "react";
import "./../styles/Registro.css";

const App = () => {
  return (
    <div className="app-container">
      
      <main className="main">
        <div className="form-container">
          <div className="tabs">
            <button className="tab active">Inicio de Sesión</button>
            <button className="tab">Registro</button>
          </div>
          <form className="form">
            <h2>Registro</h2>
            <input type="text" placeholder="Nombre" />
            <input type="email" placeholder="Correo electrónico" />
            <div className="password-input">
              <input type="password" placeholder="Contraseña" />
              <button type="button" className="show-btn">Mostrar</button>
            </div>
            <div className="password-input">
              <input type="password" placeholder="Confirmar Contraseña" />
              <button type="button" className="show-btn">Mostrar</button>
            </div>
            <button type="submit" className="submit-btn">Registrarse</button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default App;
