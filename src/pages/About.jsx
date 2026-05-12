import React from "react";
import { Link } from "react-router-dom";

function About({ usuario }) {
  return (
    <div className="container">
      <h1>About</h1>

      <p>
        Usuario recibido desde App.jsx:
      </p>

      <h2>{usuario}</h2>

      <Link to="/home">
        <button>Volver a Home</button>
      </Link>
    </div>
  );
}

export default About;
