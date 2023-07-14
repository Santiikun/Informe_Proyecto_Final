import React, { useState } from "react";
import './App.css';
import Home from './Componentes/Home';
import AplicacionesWeb1 from './Componentes/Aplicacion';
import GestionBaseDatos from './Componentes/Gestion';
import Programacion from "./Componentes/Programa";
import InicioSesion from "./Componentes/Inicio";
import Registro from "./Componentes/Registro";
import Perfil from "./Componentes/Perfil";

function App() {
  const [currentForm, setCurrentForm] = useState('Home');

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  }
  return (
    <div className="App">

   {currentForm === "Home" ? (
      <Home onFormSwitch={toggleForm} />
    ) : currentForm === "AplicacionesWeb1" ? (
      <Perfil onFormSwitch={toggleForm} />
      ) : currentForm === "GestionBaseDatos" ? (
        <GestionBaseDatos onFormSwitch={toggleForm} />
      ) : currentForm === "Programacion" ? (
        <Programacion onFormSwitch={toggleForm} />
      ) : currentForm === "IniciarSesión" ? (
        <InicioSesion onFormSwitch={toggleForm} />
      ) : currentForm === "Registro" ? (
        <Registro onFormSwitch={toggleForm} />
      ) : (
        <AplicacionesWeb1 onFormSwitch={toggleForm} />
      )}
    </div>
    );
  }

export default App;
