import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  const [usuario, setUsuario] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Login setUsuario={setUsuario} />}
        />

        <Route
          path="/home"
          element={
            usuario ? (
              <Home usuario={usuario} />
            ) : (
              <Navigate to="/" />
            )
          }
        />

        <Route
          path="/about"
          element={
            usuario ? (
              <About usuario={usuario} />
            ) : (
              <Navigate to="/" />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
