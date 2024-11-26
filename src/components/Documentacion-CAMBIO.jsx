import React from 'react';
import 'styles/login.css';
import './App.css';

function App() {
  return (
    <div className="app">
      <aside className="sidebar">
        <h3>ENDPOINTS</h3>
        <ul>
          <li><a href="#consulta-tipocambio">Consulta Tipo de Cambio</a></li>
          <li><a href="#consulta-dni">Consulta DNI</a></li>
          <li><a href="#consulta-ruc">Consulta RUC</a></li>
        </ul>
      </aside>

      <div className="documentation">
        <h2 id="consulta-tipocambio">Consulta Tipo de Cambio</h2>
        <section>
          <h3>Consideraciones</h3>
          <ul>
            <li>Este servicio utiliza datos actualizados de fuentes oficiales.</li>
            <li>Se recomienda usar un token de autorización válido para realizar consultas.</li>
            <li>El tipo de cambio está disponible para soles (PEN) a dólares (USD).</li>
          </ul>
        </section>
        <section>
          <h3>Consulta Tipo de Cambio</h3>
          <p><span className="method">GET</span> http://localhost:8080/api/tipocambio</p>
          <h4>Headers</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Accept</td>
                <td>String</td>
                <td>application/json</td>
              </tr>
              <tr>
                <td>Authorization</td>
                <td>String</td>
                <td>Bearer {`{token}`}</td>
              </tr>
            </tbody>
          </table>
          <h4>Parámetros</h4>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>moneda_origen</td>
                <td>String</td>
                <td>PEN</td>
              </tr><tr>
                <td>moneda_destino</td>
                <td>String</td>
                <td>USD</td>
              </tr>
              <tr>
                <td>fecha</td>
                <td>String</td>
                <td>Fecha de consulta (formato yyyy-mm-dd)</td>
              </tr>
            </tbody>
          </table>
          <h4>Respuesta 200</h4>
          <pre>
            {`
{
    "id: 1,
    "fecha": "2024-09-05",
    "compra": 3.793,
    "venta": 3.797,
    "paralelo": 3.74300000003,
}
            `}
          </pre>
        </section>
      </div>
    </div>
  );
}