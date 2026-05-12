import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUsuario }) {
  const [nombre, setNombre] = useState("");

  const navigate = useNavigate();

  const iniciarSesion = () => {
    if (nombre.trim() !== "") {
      setUsuario(nombre);
      navigate("/home");
    }
  };

  return (
    <div className="container">
      <h1>Iniciar Sesión</h1>

      <input
        type="text"
        placeholder="Ingresa tu nombre"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button onClick={iniciarSesion}>
        Entrar
      </button>
    </div>
  );
}

export default Login;
