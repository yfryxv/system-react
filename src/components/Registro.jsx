import React from "react";

function ApiCard({ title, description, headers, body }) {
  return (
    <div className="api-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <h4>Headers</h4>
      <ul>
        {headers.map((header, index) => (
          <li key={index}>
            {header.name} - {header.type}: {header.description}
          </li>
        ))}
      </ul>
      <h4>Body</h4>
      <ul>
        {body.map((param, index) => (
          <li key={index}>
            {param.name} - {param.type}: {param.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApiCard;
