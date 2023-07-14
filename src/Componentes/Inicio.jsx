import React from 'react';

function InicioSesion() {
  return (
    <div className="container">
      <div className="box-uleam">
        <div className="content-arrow">
          <span className="mask-arrow"><a href="Principal.html"><img src="sources/img/arrow-left.png" alt="" /></a></span>
          <div className="flecha"><a href="Principal.html"><img src="sources/img/arrow-left.png" alt="" /></a></div>
        </div>
        <img src="sources/img/uleam-logo.png" alt="foto de persona" />
      </div>
      <div className="box-register">
        <h1>Iniciar Sesión</h1>
        <form id="register-form">
          <input type="text" placeholder="Usuario" id="user" required />
          <input type="password" placeholder="Contraseña" id="contraseña" required />
          <button type="submit">Iniciar Sesión</button>
          <p><a href="secundaria.html">Iniciar Sesion</a></p>
          <p><a href="Registro.html">¿No tienes una cuenta? Registrate aqui</a></p>
        </form>
      </div>
    </div>
  );
}

export default InicioSesion;
