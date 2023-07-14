import React from "react";


function Perfil() {
  return (
    <div>
      <nav className="profile-content4">
        <ul>
          <a href="home.html">Inicio</a>
          <a href="Perfil.html">Perfil</a>
          <a href="inicio.html">Cerrar sesión</a>
        </ul>
      </nav>

      <div className="container4">
        <img className="profile-picture4" src="rector.jpg" alt="Imagen del docente" />
        <h1>Nombre del Rector de Carrera</h1>
        <div className="info4">
          <span className="label4">Nombre:</span> <input type="text" value="Nombre del docente" />
        </div>
        <div className="info4">
          <span className="label4">Apellidos:</span> <input type="text" value="Apellidos del docente" />
        </div>
        <div className="info4">
          <span className="label4">Cédula/Pasaporte:</span> <input type="text" value="Número de cédula o pasaporte" />
        </div>
        <div className="info4">
          <span className="label4">Facultad:</span> <input type="text" value="Ciencias de la vida y tecnologia" />
        </div>
        <div className="info4">
          <span className="label4">Carrera:</span> <input type="text" value="Tecnologías de la información" />
        </div>
        <div className="info4">
          <span className="label4">Correo Electrónico:</span> <input type="text" value="docente@example.com" />
        </div>
        <div className="info4">
          <span className="label4">País:</span>
          <select>
            <option value="pais0">Seleccione</option>
            <option value="pais1">Alemania</option>
            <option value="pais2">Belgica</option>
            <option value="pais3">Brasil</option>
            <option value="pais4">Canada</option>
            <option value="pais5">Ecuador</option>
            <option value="pais6">Dinamarca</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
        </div>
        <div className="info4">
          <span className="label4">Celular:</span> <input type="text" value="Número de celular" />
        </div>
        <div className="info4">
          <span className="label4">Ciudad:</span>
          <select>
            <option value="pais0">Seleccione</option>
            <option value="pais1">Portoviejo</option>
            <option value="pais2">Montecristi</option>
            <option value="pais3">Manta</option>
            <option value="pais4">Jaramijo</option>
            <option value="pais5">San Mateo</option>
            <option value="pais6">Los Bajos</option>
            {/* Agrega más opciones según sea necesario */}
          </select>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
