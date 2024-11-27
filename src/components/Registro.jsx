import React, { useState } from 'react';
import "./../styles/Registro.css";

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState('login');
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false
  });

  // Función para alternar la visibilidad de la contraseña
  const togglePasswordVisibility = (field) => {
    setShowPassword(prevState => ({
      ...prevState,
      [field]: !prevState[field]
    }));
  };

  const toggleTab = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="tabs">
          <button 
            className={`tab ${activeTab === 'login' ? 'active' : ''}`} 
            onClick={() => toggleTab('login')}
          >
            Inicio de Sesión
          </button>

          <button 
            className={`tab ${activeTab === 'register' ? 'active' : ''}`} 
            onClick={() => toggleTab('register')}
          >
            Registro
          </button>
        </div>

        <div className="form-container">
          {activeTab === 'login' && (
            <form className="form">
              <h2>Iniciar Sesión</h2>
              <input type="email" placeholder="Correo electrónico" required />
              <div className="password-container">
                <input 
                  type={showPassword.current ? "text" : "password"} 
                  placeholder="Contraseña" 
                  required 
                />
                <button 
                  type="button" 
                  className="show-password-btn"
                  onClick={() => togglePasswordVisibility('current')}
                >
                  {showPassword.current ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <button type="submit" className="submit-btn">Iniciar Sesión</button>
            </form>
          )}

          {activeTab === 'register' && (
            <form className="form">
              <h2>Registro</h2>
              <input type="text" placeholder="Nombre" required />
              <input type="email" placeholder="Correo electrónico" required />
              <div className="password-container">
                <input 
                  type={showPassword.new ? "text" : "password"} 
                  placeholder="Contraseña" 
                  required 
                />
                <button 
                  type="button" 
                  className="show-password-btn"
                  onClick={() => togglePasswordVisibility('new')}
                >
                  {showPassword.new ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <div className="password-container">
                <input 
                  type={showPassword.confirm ? "text" : "password"} 
                  placeholder="Confirmar Contraseña" 
                  required 
                />
                <button 
                  type="button" 
                  className="show-password-btn"
                  onClick={() => togglePasswordVisibility('confirm')}
                >
                  {showPassword.confirm ? "Ocultar" : "Mostrar"}
                </button>
              </div>
              <button type="submit" className="submit-btn">Registrarse</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
// mensaje para commit
